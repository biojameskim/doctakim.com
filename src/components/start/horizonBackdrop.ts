/**
 * The backdrop for the Horizon start page: one full-screen fragment shader.
 *
 * There is no geometry and no texture — a single triangle covers the viewport and the
 * whole image is computed per pixel. Scroll progress arrives as `uP` (0 at the top of
 * the page, 1 at the bottom) and drives three things:
 *
 *   - the horizon drifts down the frame,
 *   - the band of light moves through its three colours,
 *   - the ground crossfades from its opening colour to its closing one.
 *
 * All of the colour lives in SKY below, as data. The shader takes it as uniforms, so
 * re-grading the page is editing five hex values and nothing else.
 *
 * `uTime` only feeds the slow wobble in the horizon and the film grain, so freezing it
 * for `prefers-reduced-motion` leaves the scroll-driven part completely intact.
 */

export type Sky = {
  /** Ground at the start and end of the scroll, in the light appearance. */
  paper: readonly [string, string];
  /** The same two, for when the OS is in dark appearance. */
  paperDark: readonly [string, string];
  /**
   * The band of light: opening, middle, closing. Three stops, because a sunset has to
   * pass through coral on its way from gold to violet and two cannot do that.
   */
  band: readonly [string, string, string];
};

/**
 * The start page's sky. The six other palettes that were explored (dusk, sunrise,
 * sunset, blue hour, first snow, foliage) live in the Seven Skies artifact rather
 * than here — this file carries the one the page actually uses.
 */
export const SKY: Sky = {
  paper: ["#FAF7EE", "#EFE6CE"],
  paperDark: ["#1C1A14", "#14120E"],
  band: ["#FBE08A", "#F6CB5E", "#E8A93C"],
};

/* ------------------------------------------------------------------ colour utils */

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

/**
 * The ground colour at a given moment — the same mix the shader does, so anything that
 * needs to sit against the sky (the ink, the footer) stays right for any sky.
 */
export function groundAt(p: number, dark: boolean, evening: readonly [number, number]) {
  const [a, b] = dark ? SKY.paperDark : SKY.paper;
  const t = smoothstep(evening[0], evening[1], p);
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return [0, 1, 2].map((i) => ca[i] + (cb[i] - ca[i]) * t) as [number, number, number];
}

/** Perceived brightness, 0..1. Above ~0.5 wants dark ink on it, below wants light. */
export function brightness(rgb: readonly [number, number, number]) {
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

/** The ground at each end of the scroll, for painting the page chrome around the canvas. */
export function skyEdges(dark: boolean) {
  const paper = dark ? SKY.paperDark : SKY.paper;
  return { head: paper[0], tail: paper[1] };
}

/* ------------------------------------------------------------------------ shader */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uP;
uniform float uTime;
uniform vec2 uEvening;
uniform vec3 uPaperA, uPaperB, uBandA, uBandM, uBandB;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;

  vec3 paper = mix(uPaperA, uPaperB, smoothstep(uEvening.x, uEvening.y, uP));
  vec3 band = uP < 0.5 ? mix(uBandA, uBandM, uP * 2.0) : mix(uBandM, uBandB, uP * 2.0 - 1.0);

  float hy = 0.46 - uP * 0.10;
  float d = uv.y - hy;
  d -= 0.012 * (noise(vec2(uv.x * 3.0, uTime * 0.06)) - 0.5);

  float wash = exp(-pow(d * 9.0, 2.0));
  vec3 col = mix(paper, band, wash * 0.62);

  // The rule takes whichever value contrasts with the ground it is drawn on, so it
  // stays visible on a pale summer morning and on a near-black dusk alike.
  float lum = dot(paper, vec3(0.2126, 0.7152, 0.0722));
  vec3 rule = mix(vec3(0.886, 0.902, 0.871), vec3(0.196, 0.231, 0.243), step(0.5, lum));
  col = mix(col, rule, smoothstep(0.0016, 0.0, abs(d)) * 0.55);

  col += 0.014 * (noise(gl_FragCoord.xy * 0.9 + uTime * 3.0) - 0.5);

  gl_FragColor = vec4(col, 1.0);
}
`;

export type HorizonRenderer = {
  draw(progress: number, time: number, dark: boolean, evening: readonly [number, number]): void;
  dispose(): void;
};

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Horizon shader failed to compile:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/**
 * Returns null when WebGL is unavailable or the program fails to build. Callers should
 * treat that as "fall back to a flat painted background" rather than as an error.
 */
export function createHorizonRenderer(canvas: HTMLCanvasElement): HorizonRenderer | null {
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, depth: false });
  if (!gl) return null;

  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Horizon program failed to link:", gl.getProgramInfoLog(program));
    return null;
  }
  gl.useProgram(program);

  // One oversized triangle covers the viewport with fewer vertices than a quad.
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const u = (name: string) => gl.getUniformLocation(program, name);
  const uRes = u("uRes");
  const uP = u("uP");
  const uTime = u("uTime");
  const uEvening = u("uEvening");
  const uPaperA = u("uPaperA");
  const uPaperB = u("uPaperB");
  const uBandA = u("uBandA");
  const uBandM = u("uBandM");
  const uBandB = u("uBandB");

  const set3 = (loc: WebGLUniformLocation | null, hex: string) => {
    const [r, g, b] = hexToRgb(hex);
    gl.uniform3f(loc, r, g, b);
  };

  const MAX_DPR = 1.75;

  return {
    draw(progress, time, dark, evening) {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.useProgram(program);
      gl.uniform2f(uRes, w, h);
      gl.uniform1f(uP, progress);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uEvening, evening[0], evening[1]);
      const paper = dark ? SKY.paperDark : SKY.paper;
      set3(uPaperA, paper[0]);
      set3(uPaperB, paper[1]);
      set3(uBandA, SKY.band[0]);
      set3(uBandM, SKY.band[1]);
      set3(uBandB, SKY.band[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose() {
      /* Deliberately not calling WEBGL_lose_context here. getContext() hands back the
         same context object for a given canvas, so losing it would leave a second
         renderer on the same canvas unable to compile anything — which is exactly what
         StrictMode's mount/unmount/mount does in development. */
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    },
  };
}

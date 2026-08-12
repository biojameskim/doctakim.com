import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

import {
  brightness,
  createHorizonRenderer,
  groundAt,
  HorizonRenderer,
  skyEdges,
} from "./horizonBackdrop";

/* =========================================================================
 * EVERYTHING YOU'D NORMALLY WANT TO CHANGE IS IN THIS BLOCK.
 *
 * Add, remove or reorder lines freely — the scroll length, the timing of each
 * line and the moment the light turns to evening are all derived from this
 * list, so nothing else needs adjusting.
 * ========================================================================= */

/** Where a line sits in the frame. Nine combinations of the two. */
type Side = "left" | "right" | "centre";
type Edge = "top" | "middle" | "bottom";

type Line = {
  eyebrow?: string;
  line: string;
  /** Where this line sits. Every line says so outright — there is no pattern to know. */
  at: { side: Side; edge: Edge };
  /**
   * How long this line lasts, where 1 is a normal line. The page gets taller to pay
   * for it, so raising one line's dwell slows that line down without speeding any
   * other line up.
   */
  dwell: number;
};

const LINES: Line[] = [
  {
    line: "I'm James.",
    at: { side: "left", edge: "bottom" },
    dwell: 1.5,
  },
  {
    eyebrow: "I'm studying",
    line: "CS at Cornell",
    at: { side: "left", edge: "bottom" },
    dwell: 1.5,
  },
  {
    eyebrow: "Originally from",
    line: "California",
    at: { side: "right", edge: "top" },
    dwell: 1.5,
  },
  {
    eyebrow: "But currently in",
    line: "Ithaca, NY",
    at: { side: "right", edge: "top" },
    dwell: 1.5,
  },
  {
    line: "Welcome to my corner of the internet.",
    at: { side: "left", edge: "bottom" },
    dwell: 2,
  }
];

/**
 * The door at the end of the scroll.
 *
 *   mark: "doorway" — a frame standing on the horizon, lit from inside on hover.
 *         "sun"     — a disc resting on the horizon that lifts when you reach for it.
 *
 * Both stand on the rule rather than floating in the frame, so they position themselves
 * against it in CSS instead of taking an `at` like the lines do.
 */
const DOOR = {
  to: "/home",
  /** The accessible name; neither mark shows text. */
  label: "Enter",
  mark: "doorway" as DoorMark,
};

type DoorMark = "doorway" | "sun";

/** A doorway: a lit panel behind a three-sided frame standing on the threshold. */
const DoorwayMark = () => (
  <svg viewBox="0 0 22 30" aria-hidden="true" focusable="false">
    <rect className="start-door-light" x="2" y="2" width="18" height="28" />
    <path d="M2 30V2h18v28" />
  </svg>
);

/** A sun: drawn in CSS rather than SVG, because it is one filled circle. */
const SunMark = () => <span className="start-door-disc" />;

/** Screen-heights of scrolling per line. Higher = slower, more deliberate. */
const HEIGHT_PER_LINE_VH = 95;

/** How much of each line's slot it is fully visible for; the rest is breathing room. */
const HOLD = 0.55;

/**
 * The door's dwell, in the same units as a line's. It buys scroll for the door exactly
 * the way `dwell` buys it for a line, and the page grows taller to pay for it.
 */
const DOOR_DWELL = 1.5;

/**
 * How much of that dwell the door spends arriving, from 0 to 1. The remainder it spends
 * fully present, so the page settles on it before handing over to the footer instead of
 * finishing mid-fade. Raise it for a longer, gentler arrival and a shorter settle.
 */
const DOOR_FADE = 0.7;

/* ========================================================================= */

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

type Window = { from: number; to: number; fadeIn: number; fadeOut: number };

/**
 * Lines are spread evenly across the scroll, each holding for HOLD of its own slot.
 * A line's fade can never be longer than half the gap to its neighbour, or two of
 * them would be legible at once.
 */
function buildWindows(weights: number[]): Window[] {
  const total = weights.reduce((sum, w) => sum + w, 0);
  const last = weights.length - 1;
  let cursor = 0;
  const spans = weights.map((weight, i) => {
    const start = cursor / total;
    cursor += weight;
    const end = cursor / total;
    const pad = ((end - start) * (1 - HOLD)) / 2;
    return {
      // The first line is already there when the page loads — nobody should have to
      // scroll to bring the greeting up to full strength.
      from: i === 0 ? 0 : start + pad,
      // The door runs to the very end of the scroll rather than stopping short.
      to: i === last ? 1 : end - pad,
    };
  });
  return spans.map((span, i) => {
    const own = (weights[i] / total) || 0;
    const gapIn = i === 0 ? own : span.from - spans[i - 1].to;
    const gapOut = i === last ? own : spans[i + 1].from - span.to;
    // The door is the exception: it always ends at the very bottom, and spends
    // DOOR_FADE of its own dwell arriving there. The rest of the dwell it holds fully
    // present, which is what stops the ending feeling rushed.
    if (i === last) {
      const span = weights[i] / total;
      const fade = Math.max(0.004, span * DOOR_FADE);
      return { from: 1 - span + fade, to: 1, fadeIn: fade, fadeOut: 0.008 };
    }
    return {
      ...span,
      fadeIn: Math.max(0.008, Math.min(0.055, gapIn * 0.45)),
      fadeOut: Math.max(0.008, Math.min(0.055, gapOut * 0.45)),
    };
  });
}

function visibility(p: number, w: Window) {
  if (p <= w.from - w.fadeIn || p >= w.to + w.fadeOut) return 0;
  if (p < w.from) return (p - (w.from - w.fadeIn)) / w.fadeIn;
  if (p > w.to) return 1 - (p - w.to) / w.fadeOut;
  return 1;
}

const HorizonStart = () => {
  const { colorMode } = useColorMode();
  const dark = colorMode === "dark";

  const total = LINES.length + 1; // + the door
  /** Each line's dwell, then the door's. */
  const weights = useMemo(() => [...LINES.map((l) => l.dwell), DOOR_DWELL], []);
  const windows = useMemo(() => buildWindows(weights), [weights]);
  /** The page is as tall as the sum of what it has to show. */
  const heightVh = useMemo(
    () => weights.reduce((sum, w) => sum + w, 0) * HEIGHT_PER_LINE_VH,
    [weights]
  );

  /**
   * Evening lands in the gap between the last line and the door, so the ground and
   * the ink are never passing through mid-grey while anything is legible.
   */
  const evening = useMemo(() => {
    const gapStart = windows[total - 2].to;
    // The door starts appearing a fade before its window opens.
    const gapEnd = windows[total - 1].from - windows[total - 1].fadeIn;
    const inset = (gapEnd - gapStart) * 0.2;
    return { from: gapStart + inset, to: gapEnd - inset };
  }, [windows, total]);

  const eveningPair = useMemo(
    () => [evening.from, evening.to] as [number, number],
    [evening]
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Scroll progress lives in a ref, not in state: it changes every frame and nothing
     about the React tree depends on it. The render loop writes styles directly. */
  const progressRef = useRef(0);
  const darkRef = useRef(dark);
  darkRef.current = dark;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Measured against the whole document rather than just this section. The footer
       sits below the sticky frame, so the last stretch of scrolling reveals it — and
       if progress finished at the section's end instead, that stretch would be a dead
       zone where you are still scrolling but nothing on screen answers. Running to the
       true bottom keeps the sky moving right up to the last pixel. */
    const readProgress = () => {
      const travel = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = travel > 0 ? clamp01(window.scrollY / travel) : 0;
    };
    readProgress();
    window.addEventListener("scroll", readProgress, { passive: true });
    window.addEventListener("resize", readProgress);

    let renderer: HorizonRenderer | null = null;
    try {
      renderer = createHorizonRenderer(canvas);
    } catch (err) {
      console.error("Horizon backdrop unavailable:", err);
    }
    if (!renderer) canvas.style.display = "none";

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const p = progressRef.current;
      const time = reduced ? 0 : (now - start) / 1000;

      renderer?.draw(p, time, darkRef.current, eveningPair);

      /* Ink is chosen from how bright the ground actually is at this moment, rather
         than from a hardcoded flip — so a sky that stays light all the way (or one that
         ends lighter than it began) keeps readable text without any special casing. */
      const lit = brightness(groundAt(p, darkRef.current, eveningPair));
      const stage = stageRef.current;
      if (stage) {
        const c = lit > 0.5 ? 34 : 236;
        stage.style.color = `rgb(${c}, ${c + 5}, ${Math.max(0, c - 2)})`;
        const halo = lit > 0.5 ? "246, 244, 232" : "10, 14, 18";
        stage.style.textShadow = `0 0 26px rgba(${halo}, .5), 0 0 8px rgba(${halo}, .3)`;
      }

      for (let i = 0; i < windows.length; i++) {
        const el = beatRefs.current[i];
        if (!el) continue;
        const isDoor = i === windows.length - 1;
        const opacity = visibility(p, windows[i]);
        el.style.opacity = opacity.toFixed(3);
        el.style.visibility = opacity > 0 ? "visible" : "hidden";
        if (reduced || isDoor) {
          el.style.transform = "none";
        } else {
          const mid = (windows[i].from + windows[i].to) / 2;
          el.style.transform = `translate3d(0, ${((p - mid) * -280).toFixed(2)}px, 0)`;
        }
      }

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", readProgress);
      window.removeEventListener("resize", readProgress);
      renderer?.dispose();
    };
  }, [windows, eveningPair]);

  /** The door places itself against the horizon, so it passes no `at`. */
  const beat = (
    i: number,
    children: React.ReactNode,
    extraClass = "",
    at?: { side: Side; edge: Edge }
  ) => (
    <div
      key={i}
      className={`start-beat ${extraClass}`}
      data-side={at?.side}
      data-edge={at?.edge}
      ref={(el) => {
        beatRefs.current[i] = el;
      }}
    >
      {children}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="start-horizon"
      style={{
        /* This section is an empty spacer: it exists only to give the fixed backdrop
           something to scroll against. Its background shows for the instant before
           the GL context is ready. */
        height: `${heightVh}vh`,
        background: skyEdges(dark).head,
      }}
    >
      <div className="start-viewport">
        <canvas ref={canvasRef} className="start-canvas" aria-hidden="true" />
        <div
          ref={stageRef}
          className="start-stage"
        >
          {LINES.map((item, i) =>
            beat(
              i,
              <>
                {item.eyebrow && <span className="start-sm">{item.eyebrow}</span>}
                <span className="start-lg">{item.line}</span>
              </>,
              "",
              item.at
            )
          )}
          {beat(
            LINES.length,
            <Link
              to={DOOR.to}
              className={`start-enter start-enter-${DOOR.mark}`}
              aria-label={DOOR.label}
            >
              {DOOR.mark === "doorway" ? <DoorwayMark /> : <SunMark />}
            </Link>,
            "start-beat-door"
          )}
        </div>
      </div>
    </section>
  );
};

export default HorizonStart;

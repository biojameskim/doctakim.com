import React from "react";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import PhotoLightbox, { clampZoom, panForZoom } from "./PhotoLightbox";

global.IS_REACT_ACT_ENVIRONMENT = true;

beforeAll(() => {
  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      addListener() {},
      removeListener() {},
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return false;
      },
    });
  }
});

const selected = {
  photo: {
    filename: "https://images.example.com/photo.webp",
    orientation: "v",
    responsive: {
      src2x: "https://images.example.com/photo-2x.webp",
      src3x: "https://images.example.com/photo-3x.webp",
      originalSrc: "https://images.example.com/photo.jpg",
      intrinsicWidth: 3024,
      intrinsicHeight: 4032,
    },
  },
  previewSrc: "https://images.example.com/photo-2x.webp",
  alt: "Test photo",
};

describe("PhotoLightbox zoom math", () => {
  it("clamps zoom between the supported limits", () => {
    expect(clampZoom(0.25)).toBe(1);
    expect(clampZoom(3)).toBe(3);
    expect(clampZoom(12)).toBe(6);
  });

  it("keeps the focal point fixed while zooming", () => {
    expect(panForZoom({ x: 0, y: 0 }, 1, 2, { x: 100, y: -50 })).toEqual({
      x: -100,
      y: 50,
    });
  });
});

describe("PhotoLightbox trackpad gestures", () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(
        <ChakraProvider>
          <PhotoLightbox selected={selected} onClose={() => {}} />
        </ChakraProvider>,
      );
    });
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("uses Chrome's Ctrl+wheel pinch signal to zoom the photo", () => {
    const viewport = document.querySelector('[data-testid="photo-lightbox-viewport"]');
    const frame = document.querySelector('[data-testid="photo-lightbox-frame"]');
    const pinch = new WheelEvent("wheel", {
      bubbles: true,
      cancelable: true,
      clientX: 400,
      clientY: 300,
      ctrlKey: true,
      deltaY: -50,
    });

    act(() => viewport.dispatchEvent(pinch));

    expect(pinch.defaultPrevented).toBe(true);
    expect(Number(frame.dataset.zoom)).toBeGreaterThan(1);
  });

  it("uses Safari gesture events to zoom the photo", () => {
    const viewport = document.querySelector('[data-testid="photo-lightbox-viewport"]');
    const frame = document.querySelector('[data-testid="photo-lightbox-frame"]');
    const start = new Event("gesturestart", { bubbles: true, cancelable: true });
    const change = new Event("gesturechange", { bubbles: true, cancelable: true });
    Object.defineProperties(change, {
      clientX: { value: 400 },
      clientY: { value: 300 },
      scale: { value: 2 },
    });

    act(() => viewport.dispatchEvent(start));
    act(() => viewport.dispatchEvent(change));

    expect(start.defaultPrevented).toBe(true);
    expect(change.defaultPrevented).toBe(true);
    expect(frame.dataset.zoom).toBe("2");
  });
});

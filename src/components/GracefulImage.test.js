import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ChakraProvider } from "@chakra-ui/react";
import GracefulImage from "./GracefulImage";

// Chakra's toast portal calls useLayoutEffect, which React warns about under
// renderToStaticMarkup. It is inherent to server-rendering Chakra, not a defect here,
// so filter exactly that message and let every other console error through.
let consoleError;
beforeAll(() => {
  const original = console.error;
  consoleError = jest.spyOn(console, "error").mockImplementation((...args) => {
    if (typeof args[0] === "string" && args[0].includes("useLayoutEffect does nothing on the server")) {
      return;
    }
    original(...args);
  });
});

afterAll(() => {
  consoleError.mockRestore();
});

// Chakra's useBreakpointValue reaches for matchMedia, which jsdom does not provide.
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

const render = (props) =>
  renderToStaticMarkup(
    <ChakraProvider>
      <GracefulImage {...props} />
    </ChakraProvider>,
  );

const responsiveProps = {
  src: "https://images.example.com/one-350w.webp",
  alt: "a photo",
  webpSrcSet:
    "https://images.example.com/one-350w.webp 1x, " +
    "https://images.example.com/two-700w.webp 2x, " +
    "https://images.example.com/three-1050w.webp 3x",
  fallbackSrc: "https://images.example.com/original.jpg",
  intrinsicWidth: 3024,
  intrinsicHeight: 4032,
};

describe("GracefulImage responsive sources", () => {
  it("emits a picture element with a WebP density srcset", () => {
    const markup = render(responsiveProps);

    expect(markup).toContain("<picture");
    expect(markup).toContain('type="image/webp"');
    expect(markup).toContain("one-350w.webp 1x");
    expect(markup).toContain("two-700w.webp 2x");
    expect(markup).toContain("three-1050w.webp 3x");
  });

  it("points the img fallback at the original, not a WebP variant", () => {
    expect(render(responsiveProps)).toContain(
      'src="https://images.example.com/original.jpg"',
    );
  });

  it("passes intrinsic dimensions as HTML attributes", () => {
    const markup = render(responsiveProps);

    expect(markup).toContain('width="3024"');
    expect(markup).toContain('height="4032"');
  });

  it("does not let intrinsic dimensions trigger fixed-size mode", () => {
    const markup = render(responsiveProps);

    // The regression this guards: routing a 4032px intrinsic height through the
    // `height` prop would satisfy `hasFixedDimensions` and render a wrapper as tall
    // as the source image. Intrinsics must reach the img as HTML attributes only.
    expect(markup).toContain("graceful-image-wrapper-intrinsic");
    expect(markup).not.toContain("graceful-image-wrapper-fixed");
    expect(markup).not.toContain("height:4032px");
  });

  it("renders a plain img when a photo has not been migrated", () => {
    const markup = render({
      src: "https://images.example.com/legacy.jpg",
      alt: "an unmigrated photo",
    });

    expect(markup).not.toContain("<picture");
    expect(markup).not.toContain("srcSet");
    expect(markup).toContain('src="https://images.example.com/legacy.jpg"');
  });

  it("keeps the fixed-dimension path working for blog cards", () => {
    const markup = render({
      src: "https://images.example.com/card.jpg",
      alt: "a blog card",
      boxSize: "full",
      w: "full",
      h: "full",
    });

    expect(markup).toContain("graceful-image-wrapper-fixed");
    expect(markup).toContain('src="https://images.example.com/card.jpg"');
  });
});

import { syncDocumentTheme } from "./ThemeColorSync";

describe("syncDocumentTheme", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    document.documentElement.removeAttribute("style");
    document.body.removeAttribute("style");
  });

  it.each([
    ["dark", "#1a202c", "rgb(26, 32, 44)"],
    ["light", "#f7fafc", "rgb(247, 250, 252)"],
  ])(
    "synchronizes the document when switching to %s mode",
    (mode, background, normalizedBackground) => {
      syncDocumentTheme(mode, background);

      expect(
        document.querySelector('meta[name="theme-color"]')?.content,
      ).toBe(background);
      expect(document.documentElement.style.backgroundColor).toBe(
        normalizedBackground,
      );
      expect(document.documentElement.style.colorScheme).toBe(mode);
      expect(document.body.style.backgroundColor).toBe(normalizedBackground);
    },
  );

  it("updates the existing theme-color tag instead of adding another", () => {
    document.head.innerHTML =
      '<meta name="theme-color" content="#f7fafc">';

    syncDocumentTheme("dark", "#1a202c");

    expect(document.querySelectorAll('meta[name="theme-color"]')).toHaveLength(
      1,
    );
    expect(
      document.querySelector('meta[name="theme-color"]')?.content,
    ).toBe("#1a202c");
  });
});

import fs from "fs";
import path from "path";
import theme from "./theme";

const publicHtml = fs.readFileSync(
  path.join(process.cwd(), "public/index.html"),
  "utf8",
);
const globalCss = fs.readFileSync(
  path.join(process.cwd(), "src/index.css"),
  "utf8",
);

describe("system color mode", () => {
  it("configures Chakra to follow live system preferences", () => {
    expect(theme.config.initialColorMode).toBe("system");
    expect(theme.config.useSystemColorMode).toBe(true);
  });

  it("declares native color-scheme and toolbar colors for both modes", () => {
    expect(publicHtml).toContain(
      '<meta name="color-scheme" content="light dark" />',
    );
    expect(publicHtml).toContain(
      '<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />',
    );
    expect(publicHtml).toContain(
      '<meta name="theme-color" content="#1a202c" media="(prefers-color-scheme: dark)" />',
    );
  });

  it("provides matching pre-render backgrounds for light and dark modes", () => {
    expect(globalCss).toMatch(
      /html\s*{[^}]*background-color:\s*#ffffff;/s,
    );
    expect(globalCss).toMatch(
      /@media\s*\(prefers-color-scheme:\s*dark\)\s*{[\s\S]*?html\s*{[^}]*background-color:\s*#1a202c;/,
    );
  });
});

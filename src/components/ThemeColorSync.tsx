import { useColorMode, useToken } from "@chakra-ui/react";
import { useEffect } from "react";

export function syncDocumentTheme(
  colorMode: "light" | "dark",
  background: string,
) {
  let themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );

  if (!themeColor) {
    themeColor = document.createElement("meta");
    themeColor.name = "theme-color";
    document.head.appendChild(themeColor);
  }

  themeColor.content = background;
  document.documentElement.style.backgroundColor = background;
  document.documentElement.style.colorScheme = colorMode;
  document.body.style.backgroundColor = background;
}

/**
 * Keep the document background and Safari's surrounding browser UI in sync
 * with Chakra's color mode. The document background is visible in iOS safe
 * areas, while theme-color controls Safari's top and bottom chrome.
 */
export default function ThemeColorSync() {
  const { colorMode } = useColorMode();
  const [lightBackground, darkBackground] = useToken("colors", [
    "gray.50",
    "gray.800",
  ]);
  const background =
    colorMode === "dark" ? darkBackground : lightBackground;

  useEffect(() => {
    syncDocumentTheme(colorMode, background);
  }, [background, colorMode]);

  return null;
}

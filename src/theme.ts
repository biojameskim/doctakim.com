// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      // Chakra injects its global styles via emotion at runtime, so they land
      // after index.css in the cascade and would win. Inheriting from <html>
      // hands the background back to the media query in index.css while still
      // giving <body> a resolved color for Safari 26 to sample for its toolbars.
      body: {
        bg: "inherit",
      },
    },
  },
  fonts: {
    heading: "'Monaspace Neon'",
    body: "'Monaspace Neon'",
  },
  components: {
    Text: { baseStyle: { fontFamily: "'Monaspace Neon'" } },
    Heading: { baseStyle: { fontFamily: "'Monaspace Neon'" } },
    Button: { baseStyle: { fontFamily: "'Monaspace Neon'" } },
  },
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#0ea5e9',
      900: '#0c4a6e',
    }
  }
});

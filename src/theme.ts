// src/theme.js
import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
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

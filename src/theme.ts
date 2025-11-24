// src/theme.js
import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    heading: "'Satoshi', sans-serif",
    body: "'Satoshi', sans-serif",
  },
  components: {
    Text: { baseStyle: { fontFamily: "'Satoshi', sans-serif" } },
    Heading: { baseStyle: { fontFamily: "'Satoshi', sans-serif" } },
    Button: { baseStyle: { fontFamily: "'Satoshi', sans-serif" } },
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

// src/theme.js
import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    heading: "'Nunito', sans-serif",
    body: "'Nunito', sans-serif",
  },
  components: {
    Text: { baseStyle: { fontFamily: "'Nunito', sans-serif" } },
    Heading: { baseStyle: { fontFamily: "'Nunito', sans-serif" } },
    Button: { baseStyle: { fontFamily: "'Nunito', sans-serif" } },
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

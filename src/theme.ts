// src/theme.js
import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    heading: "'James', 'DM Sans', sans-serif",
    body:    "BlinkMacSystemFont, 'DM Sans', sans-serif",
  },
  components: {
    Text:    { baseStyle: { fontFamily: "BlinkMacSystemFont, 'DM Sans', sans-serif" } },
    Heading: { baseStyle: { fontFamily: "'James', 'DM Sans', sans-serif" } },
    Button:  { baseStyle: { fontFamily: "'James', 'DM Sans', sans-serif" } },
  },
});

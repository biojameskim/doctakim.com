import { ChakraProvider } from "@chakra-ui/react"
import type { StorageManager } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { App } from "./App"
import theme from "./theme"
import "./index.css"

// The site follows the OS appearance and has no theme toggle, so nothing should
// be persisted. Chakra's default localStorage manager takes priority over the
// system value on mount, which would pin a returning visitor to whatever mode
// they last loaded the site in. Returning undefined makes it resolve from the
// system every time; useSystemColorMode in theme.ts keeps it live after that.
const systemColorModeManager: StorageManager = {
  type: "localStorage",
  ssr: false,
  get: () => undefined,
  set: () => { },
}

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme} colorModeManager={systemColorModeManager}>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

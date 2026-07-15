import monaspaceNeonUrl from "./fonts/MonaspaceNeon/Monaspace Neon Var.woff2";

// Injected before React renders so the browser starts fetching the font
// immediately instead of discovering it only after index.css is parsed —
// without this the page flashes the fallback font for 1-2s on first load.
const link = document.createElement("link");
link.rel = "preload";
link.as = "font";
link.type = "font/woff2";
link.crossOrigin = "anonymous";
link.href = monaspaceNeonUrl;
document.head.appendChild(link);

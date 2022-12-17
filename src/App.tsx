import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StartPage from "./pages/StartPage"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Blog from "./pages/Blog"
import Connect from "./pages/Connect"
import "./fonts/james1-regular-webfont.woff"
import ReactGA from 'react-ga4'
import NotFound from "./components/NotFound"
// Blog Entry Imports
import FreshmanStory from "./blog_entries/FreshmanStory"
import GrowingUp from "./blog_entries/GrowingUp"
import MySister from "./blog_entries/MySister"
import TreasureHunt from "./blog_entries/TreasureHunt"


const TRACKING_ID = "G-1SF4Z7N7NS"
ReactGA.initialize(TRACKING_ID)

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <div className="main-wrapper">
        <div className="navbar"><NavBar /></div>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/connect" element={<Connect />} />
          <Route path='*' element={<NotFound />} />
          {/* Blog entry routes */}
          <Route path="/blog/my-freshman-college-story" element={<FreshmanStory />} />
          <Route path="/blog/growing-up" element={<GrowingUp />} />
          <Route path="/blog/my-sister" element={<MySister />} />
          <Route path="/blog/treasure-hunt" element={<TreasureHunt />} />
        </Routes>
      </div>
      <div className="footer-pin"><Footer /></div>
    </Router>
  </ChakraProvider>
)

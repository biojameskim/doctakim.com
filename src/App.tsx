import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages Imports
import StartPage from "./pages/StartPage"
import NavBar from "./components/navbar/Navbar"
import Footer from "./components/navbar/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/experience/Experience"
import Blog from "./pages/blog/Blog"
import Connect from "./pages/Connect"
import NotFound from "./pages/NotFound"
import Hidden from "./pages/Hidden"
import "./fonts/james1-regular-webfont.woff"
import ReactGA from 'react-ga4'

// Blog Entry Imports (Stories)
import FreshmanStory from "./blog_entries/stories/FreshmanStory"
import GrowingUp from "./blog_entries/stories/GrowingUp"
import MySister from "./blog_entries/stories/MySister"
import TreasureHunt from "./blog_entries/stories/TreasureHunt"
import SophomoreSlump from "./blog_entries/stories/SophomoreSlump"

// Blog Entry Imports (Thoughts)
import MrsLupsaiu from "./blog_entries/thoughts/MrsLupsaiu"
import FaceTime from "./blog_entries/thoughts/FaceTime"

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
          <Route path="/hidden" element={<Hidden />} />
          {/* Blog entry routes (Stories) */}
          <Route path="/blog/my-freshman-college-story" element={<FreshmanStory />} />
          <Route path="/blog/growing-up" element={<GrowingUp />} />
          <Route path="/blog/my-sister" element={<MySister />} />
          <Route path="/blog/treasure-hunt" element={<TreasureHunt />} />
          <Route path="/blog/sophomore-slump" element={<SophomoreSlump />} />
          {/* Blog entry routes (Thoughts) */}
          <Route path="/blog/dear-mrs-lupsaiu" element={<MrsLupsaiu />} />
          <Route path="/blog/facetime" element={<FaceTime />} />
        </Routes>
      </div>
      <div className="footer-pin"><Footer /></div>
    </Router>
  </ChakraProvider>
)

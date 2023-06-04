import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./fonts/james1-regular-webfont.woff"

// Pages
import { StartPage, Home, About, Experience, Blog, Connect, NotFound, Hidden } from "./pages/pages"
// Components
import { NavBar, Footer } from "./components/components"
// Blog Entries(Stories)
import { FreshmanStory, GrowingUp, MySister, TreasureHunt, SophomoreSlump } from "./blog_entries/blog_entries"
// Blog Entries (Thoughts)
import { MrsLupsaiu, FaceTime } from "./blog_entries/blog_entries"

// Google Analytics
import ReactGA from 'react-ga4'
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

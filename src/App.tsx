import { ChakraProvider, theme} from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StartPage from "./components/StartPage"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Employment from "./components/Employment"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Blog from "./components/Blog"
import Connect from "./components/Connect"
import "./fonts/james1-regular-webfont.woff"
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
          <Route path="/employment" element={<Employment />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div> 
      <div className="footer-pin"><Footer /></div>
    </Router>
  </ChakraProvider>
)

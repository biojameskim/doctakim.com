import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import theme from "./theme"

// Pages
import {
  StartPage,
  Home,
  Blog,
  NotFound,
  Hidden,
  Birthdays,
  Gallery,
} from "./pages/pages";
// Components
import { NavBar, Footer } from "./components/components";
// Blog Entries Data
import { story_data, thoughts_data, fiction_data } from "./data/blog_data";
// Blog Entries (Birthdays)
import {
  GraceLo20,
  GraceLi21,
  Derek20,
  Angy20,
} from "./blog_entries/blog_entries";

// Google Analytics
import ReactGA from "react-ga4";
const TRACKING_ID = "G-1SF4Z7N7NS";
ReactGA.initialize(TRACKING_ID);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <div className="main-wrapper">
        <div className="navbar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/blog" element={<Navigate to="/blog/stories" replace />} />
          <Route path="/blog/stories" element={<Blog />} />
          <Route path="/blog/thoughts" element={<Blog />} />
          <Route path="/blog/fiction" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:year" element={<Gallery />} />
          <Route path="/gallery/:year/:month" element={<Gallery />} />
          <Route path="/gallery/:year/:month/:subfolder" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
          {/* Hidden pages */}
          <Route path="/hidden" element={<Hidden />} />
          <Route path="/birthdays" element={<Birthdays />} />
          {/* Blog entry routes (Stories) */}
          {story_data.map((item) => (
            <Route key={item.route} path={item.route} element={<item.component />} />
          ))}
          {/* Blog entry routes (Thoughts) */}
          {thoughts_data.map((item) => (
            <Route key={item.route} path={item.route} element={<item.component />} />
          ))}
          {/* Blog entry routes (Fiction) */}
          {fiction_data.map((item) => (
            <Route key={item.route} path={item.route} element={<item.component />} />
          ))}
          <Route path="/birthdays/grace-lo-20th" element={<GraceLo20 />} />
          <Route path="/birthdays/grace-li-21st" element={<GraceLi21 />} />
          <Route path="/birthdays/derek-20th" element={<Derek20 />} />
          <Route path="/birthdays/angy-20th" element={<Angy20 />} />
        </Routes>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </Router>
  </ChakraProvider>
);

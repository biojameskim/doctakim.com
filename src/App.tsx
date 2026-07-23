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
import SEO from "./components/SEO";
// Blog Entries Data
import { story_data, thoughts_data, fiction_data } from "./data/blog_data";
// Birthdays Data
import { birthday_data } from "./data/birthday_data";

// Google Analytics
import ReactGA from "react-ga4";
const TRACKING_ID = "G-1SF4Z7N7NS";
ReactGA.initialize(TRACKING_ID);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      {/* Site-wide default description/OG/Twitter tags; pages render their own <SEO>
          deeper in the tree to override these (react-helmet-async merges by depth). */}
      <SEO />
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
            <Route key={item.route} path={item.route} element={
              <>
                <SEO title={`biojameskim | ${item.title}`} description={item.description} image={item.image} url={item.route} type="article" />
                <item.component />
              </>
            } />
          ))}
          {/* Blog entry routes (Thoughts) */}
          {thoughts_data.map((item) => (
            <Route key={item.route} path={item.route} element={
              <>
                <SEO title={`biojameskim | ${item.title}`} description={item.description} image={item.image} url={item.route} type="article" />
                <item.component />
              </>
            } />
          ))}
          {/* Blog entry routes (Fiction) */}
          {fiction_data.map((item) => (
            <Route key={item.route} path={item.route} element={
              <>
                <SEO title={`biojameskim | ${item.title}`} description={item.description} image={item.image} url={item.route} type="article" />
                <item.component />
              </>
            } />
          ))}
          {/* Birthday routes */}
          {birthday_data.map((item) => (
            <Route key={item.route} path={item.route} element={
              <>
                <SEO title={`biojameskim | ${item.title}`} url={item.route} />
                <item.component />
              </>
            } />
          ))}
        </Routes>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </Router>
  </ChakraProvider>
);

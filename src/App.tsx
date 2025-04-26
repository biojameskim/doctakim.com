import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme"

// Pages
import {
  StartPage,
  Home,
  About,
  Experience,
  Blog,
  NotFound,
  Hidden,
  Birthdays,
} from "./pages/pages";
// Components
import { NavBar, Footer } from "./components/components";
// Blog Entries (Stories)
import {
  FreshmanStory,
  GrowingUp,
  MySister,
  TreasureHunt,
  SophomoreSlump,
  Prayer,
  WistfulMemories,
  BestLatte,
} from "./blog_entries/blog_entries";
// Blog Entries (Thoughts)
import { MrsLupsaiu, FaceTime } from "./blog_entries/blog_entries";
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
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          {/* Hidden pages */}
          <Route path="/hidden" element={<Hidden />} />
          <Route path="/birthdays" element={<Birthdays />} />
          {/* Blog entry routes (Stories) */}
          <Route
            path="/blog/my-freshman-college-story"
            element={<FreshmanStory />}
          />
          <Route path="/blog/growing-up" element={<GrowingUp />} />
          <Route path="/blog/my-sister" element={<MySister />} />
          <Route path="/blog/treasure-hunt" element={<TreasureHunt />} />
          <Route path="/blog/sophomore-slump" element={<SophomoreSlump />} />
          <Route path="/blog/wistful-memories" element={<WistfulMemories />} />
          <Route path="/blog/best-latte" element={<BestLatte />} />
          {/* Blog entry routes (Thoughts) */}
          <Route path="/blog/prayer" element={<Prayer />} />
          <Route path="/blog/dear-mrs-lupsaiu" element={<MrsLupsaiu />} />
          <Route path="/blog/facetime" element={<FaceTime />} />
          {/* Birthday routes */}
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

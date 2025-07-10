import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "../src/components/NavBar";
import ROUTES from "./routes";
import Footer from "./components/Footer";

import BecomeVendor from "./pages/BecomeVendor";
import BecomeBusker from "./pages/BecomeBusker";
import CommunityTable from "./pages/CommunityTable";
import OurStory from "./pages/OurStory";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BECOME_A_VENDOR} element={<BecomeVendor />} />
          <Route path={ROUTES.BECOME_A_BUSKER} element={<BecomeBusker />} />
          <Route path={ROUTES.COMMUNITY_TABLE} element={<CommunityTable />} />
          <Route path={ROUTES.OUR_STORY} element={<OurStory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "../src/components/NavBar";
import ROUTES from "./routes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import BecomeVendor from "./pages/BecomeVendor";
import BecomeBusker from "./pages/BecomeBusker";
import CommunityTable from "./pages/CommunityTable";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import FAQS from "./pages/FAQs";
import EventsPage from "./pages/EventsPage";
import RentalSpaces from "./pages/RentalSpaces";
import MainMarketHallDetails from "./pages/MainMarketHall";
import WorkshopRoomDetails from "./pages/WorkshopRoom";
import KitchenDetails from "./pages/Kitchen";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BECOME_A_VENDOR} element={<BecomeVendor />} />
          <Route path={ROUTES.BECOME_A_BUSKER} element={<BecomeBusker />} />
          <Route path={ROUTES.COMMUNITY_TABLE} element={<CommunityTable />} />
          <Route path={ROUTES.OUR_STORY} element={<OurStory />} />
          <Route path={ROUTES.CONTACT_US} element={<Contact />} />
          <Route path={ROUTES.FAQ} element={<FAQS />} />
          <Route path={ROUTES.SEE_EVENTS} element={<EventsPage />} />
          <Route path={ROUTES.RENTAL_SPACES} element={<RentalSpaces />} />
          <Route
            path={ROUTES.MainMarketHall}
            element={<MainMarketHallDetails />}
          />
          <Route path={ROUTES.WorkshopRoom} element={<WorkshopRoomDetails />} />
          <Route path={ROUTES.Kitchen} element={<KitchenDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

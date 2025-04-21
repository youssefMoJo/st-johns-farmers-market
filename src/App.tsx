import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "../src/components/NavBar";
import BecomeVendor from "./pages/BecomeVendor";
import ROUTES from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BECOME_A_VENDOR} element={<BecomeVendor />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

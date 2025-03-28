import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  const handleNavClick = () => {
    setNavBarExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#143C5D",
        fontWeight: "400",
      }}
      data-bs-theme="dark"
      expanded={navBarExpanded}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width="90" height="50" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setNavBarExpanded(!navBarExpanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <NavDropdown title="Vendors" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/meet-our-vendors"
                onClick={handleNavClick}
              >
                Meet our vendors
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/become-a-vendor"
                onClick={handleNavClick}
              >
                Become a vendor
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/become-a-busker"
                onClick={handleNavClick}
              >
                Become a Busker
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/community-table"
                onClick={handleNavClick}
              >
                Community Table
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/market-map"
                onClick={handleNavClick}
              >
                Market Map
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/see-our-events"
                onClick={handleNavClick}
              >
                See our Events
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/event-center"
                onClick={handleNavClick}
              >
                Event Center
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/our-story" onClick={handleNavClick}>
              Our story
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={handleNavClick}>
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs" onClick={handleNavClick}>
              FAQ
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/plan-your-visit  "
              onClick={handleNavClick}
            >
              Plan your visit
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

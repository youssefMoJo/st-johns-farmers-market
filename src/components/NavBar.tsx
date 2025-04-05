import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import faceBookIcon from "../assets/Icons/fb-Icon.png";
import instaIcon from "../assets/Icons/insta-icon.png";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(false);

  const handleNavClick: () => void = () => {
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
          <img src={logo} alt="Logo" width={70} height={45} />
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
          <a
            target="_blank"
            href="https://www.facebook.com/sjfmnl"
            className="text-white mx-2"
            rel="noopener noreferrer"
          >
            <img src={faceBookIcon} alt="Facebook" width="30" height="30" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/sjfmnl"
            className="text-white mx-2"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} alt="Instagram" width="35" height="35" />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

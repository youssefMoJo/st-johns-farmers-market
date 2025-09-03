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
import ROUTES from "../routes";
import { EXTERNAL_LINKS } from "../constants/externalLinks";

export default function NavBar() {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(false);

  const handleNavClick: () => void = () => {
    setNavBarExpanded(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#143C5D",
          fontWeight: "400",
        }}
        data-bs-theme="dark"
        expanded={navBarExpanded}
        sticky="top"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand as={Link} to={ROUTES.HOME}>
            <img src={logo} alt="Logo" width={70} height={45} />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setNavBarExpanded(!navBarExpanded)}
          />
          {/* Desktop Nav */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="mx-auto text-center w-100 d-lg-flex justify-content-lg-center">
              <Nav.Link as={Link} to={ROUTES.HOME} onClick={handleNavClick}>
                Home
              </Nav.Link>
              <NavDropdown title="Vendors" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to={ROUTES.MEET_OUR_VENDORS}
                  onClick={handleNavClick}
                >
                  Meet our vendors
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={ROUTES.BECOME_A_VENDOR}
                  onClick={handleNavClick}
                >
                  Become a vendor
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={ROUTES.BECOME_A_BUSKER}
                  onClick={handleNavClick}
                >
                  Become a Busker
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={ROUTES.COMMUNITY_TABLE}
                  onClick={handleNavClick}
                >
                  Community Table
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={ROUTES.MARKET_MAP}
                  onClick={handleNavClick}
                >
                  Market Map
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to={ROUTES.RENTAL_SPACES}
                onClick={handleNavClick}
              >
                Rental Spaces
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={ROUTES.SEE_EVENTS}
                onClick={handleNavClick}
              >
                Events
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={ROUTES.OUR_STORY}
                onClick={handleNavClick}
              >
                Our story
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={ROUTES.CONTACT_US}
                onClick={handleNavClick}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.FAQ} onClick={handleNavClick}>
                FAQ
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={ROUTES.PLAN_VISIT}
                onClick={handleNavClick}
              >
                Plan your visit
              </Nav.Link>
            </Nav>
            <a
              target="_blank"
              href={EXTERNAL_LINKS.facebook}
              className="text-white mx-2"
              rel="noopener noreferrer"
            >
              <img src={faceBookIcon} alt="Facebook" width="30" height="30" />
            </a>
            <a
              target="_blank"
              href={EXTERNAL_LINKS.instagram}
              className="text-white mx-2"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} alt="Instagram" width="35" height="35" />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar ${navBarExpanded ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "80vw",
          maxWidth: "320px",
          background: "#143C5D",
          zIndex: 9999,
          transform: navBarExpanded ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.25s ease-in-out", // <-- use ease-in-out for smooth, no bounce
          boxShadow: navBarExpanded
            ? "-2px 0 16px rgba(20,60,93,0.18)"
            : "none",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 1.2rem 1.2rem 1.2rem",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            position: "absolute",
            top: "18px",
            left: "18px", // <-- changed from right to left
            cursor: "pointer",
            zIndex: 10001,
          }}
          aria-label="Close menu"
          onClick={() => setNavBarExpanded(false)}
        >
          &times;
        </button>
        <Nav
          className="flex-column"
          style={{ marginTop: "2.5rem", gap: "1rem" }}
        >
          <Nav.Link as={Link} to={ROUTES.HOME} onClick={handleNavClick}>
            Home
          </Nav.Link>
          <NavDropdown title="Vendors" id="mobile-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to={ROUTES.MEET_OUR_VENDORS}
              onClick={handleNavClick}
            >
              Meet our vendors
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to={ROUTES.BECOME_A_VENDOR}
              onClick={handleNavClick}
            >
              Become a vendor
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to={ROUTES.BECOME_A_BUSKER}
              onClick={handleNavClick}
            >
              Become a Busker
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to={ROUTES.COMMUNITY_TABLE}
              onClick={handleNavClick}
            >
              Community Table
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to={ROUTES.MARKET_MAP}
              onClick={handleNavClick}
            >
              Market Map
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={Link}
            to={ROUTES.RENTAL_SPACES}
            onClick={handleNavClick}
          >
            Rental Spaces
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.SEE_EVENTS} onClick={handleNavClick}>
            Events
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.OUR_STORY} onClick={handleNavClick}>
            Our story
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.CONTACT_US} onClick={handleNavClick}>
            Contact Us
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.FAQ} onClick={handleNavClick}>
            FAQ
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.PLAN_VISIT} onClick={handleNavClick}>
            Plan your visit
          </Nav.Link>
        </Nav>
        <div style={{ marginTop: "auto", display: "flex", gap: "18px" }}>
          <a
            target="_blank"
            href={EXTERNAL_LINKS.facebook}
            className="text-white"
            rel="noopener noreferrer"
          >
            <img src={faceBookIcon} alt="Facebook" width="30" height="30" />
          </a>
          <a
            target="_blank"
            href={EXTERNAL_LINKS.instagram}
            className="text-white"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} alt="Instagram" width="35" height="35" />
          </a>
        </div>
      </div>
      {/* Overlay for sidebar */}
      {navBarExpanded && (
        <div
          onClick={() => setNavBarExpanded(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(20,60,93,0.25)",
            zIndex: 9998,
          }}
        />
      )}
      {/* Sidebar styles */}
      <style>
        {`
          @media (max-width: 991px) {
            .custom-navbar .navbar-collapse {
              display: none !important;
            }
            .mobile-sidebar {
              display: flex !important;
            }
          }
          @media (min-width: 992px) {
            .mobile-sidebar {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
}

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
    // setNavBarExpanded(false);
    // window.scrollTo(0, 0);
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
        <Navbar.Brand as={Link} to={ROUTES.HOME}>
          <img src={logo} alt="Logo" width={70} height={45} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setNavBarExpanded(!navBarExpanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
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
  );
}

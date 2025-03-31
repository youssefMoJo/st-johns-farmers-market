import Image from "react-bootstrap/Image";
import homeHeroImg from "../assets/home-hero.jpg";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      style={{ width: "100%", overflow: "hidden", position: "relative" }}
      className="App"
    >
      <Image src={homeHeroImg} fluid className="w-100" />
      <Container
        className="hero-btn-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontFamily: "Yanone Kaffeesatz",
            fontSize: 40,
            fontWeight: "bolder",
            color: "white",
            textShadow:
              "-2px -2px 0 #9D2525, 2px -2px 0 #9D2525, -2px 2px 0 #9D2525, 2px 2px 0 #9D2525, -3px -3px 0 #9D2525, 3px -3px 0 #9D2525, -3px 3px 0 #9D2525, 3px 3px 0 #9D2525",
          }}
        >
          Experience the Heart of St. John’s
        </h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant="secondary"
            style={{
              backgroundColor: "#143C5D",
              fontFamily: "Yanone Kaffeesatz",
              width: "auto",
              fontWeight: "bold",
            }}
          >
            <Nav.Link as={Link} to="/meet-our-vendors">
              View Our Vendors
            </Nav.Link>
          </Button>
          <Button
            variant="secondary"
            style={{
              backgroundColor: "#F2F5D5",
              color: "#AC1C21",
              fontFamily: "Yanone Kaffeesatz",
              width: "auto",
              fontWeight: "bold",
            }}
          >
            <Nav.Link as={Link} to="/see-our-events">
              See Upcoming Events
            </Nav.Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

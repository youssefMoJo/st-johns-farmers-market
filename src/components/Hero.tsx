import Image from "react-bootstrap/Image";
import homeHeroImg from "../assets/home-hero.jpg";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import "../styles/Hero.css";
import CustomButton from "./ui/CustomButton";

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
          className="hero-title"
          style={{
            fontFamily: "Yanone Kaffeesatz",
            fontSize: "5vw",
            fontWeight: "bolder",
            color: "white",
            textShadow:
              "-2px -2px 0 #9D2525, 2px -2px 0 #9D2525, -2px 2px 0 #9D2525, 2px 2px 0 #9D2525, -3px -3px 0 #9D2525, 3px -3px 0 #9D2525, -3px 3px 0 #9D2525, 3px 3px 0 #9D2525",
          }}
        >
          <span className="word word1" style={{ marginRight: "10px" }}>
            Experience
          </span>
          <span className="word word2" style={{ marginRight: "10px" }}>
            the
          </span>
          <span className="word word3" style={{ marginRight: "10px" }}>
            Heart
          </span>
          <span className="word word4" style={{ marginRight: "10px" }}>
            of
          </span>
          <span className="word word5" style={{ marginRight: "10px" }}>
            St.
          </span>
          <span className="word word6">John’s</span>
        </h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <CustomButton href="/meet-our-vendors">View Our Vendors</CustomButton>
          <CustomButton variant={"outline-alt"} href="/see-our-events">
            See Upcoming Events
          </CustomButton>
        </div>
      </Container>
    </div>
  );
}

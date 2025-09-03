import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import homeHeroImg1 from "../assets/home-hero44.jpg";
import homeHeroImg2 from "../assets/home-hero66.jpg";
import homeHeroImg3 from "../assets/home-hero88.jpg";
import { Container } from "react-bootstrap";
import CustomButton from "./ui/CustomButton";
import ROUTES from "../routes";
import Carousel from "react-bootstrap/Carousel";

const heroStyles: React.CSSProperties = {
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const overlayStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background:
    "linear-gradient(120deg, rgba(27,90,122,0.60) 0%, rgba(0, 0, 0, 0) 100%)",
  zIndex: 1,
  pointerEvents: "none",
};

const contentStyles: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "22px",
  zIndex: 2,
  width: "100%",
  maxWidth: "600px",
  padding: "0 1.2rem",
};

const titleStyles: React.CSSProperties = {
  fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  fontSize: "clamp(2.6rem, 8vw, 4.8rem)",
  fontWeight: 800,
  color: "#ffeb3b", // Changed to a vibrant yellow for high impact
  textShadow: "0 4px 32px rgba(27,90,122,0.45), 0 1px 2px #1B5A7A",
  letterSpacing: "1.5px",
  marginBottom: "0.5rem",
  textAlign: "center",
  lineHeight: 1.05,
  opacity: 1,
  transform: "translateY(0) scale(1)",
  transition:
    "opacity 0.9s cubic-bezier(.4,2,.3,1), transform 0.9s cubic-bezier(.4,2,.3,1)",
};

const titleEnterStyles: React.CSSProperties = {
  ...titleStyles,
  opacity: 1,
  transform: "translateY(0) scale(1.08)", // Slight scale up for entrance
  transition:
    "opacity 0.9s cubic-bezier(.4,2,.3,1), transform 0.9s cubic-bezier(.4,2,.3,1)",
};

const titleHiddenStyles: React.CSSProperties = {
  ...titleStyles,
  opacity: 0,
  transform: "translateY(-60px) scale(0.92)", // Smoother exit
  pointerEvents: "none",
};

const taglineStyles: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 3vw, 2rem)",
  color: "#fff",
  fontWeight: 600,
  textAlign: "center",
  marginBottom: "0.7rem",
  textShadow: "0 2px 16px rgba(27,90,122,0.25)",
  letterSpacing: "0.5px",
  lineHeight: 1.3,
  background: "rgba(27,90,122,0.18)",
  borderRadius: "12px",
  padding: "0.5em 1em",
  display: "inline-block",
  opacity: 1,
  transition:
    "opacity 0.8s cubic-bezier(.4,2,.3,1), transform 0.8s cubic-bezier(.4,2,.3,1)",
};

const taglineHiddenStyles: React.CSSProperties = {
  ...taglineStyles,
  opacity: 0,
  transform: "translateY(40px) scale(0.95)",
  pointerEvents: "none",
};

const highlightStyles: React.CSSProperties = {
  color: "#ffe082",
  background: "rgba(27,90,122,0.32)",
  borderRadius: "8px",
  padding: "0.1em 0.5em",
  fontWeight: 700,
  marginLeft: "0.3em",
  boxShadow: "0 1px 8px rgba(27,90,122,0.10)",
  display: "inline-block",
};

const buttonRowStyles: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
  opacity: 1,
  transition: "opacity 0.8s cubic-bezier(.4,2,.3,1)",
};

const buttonRowHiddenStyles: React.CSSProperties = {
  ...buttonRowStyles,
  opacity: 0,
  pointerEvents: "none",
};

export default function Hero() {
  const [showTitle, setShowTitle] = useState(false);
  const [hideTitle, setHideTitle] = useState(false);

  useEffect(() => {
    // Entrance animation
    const enterTimer = setTimeout(() => setShowTitle(true), 100);
    // Exit animation
    const exitTimer = setTimeout(() => {
      setHideTitle(true);
      setShowTitle(false);
    }, 2200);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div style={heroStyles} className="App">
      {/* Overlay */}
      <div style={overlayStyles} />

      {/* Carousel */}
      <Carousel
        controls={false}
        indicators={false}
        interval={5000}
        fade={false}
        pause={false}
        style={{ width: "100%", height: "100vh" }}
      >
        {[homeHeroImg1, homeHeroImg2, homeHeroImg3].map((img, idx) => (
          <Carousel.Item key={idx}>
            <Image
              src={img}
              fluid
              className="w-100"
              style={{
                height: "100vh",
                objectFit: "cover",
                minHeight: 320,
                transition: "transform 0.7s cubic-bezier(.4,2,.3,1)",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Content */}
      <Container style={contentStyles}>
        <h1
          style={
            hideTitle
              ? titleHiddenStyles
              : showTitle
              ? titleEnterStyles
              : titleStyles
          }
        >
          St. John’s <span style={highlightStyles}>Farmers’ Market</span>
        </h1>
        <div style={showTitle ? taglineHiddenStyles : taglineStyles}>
          <span style={{ color: "#ffe082", fontWeight: 700 }}>Discover</span>{" "}
          local food, art, and community every Saturday.
          <br />
          <span style={highlightStyles}>Fresh. Local. Welcoming.</span>
        </div>
        <div style={showTitle ? buttonRowHiddenStyles : buttonRowStyles}>
          <CustomButton
            href={ROUTES.MEET_OUR_VENDORS}
            style={{
              fontSize: "1.08rem",
              padding: "0.8em 2em",
              borderRadius: "999px",
              boxShadow: "0 2px 12px rgba(27,90,122,0.13)",
              fontWeight: 600,
              background: "linear-gradient(90deg, #1B5A7A 60%, #4fc3f7 100%)",
              color: "#fff",
              border: "none",
              transition: "background 0.2s",
            }}
          >
            View Our Vendors
          </CustomButton>
          <CustomButton
            variant={"outline-alt"}
            href={ROUTES.SEE_EVENTS}
            style={{
              fontSize: "1.08rem",
              padding: "0.8em 2em",
              borderRadius: "999px",
              fontWeight: 600,
              border: "2px solid #fff",
              color: "#fff",
              background: "rgba(27,90,122,0.25)",
              transition: "background 0.2s",
            }}
          >
            See Upcoming Events
          </CustomButton>
        </div>
      </Container>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 600px) {
            .App .hero-btn-container {
              padding-top: 2.5rem;
              gap: 18px !important;
            }
            .App h1.hero-title {
              font-size: 2.2rem !important;
              margin-bottom: 0.5rem !important;
            }
            .App .hero-btn-container > div {
              flex-direction: column !important;
              gap: 12px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

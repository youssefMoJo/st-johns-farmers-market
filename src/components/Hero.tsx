import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { useTypewriter } from "./useTypewriter"; // Import the hook
import homeHeroImg1 from "../assets/home-hero44.png";
import homeHeroImg2 from "../assets/home-hero66.png";
import homeHeroImg3 from "../assets/home-hero88.png";
import { Container } from "react-bootstrap";
import CustomButton from "./ui/CustomButton";
import ROUTES from "../routes";

const slides = [
  {
    img: homeHeroImg1,
    headline: "St. John’s Farmers’ Market",
    tagline:
      "Discover local food, art, and community every Saturday. Fresh. Local. Welcoming.",
  },
  {
    img: homeHeroImg2,
    headline: "Local Vendors, Big Flavours",
    tagline:
      "Meet the makers behind your favourite products. Support Local. Eat Well.",
  },
  {
    img: homeHeroImg3,
    headline: "Events & Community",
    tagline: "Join us for workshops, music, and more. Fun for Everyone!",
  },
];

const heroWrapper: React.CSSProperties = {
  width: "100%",
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(120deg,rgb(255, 255, 255) 0%, #fff 100%)",
  position: "relative",
  overflow: "hidden",
};

const slideContainer: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1200px",
  minHeight: "420px",
  padding: "2.5rem 1rem",
  gap: "3vw",
};

const heroTitle: React.CSSProperties = {
  fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  fontWeight: 900,
  background: "linear-gradient(90deg, #1B5A7A, #26c6da)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "0.1rem",
  letterSpacing: "1px",
  textShadow: "0 2px 16px rgba(27,90,122,0.10)",
  lineHeight: 1.08,
  minHeight: "2em",
};

const heroTagline: React.CSSProperties = {
  color: "#333",
  fontWeight: 600,
  marginBottom: "2rem",
  height: "3em",
};

const buttonRow: React.CSSProperties = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "0.5rem",
};

const buttonStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  fontSize: "1rem",
  padding: "0.6em 1.6em",
  borderRadius: "999px",
  fontWeight: 700,
  boxShadow: "0 2px 12px rgba(27,90,122,0.13)",
  border: "none",
  background: "linear-gradient(90deg, #1B5A7A 60%, #26c6da 100%)",
  color: "#fff",
  letterSpacing: "0.5px",
  transition: "background 0.2s, box-shadow 0.2s",
  cursor: "pointer",
};

const outlineButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#fff",
  color: "#1B5A7A",
  border: "2px solid transparent",
  backgroundImage:
    "linear-gradient(#fff, #fff), linear-gradient(90deg, #1B5A7A, #26c6da)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  boxShadow: "0 2px 12px rgba(27,90,122,0.08)",
};

const heroContent: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minWidth: 0,
};

function BlinkingCursor() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "1ch",
        animation: "blink 1s steps(2, start) infinite",
        color: "#26c6da",
        fontWeight: 900,
      }}
    >
      |
      <style>
        {`
          @keyframes blink {
            to { opacity: 0; }
          }
        `}
      </style>
    </span>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  // Reset typing effect on slide change
  useEffect(() => {
    setTyping(false);
    const timer = setTimeout(() => setTyping(true), 300);
    return () => clearTimeout(timer);
  }, [index]);

  const { displayed: typedTitle, done: titleDone } = useTypewriter(
    typing ? slides[index].headline : "",
    40,
    100
  );
  const { displayed: typedTagline } = useTypewriter(
    titleDone ? slides[index].tagline : "",
    24,
    200
  );

  return (
    <div style={heroWrapper}>
      <div style={slideContainer}>
        {/* Image Carousel */}
        <Carousel
          activeIndex={index}
          onSelect={setIndex}
          controls={true}
          indicators={true}
          interval={4500}
          slide={true}
          fade={false}
          style={{
            maxWidth: "480px",
            maxHeight: "480px",
            width: "90%",
            height: "90%",
            minWidth: "320px",
            minHeight: "320px",
            borderRadius: "32px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {slides.map((slide, idx) => (
            <Carousel.Item key={idx} interval={4500} style={{ height: "100%" }}>
              <Image
                src={slide.img}
                alt="Farmers Market"
                fluid
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "32px",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Typewriter Title/Tagline/Buttons */}
        <div
          style={{ ...heroContent, animation: "slideIn 0.6s ease forwards" }}
        >
          <Container>
            <h1 style={heroTitle}>
              {typedTitle}
              <BlinkingCursor />
            </h1>
            <div style={heroTagline} className="hero-tagline">
              {typedTagline}
              {titleDone && <BlinkingCursor />}
            </div>
            <div style={buttonRow}>
              <CustomButton href={ROUTES.MEET_OUR_VENDORS} style={buttonStyle}>
                View Our Vendors
              </CustomButton>
              <CustomButton
                variant="outline-alt"
                href={ROUTES.SEE_EVENTS}
                style={outlineButtonStyle}
              >
                See Upcoming Events
              </CustomButton>
            </div>
          </Container>
        </div>
      </div>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="display: flex"][style*="align-items: center"] {
              flex-direction: column !important;
              padding: 2rem 0 !important;
              min-height: 320px !important;
            }
            .App .hero-title {
              font-size: 2.2rem !important;
            }
            .App .hero-img {
              width: 220px !important;
              height: 220px !important;
              margin-bottom: 1.2rem !important;
            }
          }
          @media (max-width: 600px) {
            div[style*="display: flex"][style*="align-items: center"] {
              flex-direction: column !important;
              padding: 1.2rem 0 !important;
            }
            .App .hero-title {
              font-size: 1.5rem !important;
            }
            .App .hero-btn-row {
              flex-direction: column !important;
              gap: 12px !important;
              align-items: center !important;
            }
            .App .hero-tagline {
              margin-bottom: 0.8rem !important;
            }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

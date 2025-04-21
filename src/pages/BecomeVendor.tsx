import React from "react";
import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import cooking from "../assets/lottie-files/cooking.lottie";

const BecomeVendor: React.FC = () => {
  return (
    <div>
      <div
        style={{ background: "#D46540", padding: "4rem 1rem", color: "white" }}
      >
        <div style={styles.contentWrapper}>
          <div style={{ flex: "1 1 60%" }}>
            <SectionTitle
              parts={[{ text: "BECOME A VENDOR", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              The heart of the St. John’s Farmers’ Market is our vendors—local
              growers, makers, and artisans offering everything from homemade
              baked goods to handcrafted accessories. Join our vibrant community
              to showcase your passion, build connections, and bring
              Newfoundland’s best to our visitors.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 35%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DotLottieReact
              src={cooking}
              loop
              autoplay
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{ background: "#f8f8f8", padding: "2rem 1rem", color: "#333" }}
      >
        <div style={styles.contentWrapper}>
          <h2 style={{ fontSize: "2rem" }}>📅 Application Period</h2>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <span style={{ fontWeight: "bold" }}> Note: </span> Applications for
            the 2024 season are now closed as of March 1, 2024. Applications for
            the 2025 season will open in early 2025. Farmers and primary
            producers may apply year-round.​
          </p>
        </div>
      </div>

      {/* Add more sections here using the same structure */}
    </div>
  );
};

const styles = {
  contentWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  } as React.CSSProperties,
};

export default BecomeVendor;

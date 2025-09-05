import rightArrowIcon from "../assets/Icons/white-right-arrow-icon.png";
import locationIcon from "../assets/Icons/location-icon.png";
import { EXTERNAL_LINKS } from "../constants/externalLinks";

type HoursLocationProps = {
  bgColorL?: string;
  bgColorR?: string;
};

export default function HoursLocation({
  bgColorL = "#c6252d",
  bgColorR = "#76161c",
}: HoursLocationProps) {
  return (
    <div
      className="hours-location"
      style={{
        background: `linear-gradient(120deg, ${bgColorL} 70%,${bgColorR} 100%)`,
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
        boxShadow: "0 6px 32px rgba(20,103,108,0.11)",
      }}
    >
      <div
        className="content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "36px",
          width: "92%",
          maxWidth: "1100px",
        }}
      >
        {/* Hours Card */}
        <div
          className="section"
          style={{
            background: "white",
            borderRadius: "22px",
            boxShadow: "0 4px 24px rgba(20,103,108,0.09)",
            padding: "2.2rem 2rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            minHeight: "220px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Icon moved to the LEFT of the title */}
          <h3
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#14676c",
              marginBottom: "1.1rem",
              marginTop: "0.3rem",
              letterSpacing: "-0.5px",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              📅
            </span>
            Hours of Operation
          </h3>
          <div style={{ fontSize: "1.13rem", color: "#222", zIndex: 2 }}>
            <p style={{ marginBottom: "10px" }}>
              <span>🕘 Saturdays (Year-Round):</span>{" "}
              <span style={{ color: "#283132ff" }}>9:00 AM – 4:00 PM</span>
            </p>
            <p>
              <span>🌟 Select Sundays:</span>{" "}
              <span style={{ color: "#283132ff" }}>
                Check our social media for updates!
              </span>
            </p>
          </div>
        </div>

        {/* Location Card */}
        <div
          className="section location-section"
          style={{
            background: "white",
            borderRadius: "22px",
            boxShadow: "0 4px 24px rgba(20,103,108,0.09)",
            padding: "2.2rem 2rem 2rem 2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            minHeight: "220px",
            position: "relative",
            overflow: "hidden",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          {/* Icon moved to the LEFT of the title */}
          <div style={{ flex: 1, zIndex: 2, minWidth: 0 }}>
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "#14676c",
                marginBottom: "1.1rem",
                marginTop: "0.3rem",
                letterSpacing: "-0.5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                🗺️
              </span>
              Location
            </h3>
            <div style={{ fontSize: "1.13rem", color: "#222" }}>
              <p
                style={{
                  marginBottom: "10px",
                  letterSpacing: "0.5px",
                }}
              >
                245 Freshwater Rd
                <br />
                St. John's, NL A1B 1B3
              </p>
              {/* <a
                href={EXTERNAL_LINKS.marketGoogleMap}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #0a8c8c 60%, #14676c 100%)",
                  padding: "0.7em 1.4em",
                  borderRadius: "999px",
                  textDecoration: "none",
                  display: "inline-flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: "1.09rem",
                  boxShadow: "0 2px 8px rgba(20,103,108,0.10)",
                  marginTop: "0.7em",
                  transition: "background 0.2s",
                }}
              >
                <img
                  src={locationIcon}
                  alt="locationIcon"
                  width={22}
                  height={22}
                  style={{ filter: "drop-shadow(0 1px 2px #14676c)" }}
                />
                Get Directions
                <img
                  src={rightArrowIcon}
                  alt="rightArrow"
                  width={22}
                  height={22}
                  style={{ filter: "drop-shadow(0 1px 2px #14676c)" }}
                />
              </a> */}
            </div>
          </div>
          {/* Right: Map */}
          <div
            className="location-map"
            style={{
              flex: "0 0 180px",
              maxWidth: "220px",
              minWidth: "140px",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(20,103,108,0.10)",
              marginTop: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              title="Market Location Map"
              src="https://www.google.com/maps?q=245+Freshwater+Rd+St.+John's,+NL+A1B+1B3&output=embed"
              width="100%"
              height="140"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 700px) {
            .hours-location .content {
              grid-template-columns: 1fr !important;
              gap: 18px !important;
              width: 99% !important;
            }
            .hours-location .section {
              min-width: 0 !important;
              width: 100% !important;
              padding: 1.2rem !important;
              flex-direction: column !important;
              gap: 12px !important;
              border-radius: 0 !important;
            }
            .hours-location .location-map {
              max-width: 100% !important;
              min-width: 0 !important;
              margin-top: 0 !important;
              height: 160px !important;
            }
            .hours-location .location-map iframe {
              height: 160px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

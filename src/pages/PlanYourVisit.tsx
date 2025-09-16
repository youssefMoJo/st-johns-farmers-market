import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import parkingImg from "../assets/MarketParkingPlan-WEB-2.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import carParking from "../assets/lottie-files/carParking.lottie";

const PlanYourVisit: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const parkingLots = [
    {
      name: "Lot 1",
      color: "#4CAF50",
      description:
        "8 vendor bays, or 16 parking spaces. Reserved for Market use only.",
    },
    {
      name: "Lot 2",
      color: "#9C27B0",
      description:
        "Approximately 34 spaces, available weekdays after 4:30 PM, and all day Saturday & Sunday.",
    },
    {
      name: "Lot 3",
      color: "#FF5722",
      description:
        "43 spaces total. 10 spaces reserved for Market use (yellow), 33 open to the public. On Wednesdays after 12:00 PM, all spaces are signed for Market use.",
    },
    {
      name: "Lot 4 (CRA Tax Building)",
      color: "#2E7D32",
      description:
        "160+ spaces available Saturdays, May–December, 7:00 AM – 7:00 PM. Also available the 3rd Saturday of each month, January–April, 7:00 AM – 7:00 PM.",
    },
    {
      name: "IM (Accessible Parking)",
      color: "#2196F3",
      description:
        "Designated impaired mobility parking spaces, close to the entrance.",
    },
    {
      name: "AY (Active Yard)",
      color: "#E53935",
      description:
        "Restricted area for staff and deliveries only. No public access at any time.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #D46540 65%, rgb(240, 240, 240) 100%)",
          padding: "4rem 1rem",
          color: "white",
        }}
      >
        <div style={styles.contentWrapper}>
          <div style={styles.textWrapper}>
            <SectionTitle
              parts={[{ text: "🗺️ Plan Your Visit", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              Everything you need to know about parking, accessibility, and
              making your Market trip easy and enjoyable.
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={carParking}
              loop
              autoplay
              style={{
                width: "100%",
                // maxWidth: "450px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      {/* <div
        style={{
          background:
            "linear-gradient(to bottom right, #1B5A7A 65%, rgb(240,240,240) 100%)",
          padding: "4rem 1rem",
          color: "white",
          textAlign: "center",
        }}
      >
        <SectionTitle
          parts={[{ text: "🗺️ Plan Your Visit", color: "white" }]}
          align="center"
        />
        <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Everything you need to know about parking, accessibility, and making
          your Market trip easy and enjoyable.
        </p>
      </div> */}

      {/* Parking Map */}
      <div
        style={{ maxWidth: "1000px", margin: "2rem auto", textAlign: "center" }}
      >
        <img
          src={parkingImg}
          alt="SJFM Parking Plan"
          style={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
        <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", color: "#555" }}>
          Parking lots available around the St. John’s Farmers’ Market.
        </p>
      </div>

      {/* Parking Details */}
      <div
        style={{ maxWidth: "900px", margin: "2rem auto", padding: "0 1rem" }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#1B5A7A",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          🚗 Parking Information
        </h2>

        {parkingLots.map((lot, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              borderRadius: "8px",
              background: "#f9f9f9",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                borderLeft: `8px solid ${lot.color}`,
              }}
            >
              <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                {lot.name}
              </span>
              <span style={{ fontSize: "1.5rem", color: "#555" }}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div style={{ padding: "1rem", borderTop: "1px solid #eee" }}>
                <p style={{ margin: 0, lineHeight: "1.6", color: "#444" }}>
                  {lot.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Accessibility */}
      <div
        style={{
          backgroundColor: "#F5F9FF",
          padding: "2rem 1rem",
          marginTop: "3rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#1B5A7A" }}
          >
            ♿ Accessibility
          </h2>
          <p
            style={{ marginTop: "0.75rem", fontSize: "1.1rem", color: "#333" }}
          >
            The Market is one of the most accessible buildings in St. John’s.
            You’ll find wheelchair accessible aisles and doors, indoor/outdoor
            seating, and 11 gender-neutral washrooms.
          </p>
        </div>
      </div>

      {/* Payment Info */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem 1rem",
          marginTop: "1rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#1B5A7A" }}
          >
            💳 How to Pay
          </h2>
          <p
            style={{ marginTop: "0.75rem", fontSize: "1.1rem", color: "#333" }}
          >
            Check vendor profile pages for payment details. The Market has two
            ATMs available on-site, and all user fees go directly towards
            operating costs for the Market building.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contentWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
  } as React.CSSProperties,
  textWrapper: {
    flex: "1 1 500px",
    minWidth: "300px",
  } as React.CSSProperties,
  lottieWrapper: {
    flex: "1 1 400px",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
};

export default PlanYourVisit;

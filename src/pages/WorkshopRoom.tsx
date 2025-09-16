import React from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "react-bootstrap/Image";
import community_rooom_1 from "../assets/workshop_room/community-room-1.jpg";
import community_rooom_2 from "../assets/workshop_room/community-room-2.jpg";
import community_rooom_3 from "../assets/workshop_room/community-room-3.jpg";
import community_rooom_4 from "../assets/workshop_room/community-room-4.png";

import Carousel from "react-bootstrap/Carousel";
import pricesData from "../data/community_room_prices.json";

const prices: Price[] = pricesData as Price[];

type Price = {
  space: string;
  capacity: string;
  forProfit: string;
  nonProfit: string;
};

const WorkshopRoomDetails: React.FC = () => (
  <div>
    {/* Heading */}
    <div
      style={{
        background:
          "linear-gradient(to bottom right, #D46540 65%, rgb(240 240 240) 100%)",
        padding: "4rem 1rem",
        color: "white",
      }}
    >
      <div style={styles.contentWrapper}>
        <div style={styles.textWrapper}>
          <SectionTitle
            parts={[{ text: "🤝 Workshop Room", color: "white" }]}
            align="left"
          />
          <p style={styles.description}>
            A welcoming space for small groups, discussions, and collaborative
            activities. Fully accessible with seating and optional AV support
            for your events.
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        ...styles.contentWrapper,
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        gap: "2rem",
      }}
    >
      {/* Image Carousel */}
      <div>
        <Carousel>
          {[
            community_rooom_4,
            community_rooom_1,
            community_rooom_2,
            community_rooom_3,
          ].map((src, idx) => (
            <Carousel.Item key={idx} interval={3000}>
              <Image
                src={src}
                alt={`Main Hall Image ${idx + 1}`}
                fluid
                style={{
                  borderRadius: "4px",
                  maxHeight: "900px",
                  objectFit: "cover",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Types of Use */}
      <div
        style={{
          width: "100%",
          padding: "1.5rem 1.25rem",
          backgroundColor: "#F5F9FF", // subtle light background
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          color: "#143C5D",
          lineHeight: "1.6",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#1B5A7A",
          }}
        >
          🎨 Types of Use
        </h2>
        <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
          Our Workshop Room is a flexible space designed for a variety of
          activities, including:
        </p>

        <ul style={{ padding: 0, listStyleType: "none", marginBottom: "1rem" }}>
          {[
            "🖌️ Workshops and hands-on learning sessions",
            "📚 Board meetings and classes",
            "🎶 Small performances and movie nights",
            "✨ And more collaborative and creative activities—share your ideas with us!",
          ].map((item, idx) => (
            <li
              key={idx}
              style={{
                backgroundColor: "#EAF2FF",
                marginBottom: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                fontWeight: "500",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  idx === 3
                    ? "✨ And more collaborative and creative activities — <a href='mailto:eventsmanager@sjfm.ca' style='color:#12646C; text-decoration:underline;'>Contact our Events Manager</a> to share your ideas!"
                    : item,
              }}
            ></li>
          ))}
        </ul>

        <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#555" }}>
          👉 Ideal for small groups, community-focused events, and creative
          projects.
        </p>
      </div>

      {/* Pricing Table */}
      <div style={styles.pricingWrapper}>
        <h2 style={styles.tableTitle}>📊 2025 Rental Rates – Workshop Room </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Capacity</th>
              <th>For-Profit / Business</th>
              <th>Non-Profit</th>
            </tr>
          </thead>
          <tbody>
            {prices.map(
              ({ capacity, forProfit, nonProfit }: Price, idx: number) => (
                <tr key={idx}>
                  <td style={{ whiteSpace: "pre-line" }}>{capacity}</td>
                  <td style={{ whiteSpace: "pre-line" }}>{forProfit}</td>
                  <td style={{ whiteSpace: "pre-line" }}>{nonProfit}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div style={styles.note}>
          <p>
            * HST will be added to all rates. Rates include one staff member
            on-site.
          </p>

          <div style={{ marginTop: "0.75rem" }}>
            <strong>ℹ️ Definitions:</strong>
            <ul style={{ margin: "0.5rem 0 0 1.25rem", padding: 0 }}>
              <li>
                <strong>Half Day</strong>: 4–5 hours, including setup and
                teardown time.
              </li>
              <li>
                <strong>Full Day</strong>: 5+ hours.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community Room Discount */}
      <div
        style={{
          maxWidth: "1000px",
          //   margin: "1rem auto",
          padding: "1rem 1.25rem",
          backgroundColor: "#F0F8FF", // soft light blue
          borderLeft: "5px solid #1B5A7A", // accent color
          borderRadius: "5px",
          fontSize: "1.1rem",
          lineHeight: "1.5",
          color: "#143C5D",
        }}
      >
        🎉 <strong>Special Offer:</strong> Community Room events during a
        Farmer’s Market receive a <strong>50% discount</strong>!
      </div>

      {/* Additional Information */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 18px 0 rgba(27,90,122,0.09)",
          padding: "2rem 2rem 1.5rem 2rem",
          margin: "2rem 0",
          maxWidth: "100%",
        }}
      >
        <h2
          style={{
            ...styles.tableTitle,
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>ℹ️</span> Additional Information
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            {
              icon: "🖥️",
              text: "The Community Room has an HDMI-compatible large screen for meetings.",
            },
            {
              icon: "🏢",
              text: "The SJFM is a non-profit organization that rents the St. John’s Community Market building from the City of St. John’s.",
            },
            {
              icon: "💲",
              text: "HST will be added to all invoice totals.",
            },
            {
              icon: "📶",
              text: "Public WIFI is available at no cost.",
            },
            {
              icon: "🏧",
              text: "Two ATMs are on-site. Fees from the ATMs support further developments of the SJFM.",
            },
            {
              icon: "♿",
              text: "We are a fully accessible space with 11 gender neutral washrooms.",
            },
            {
              icon: "🍳",
              text: "Interested in renting the Commercial Kitchen? Ask us about adding the kitchen onto your rental.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#F5F9FF",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(27,90,122,0.06)",
                padding: "1.1rem 1rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.9rem",
                minHeight: "80px",
              }}
            >
              <span style={{ fontSize: "1.7rem", flexShrink: 0 }}>
                {item.icon}
              </span>
              <span style={{ fontSize: "1.07rem", color: "#143C5D" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Support */}
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          boxShadow: "0 2px 12px 0 rgba(27,90,122,0.08)",
          padding: "1.7rem 1.5rem",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          gap: "1.2rem",
        }}
      >
        <span
          style={{
            fontSize: "2.2rem",
            background: "linear-gradient(135deg, #1B5A7A 60%, #4fc3f7 100%)",
            color: "white",
            borderRadius: "50%",
            width: "54px",
            height: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 2px 8px rgba(27,90,122,0.10)",
            marginRight: "0.5rem",
          }}
        >
          👷
        </span>
        <div>
          <h2
            style={{
              ...styles.tableTitle,
              fontSize: "1.3rem",
              marginBottom: "0.7rem",
              color: "#1B5A7A",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Staff Support
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.2em",
              fontSize: "1.07rem",
              lineHeight: "1.7",
              color: "#143C5D",
            }}
          >
            <li>
              <strong>Included:</strong> All rental rates include one employee
              on-site during your event.
            </li>
            <li>
              <strong>Additional staff:</strong> Depending on the size and
              nature of your event, extra staff may be required. This will be
              discussed prior to signing the rental contract.
            </li>
            <li>
              <strong>Staffing rates:</strong> Additional staff are billed at{" "}
              <span style={{ color: "#1B5A7A", fontWeight: 600 }}>
                $18 per person per hour
              </span>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Booking CTA */}
    <div style={styles.ctaContainer}>
      <a href="mailto:eventsmanager@sjfm.ca" style={styles.ctaButton}>
        Inquire About Rental
      </a>
    </div>
  </div>
);

export default WorkshopRoomDetails;

// Inline styles for quick reference
const styles = {
  contentWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "1rem",
    padding: "1rem",
  } as React.CSSProperties,
  textWrapper: {
    width: "100%",
  } as React.CSSProperties,
  description: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
  } as React.CSSProperties,
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    padding: "2rem 1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  } as React.CSSProperties,
  galleryImage: {
    borderRadius: "8px",
    height: "auto",
    objectFit: "cover",
    width: "100%",
  } as React.CSSProperties,
  ctaContainer: {
    textAlign: "center",
    margin: "1rem 0",
  } as React.CSSProperties,
  ctaButton: {
    background: "#1B5A7A",
    color: "white",
    padding: "0.75rem 1rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  } as React.CSSProperties,
  pricingWrapper: {
    maxWidth: "100%",
    padding: "0",
    overflowX: "auto",
  } as React.CSSProperties,
  tableTitle: {
    marginBottom: "1rem",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#1B5A7A",
  } as React.CSSProperties,
  details: {
    maxWidth: "100%",
    padding: "0",
    overflowX: "auto",
  } as React.CSSProperties,
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    background: "white",
    fontSize: "0.9rem",
    minWidth: "600px",
  } as React.CSSProperties,
  note: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#555",
  } as React.CSSProperties,
};

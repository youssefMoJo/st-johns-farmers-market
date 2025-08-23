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
          "linear-gradient(to bottom right, #157D77 65%, rgb(240 240 240) 100%)",
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
      <div style={{ maxWidth: "900px" }}>
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
          maxWidth: "1000px",
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
              <li>
                <strong>Evening</strong>: Any time after 5 pm.
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
      <div style={styles.details}>
        <h2 style={styles.tableTitle}>ℹ️ Additional Information</h2>
        <ul
          style={{
            margin: "0.75rem 0 0 1.5rem",
            padding: 0,
            fontSize: "1.05rem",
            lineHeight: "1.6",
            listStyleType: "none",
          }}
        >
          <li>
            🖥️ The Community Room has an HDMI-compatible large screen that can
            be utilized for meetings.
          </li>
          <li>
            🏢 The SJFM is a non-profit organization that rents the St. John’s
            Community Market building from the City of St. John’s.
          </li>
          <li>💲 HST will be added to all invoice totals.</li>
          <li>📶 Public WIFI is available at no cost.</li>
          <li>
            🏧 Two ATMs are on-site. Fees from the ATMs support further
            developments of the SJFM.
          </li>
          <li>
            ♿ We are a fully accessible space with 11 gender neutral washrooms.
          </li>
          <li>
            🍳 Interested in renting the Commercial Kitchen? Ask us about adding
            the kitchen onto your rental.
          </li>
        </ul>
      </div>

      {/* Staff Support */}
      <div style={styles.details}>
        <h2 style={styles.tableTitle}>👷 Staff Support</h2>
        <ul
          style={{
            margin: "0.75rem 0 0 1.25rem",
            fontSize: "1.05rem",
            lineHeight: "1.6",
          }}
        >
          <li>
            All rental rates include one employee on-site during the event.
          </li>
          <li>
            Depending on the size and nature of your event, additional staff may
            be required. This will be discussed prior to signing the rental
            contract. Additional staffing rates are $18 per person per hour.
          </li>
        </ul>
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

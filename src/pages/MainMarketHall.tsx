import React from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "react-bootstrap/Image";
import main_hall_1 from "../assets/main_hall/main-hall-1.jpg";
import main_hall_2 from "../assets/main_hall/main-hall-2.jpg";
import main_hall_3 from "../assets/main_hall/main-hall-3.jpg";
import main_hall_4 from "../assets/main_hall/main-hall-4.jpg";
import main_hall_5 from "../assets/main_hall/main-hall-5.jpg";
import Carousel from "react-bootstrap/Carousel";
import pricesData from "../data/main_hall_prices.json";

const prices: Price[] = pricesData as Price[];

type Price = {
  space: string;
  capacity: string;
  forProfit: string;
  nonProfit: string;
};

const MainMarketHallDetails: React.FC = () => (
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
            parts={[{ text: "🏛️ Main Market Hall", color: "white" }]}
            align="left"
          />
          <p style={styles.description}>
            A dynamic, adaptable venue at the heart of the farmers’ market,
            perfect for dinners, performances, conferences, and more. Fully
            accessible and staffed, with AV support and optional café services
            to bring your vision to life.
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
      <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
        <Carousel>
          {[
            main_hall_1,
            main_hall_2,
            main_hall_3,
            main_hall_4,
            main_hall_5,
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
          🎭 Types of Use
        </h2>
        <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
          Our Main Market Hall is a flexible venue for a wide variety of events,
          including:
        </p>

        <ul style={{ padding: 0, listStyleType: "none", marginBottom: "1rem" }}>
          {[
            "🍽️ Large dinners & banquets",
            "🎶 Performances & concerts",
            "🎭 Rehearsals & art productions",
            "📊 Conferences & community gatherings",
            "✨ And much more—share your vision with us!",
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
                  idx === 4
                    ? "✨ And much more — <a href='mailto:eventsmanager@sjfm.ca' style='color:#12646C; text-decoration:underline;'>Contact our Events Manager</a> to share your vision!"
                    : item,
              }}
            ></li>
          ))}
        </ul>

        <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#555" }}>
          👉 Food-focused and community-building events are given priority.
        </p>
      </div>

      {/* Food and Beverage Information */}
      <div style={styles.details}>
        <h2 style={styles.tableTitle}>🍴 Food & Beverage Information</h2>
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
            ☕ <strong>Café:</strong> If you would like the Market café opened
            during your event for coffee and snacks, please contact the
            operator, <em>Cheddar’s Café by Oh My Cheeses</em> at{" "}
            <a href="mailto:ohmycheesesnl@gmail.com">ohmycheesesnl@gmail.com</a>
            .
          </li>
          <li>
            🍷 <strong>Alcohol:</strong> The SJFM does not have a permanent
            liquor license. If you would like to host an event with alcohol,
            please review our licensing requirements.
          </li>
          <li>
            🔥 <strong>Hot Food Area:</strong> Vendors in the Hot Food Area are
            semi-permanent booths and cannot be removed for events.
          </li>
          <li>
            🏛️ <strong>Space Setup:</strong> The rest of the Market Hall can be
            emptied and arranged to meet your needs.
          </li>
          <li>
            🍵 <strong>Coffee/Tea Service:</strong> Available for events. Please
            check with us about pricing.
          </li>
          <li>
            🥗 <strong>Catering Options:</strong> Renters may bring their own
            food, but as a great alternative, many Market Vendors can cater—from
            snacks to full meals and desserts. Ask us about available options.
          </li>
        </ul>
      </div>

      {/* Pricing Table */}
      <div style={styles.pricingWrapper}>
        <h2 style={styles.tableTitle}>
          📊 2025 Rental Rates – Main Market Hall{" "}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Space</th>
              <th>Capacity</th>
              <th>For-Profit / Business</th>
              <th>Non-Profit</th>
            </tr>
          </thead>
          <tbody>
            {prices.map(
              (
                { space, capacity, forProfit, nonProfit }: Price,
                idx: number
              ) => (
                <tr key={idx}>
                  <td>{space}</td>
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
            on-site. Additional staff: $18/hr per person. Wi-Fi included. AV
            equipment available on request.
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
            🏢 The SJFM is a non-profit organization that rents the St. John’s
            Community Market building from the City of St. John’s.
          </li>
          <li>💲 HST will be added to all invoice totals.</li>
          <li>📶 Public WIFI is available at no cost.</li>
          <li>
            🎤 Microphone and speakers available upon request. Adequate for
            small events or as a PA system only.
          </li>
          <li>
            🏧 Two ATMs are on-site. Fees from the ATMs support further
            developments of the SJFM.
          </li>
          <li>
            ♿ We are a fully accessible space with 11 gender neutral washrooms.
          </li>
          <li>
            ⚡ Electrical – for trade shows/booth type events, electrical access
            is a flat fee of $10 per booth.
          </li>
          <li>
            🪑 150 chairs are on-site. Additional chairs will need to be
            provided by renter.
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

export default MainMarketHallDetails;

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

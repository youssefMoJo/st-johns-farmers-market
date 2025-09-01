import React from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "react-bootstrap/Image";
import kitchen_1 from "../assets/kitchen/kitchen-1.jpg";
import kitchen_2 from "../assets/kitchen/kitchen-2.jpg";
import kitchen_3 from "../assets/kitchen/Kitchen-3.jpg";
import kitchen_4 from "../assets/kitchen/kitchen-4.jpg";

import Carousel from "react-bootstrap/Carousel";
import pricesData from "../data/kitchen_prices.json";

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
            parts={[{ text: "🍳 Commercial Kitchen", color: "white" }]}
            align="left"
          />
          <p style={styles.description}>
            A fully equipped kitchen for culinary workshops, food prep, and
            catering events. Accessible and functional, with ample workspace and
            modern appliances to support your cooking and event needs.
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
          {[kitchen_1, kitchen_2, kitchen_3, kitchen_4].map((src, idx) => (
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
          🍳 Types of Use
        </h2>
        <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
          Our Commercial Kitchen is a versatile space for culinary preparation
          and workshops, including:
        </p>

        <ul style={{ padding: 0, listStyleType: "none", marginBottom: "1rem" }}>
          {[
            "🧑‍🍳 Preparation of food products for sale on-site or off-site",
            "👩‍🍳 Cooking workshops (connected by pass-through to Workshop Room)",
            "✨ And more culinary activities—share your ideas with us!",
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
                  idx === 2
                    ? "✨ And more culinary activities — <a href='mailto:eventsmanager@sjfm.ca' style='color:#12646C; text-decoration:underline;'>Contact our Events Manager</a> to share your ideas!"
                    : item,
              }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Pricing Table */}
      <div style={styles.pricingWrapper}>
        <h2 style={styles.tableTitle}>
          📊 2025 Rental Rates – Commercial Kitchen{" "}
        </h2>
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
        </div>
      </div>

      {/* Commercial Kitchen Note */}
      <div
        style={{
          maxWidth: "1000px",
          padding: "1rem 1.25rem",
          backgroundColor: "#FFF4E5",
          borderLeft: "5px solid #F57C00",
          borderRadius: "5px",
          fontSize: "1.1rem",
          lineHeight: "1.5",
          color: "#333",
        }}
      >
        ⚠️ <strong>Note:</strong> Times are limited – Market Vendors have
        priority access and the kitchen is heavily booked.
      </div>

      <div style={{ maxWidth: "1000px" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "#1B5A7A",
            marginBottom: "1rem",
          }}
        >
          🍳 Kitchen Information
        </h2>

        {[
          {
            question: "Equipment – what does the kitchen come with?",
            answer:
              "Stoves, ovens, convection oven, commercial microwaves, fridges, ice machine, blender/mixer, counters, commercial dishwasher, and two double sinks among other features.",
          },
          {
            question: "Do I need to bring my own pots and pans?",
            answer:
              "We have a basic stock but encourage bringing small supplies or utensils. More items will be added gradually as operations establish themselves.",
          },
          {
            question: "Is there cold storage?",
            answer:
              "There are fridges and freezers that renters can use during food prep, but not for long-term storage.",
          },
          {
            question: "Is it accessible?",
            answer:
              "Yes – it is at-grade, with push-button doors and several accessible counters.",
          },
          {
            question:
              "Can I rent it when other things are happening in the building?",
            answer:
              "Sometimes – not during Market Days. Ask staff for more information.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "1rem",
              background: "#F5F9FF",
              borderRadius: "6px",
              padding: "0.75rem 1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ fontWeight: "500" }}>{item.question}</span>
            </div>
            <div
              style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#333" }}
            >
              {item.answer}
            </div>
          </div>
        ))}
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

import SectionTitle from "./SectionTitle";
import CustomButton from "./ui/CustomButton";
import ROUTES from "../routes";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px 0",
        background: "linear-gradient(120deg, #e0f7fa 60%, #fff 100%)",
        transition: "background 0.5s",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "white",
          borderRadius: "22px",
          boxShadow: "0 4px 24px rgba(27,90,122,0.09)",
          padding: "2.5rem 2rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.7s cubic-bezier(.4,2,.3,1), transform 0.7s cubic-bezier(.4,2,.3,1)",
        }}
      >
        <SectionTitle
          parts={[
            { text: "Welcome to", color: "#47C3F7" },
            { text: "St. John’s Farmers’ Market", color: "#143C5D" },
          ]}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Add a friendly icon */}
          <span
            style={{
              fontSize: "2.5rem",
              color: "#47C3F7",
              marginBottom: "0.5rem",
              filter: "drop-shadow(0 2px 8px #47C3F7aa)",
            }}
            aria-label="basket"
          >
            🧺
          </span>
          <p
            style={{
              width: "100%",
              color: "#201d1e",
              fontFamily: "Montserrat, Yanone Kaffeesatz, Arial, sans-serif",
              fontSize: "1.25rem",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.7,
            }}
          >
            The{" "}
            <span style={{ color: "#47C3F7", fontWeight: 700 }}>
              St. John’s Farmers’ Market
            </span>{" "}
            is home to a diverse community of local vendors.
            <br />
            <span style={{ color: "#143C5D", fontWeight: 600 }}>
              Explore and connect
            </span>{" "}
            with passionate makers, bakers, and growers bringing fresh,
            handcrafted, and locally sourced products to Newfoundland.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <CustomButton
              href={ROUTES.MEET_OUR_VENDORS}
              style={{
                fontSize: "1.08rem",
                padding: "0.8em 2em",
                borderRadius: "999px",
                boxShadow: "0 2px 12px rgba(27,90,122,0.13)",
                fontWeight: 600,
                background: "linear-gradient(90deg, #1B5A7A 60%, #47C3F7 100%)",
                color: "#fff",
                border: "none",
                transition: "background 0.2s",
              }}
            >
              View Our Vendors
            </CustomButton>
            <CustomButton
              variant="outline"
              href={ROUTES.OUR_STORY}
              style={{
                fontSize: "1.08rem",
                padding: "0.8em 2em",
                borderRadius: "999px",
                fontWeight: 600,
                border: "2px solid #47C3F7",
                color: "#47C3F7",
                background: "rgba(71,195,247,0.08)",
                transition: "background 0.2s",
              }}
            >
              Read Our Story
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

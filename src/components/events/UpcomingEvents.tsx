import rightArrowIcon from "../../assets/Icons/black-right-arrow-icon.svg";
import EventGrid from "./EventGrid";
import SectionTitle from "../SectionTitle";

export default function UpcomingEvents() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <SectionTitle
        parts={[
          { text: "UPCOMING", color: "#143C5D" },
          { text: "EVENTS", color: "#47C3F7" },
        ]}
      />

      <EventGrid />

      {/* Explore All Events Button */}
      <a
        href="/see-our-events"
        rel="noreferrer"
        style={{
          color: "black",
          padding: "1px 1px",
          textDecoration: "none",
          display: "inline-flex",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        🔍 Explore All Events
        <img src={rightArrowIcon} alt="rightArrow" width={22} height={22} />
      </a>
    </div>
  );
}

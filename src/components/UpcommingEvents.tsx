import rightArrowIcon from "../assets/Icons/black-right-arrow-icon.svg";
import EventGrid from "./EventGrid";

export default function UpcomingEvents() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Title */}
      <h1
        className="title caveat-brush-regular"
        style={{ textAlign: "center" }}
      >
        <span style={{ color: "#143C5D" }}>UPCOMING</span>{" "}
        <span style={{ color: "#47C3F7" }}>EVENTS</span>
      </h1>

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

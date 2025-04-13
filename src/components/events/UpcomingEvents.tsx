import rightArrowIcon from "../../assets/Icons/black-right-arrow-icon.svg";
import EventsGrid from "./EventsGrid";
import SectionTitle from "../SectionTitle";
import ROUTES from "../../routes";

export default function UpcomingEvents() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <SectionTitle
        parts={[
          { text: "UPCOMING", color: "#143C5D" },
          { text: "EVENTS", color: "#47C3F7" },
        ]}
      />

      <EventsGrid />

      {/* Explore All Events Button */}
      <a
        href={ROUTES.SEE_EVENTS}
        rel="noreferrer"
        style={{
          color: "black",
          padding: "1px 1px",
          textDecoration: "none",
          display: "inline-flex",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bolder",
        }}
      >
        🔍 Explore All Events
        <img src={rightArrowIcon} alt="rightArrow" width={22} height={22} />
      </a>
    </div>
  );
}

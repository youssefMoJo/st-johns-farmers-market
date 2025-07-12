import EventGrid from "../components/events/EventsGrid";
import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import eventsLottie from "../assets/lottie-files/events.lottie";

export default function EventsPage() {
  return (
    <div>
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
              parts={[{ text: "📅 Upcoming Events", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              Discover the vibrant events happening at the St. John’s Farmers’
              Market! From craft fairs to workshops, there’s something for
              everyone.
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={eventsLottie}
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

      <div style={{ background: "white", padding: "2rem 1rem" }}>
        <EventGrid showFilters sort="desc" />
      </div>
    </div>
  );
}

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

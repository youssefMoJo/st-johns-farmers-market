import Hero from "../components/Hero";
import HoursLocation from "../components/HoursLocation";
import UpcommingEvents from "../components/events/UpcomingEvents";
import Reviews from "../components/reviews/Reviews";
import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <div>
      <Hero />
      <HoursLocation />
      <div
        style={{
          maxWidth: "900px",
          margin: "2.5rem auto",
          padding: "2rem",
          background:
            "radial-gradient(800px 260px at 70% -60px, rgba(20,103,108,0.18), rgba(20,103,108,0) 60%)," +
            "radial-gradient(700px 240px at 0% 120%, rgba(71,195,247,0.15), rgba(71,195,247,0) 60%)," +
            "linear-gradient(180deg, #ffffff 0%, #f7fbfd 100%)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(27,90,122,0.09)",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            aria-label="building"
            style={{
              display: "inline-block",
              fontSize: "1.6rem",
              marginBottom: "0.2rem",
              filter: "drop-shadow(0 2px 6px rgba(20,60,93,0.2))",
            }}
          >
            🏢
          </span>
        </div>
        <SectionTitle
          parts={[
            { text: "RENTAL", color: "#143C5D" },
            { text: "SPACES", color: "#47C3F7" },
          ]}
        />
        <p
          style={{
            fontSize: "1.15rem",
            color: "#222",
            marginBottom: "1.2rem",
          }}
        >
          Need a venue for your next event, workshop, or gathering? Explore our
          flexible, modern rental spaces!
        </p>
        <Link
          to="/rental-spaces"
          style={{
            display: "inline-block",
            background: "#14676c",
            color: "#fff",
            padding: "0.7em 2em",
            borderRadius: "999px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1.08rem",
            boxShadow: "0 2px 12px rgba(27,90,122,0.13)",
            transition: "background 0.2s",
          }}
        >
          Explore Rental Spaces
        </Link>
      </div>
      <UpcommingEvents />
      <Reviews />
      <Welcome />
    </div>
  );
}

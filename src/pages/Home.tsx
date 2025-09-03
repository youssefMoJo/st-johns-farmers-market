import Hero from "../components/Hero";
import HoursLocation from "../components/HoursLocation";
import UpcommingEvents from "../components/events/UpcomingEvents";
import Reviews from "../components/reviews/Reviews";
import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero />
      <HoursLocation />
      <UpcommingEvents />
      <Reviews />
      <Welcome />
      <div
        style={{
          maxWidth: "900px",
          margin: "2.5rem auto",
          padding: "2rem",
          background: "linear-gradient(120deg, #e0f7fa 60%, #fff 100%)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(27,90,122,0.09)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#14676c",
            fontWeight: 700,
            fontSize: "2rem",
            marginBottom: "0.7rem",
          }}
        >
          🏢 Rental Spaces
        </h2>
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
    </div>
  );
}

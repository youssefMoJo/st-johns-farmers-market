import Hero from "../components/Hero";
import HoursLocation from "../components/HoursLocation";
import UpcommingEvents from "../components/events/UpcomingEvents";
import Reviews from "../components/reviews/Reviews";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      <Hero />
      <HoursLocation />
      <UpcommingEvents />
      <Reviews />
      <Welcome />
    </div>
  );
}

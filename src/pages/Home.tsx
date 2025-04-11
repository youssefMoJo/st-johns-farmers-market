import Hero from "../components/Hero";
import HoursLocation from "../components/HoursLocation";
import UpcommingEvents from "../components/events/UpcomingEvents";

export default function Home() {
  return (
    <div>
      <Hero />
      <HoursLocation />
      <UpcommingEvents />
    </div>
  );
}

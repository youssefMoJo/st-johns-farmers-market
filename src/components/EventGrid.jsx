import { Row } from "react-bootstrap";
import EventCard from "./EventCard";
import eventPic from "../assets/event.png";

const sampleEvents = [
  {
    title: "Open Air Antique Fair",
    date: "Jun 17, 2025",
    time: "8:00 a.m – 3:00 p.m",
    image: eventPic,
    multipleDates: true,
    link: "/meet-our-vendors",
  },
  {
    title: "Community Art Walk",
    date: "Jul 5, 2025",
    time: "10:00 a.m – 5:00 p.m",
    image: eventPic,
    multipleDates: false,
    link: "/events/art-walk",
  },
];

export default function EventGrid() {
  return (
    <Row className="justify-content-center text-center mb-3">
      {sampleEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </Row>
  );
}

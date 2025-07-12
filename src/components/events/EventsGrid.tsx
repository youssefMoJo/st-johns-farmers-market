import { useState } from "react";
import { Row, Container, Button } from "react-bootstrap";
import EventCard from "./EventCard";
import eventsData from "../../data/events.json";

const allTags = [
  "All",
  "Main Market Hall",
  "Community Room",
  "Outdoor",
  "Art",
  "Family",
  "Kids",
  "Workshop",
];

type EventsGridProps = {
  showFilters?: boolean; // default false
  limit?: number;
  sort?: "asc" | "desc";
};

export default function EventsGrid({
  showFilters = false,
  limit,
  sort = "asc",
}: EventsGridProps) {
  const [selectedTag, setSelectedTag] = useState("All");

  // 1️⃣ Sort events
  const sortedEvents = [...eventsData].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sort === "asc" ? dateA - dateB : dateB - dateA;
  });

  // 2️⃣ Filter by tag
  const tagFilteredEvents =
    selectedTag === "All"
      ? sortedEvents
      : sortedEvents.filter((event) =>
          event.tags
            .map((tag) => tag.toLowerCase())
            .includes(selectedTag.toLowerCase())
        );

  // 3️⃣ Apply limit if provided
  const displayedEvents = limit
    ? tagFilteredEvents.slice(0, limit)
    : tagFilteredEvents;

  return (
    <Container className="my-4">
      {showFilters && (
        <div className="text-center mb-3">
          <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Filter by Category
          </h2>
          {allTags.map((tag) => (
            <Button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              variant={selectedTag === tag ? "dark" : "outline-dark"}
              style={{
                margin: "0.3rem",
                borderRadius: "20px",
                padding: "0.4rem 1rem",
              }}
            >
              {tag}
            </Button>
          ))}
        </div>
      )}

      <Row className="g-4 justify-content-center text-center mb-3">
        {displayedEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Row>
    </Container>
  );
}

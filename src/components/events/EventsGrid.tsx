import { useState, useEffect } from "react";
import { Row, Container, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import EventCard from "./EventCard";
import eventsData from "../../data/events.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import noDataLottie from "../../assets/lottie-files/noData.lottie";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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
  const [selectedMonth, setSelectedMonth] = useState("All");
  const currentYear = new Date().getFullYear();
  // Year dropdown state
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const years = Array.from(
    { length: currentYear + 5 - 2025 + 1 },
    (_, i) => 2025 + i
  );

  // Responsive: detect mobile (≤576px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1️⃣ Sort events
  const sortedEvents = [...eventsData].sort((a, b) => {
    const earliestA = Math.min(
      ...a.dates.map((d: string) => new Date(d).getTime())
    );
    const earliestB = Math.min(
      ...b.dates.map((d: string) => new Date(d).getTime())
    );
    const dateA = isFinite(earliestA) ? earliestA : Number.MAX_SAFE_INTEGER;
    const dateB = isFinite(earliestB) ? earliestB : Number.MAX_SAFE_INTEGER;
    return sort === "asc" ? dateA - dateB : dateB - dateA;
  });

  // 2️⃣ Filter by year and month
  const monthFilteredEvents =
    selectedMonth === "All"
      ? sortedEvents.filter((event) =>
          event.dates.some(
            (d: string) => new Date(d).getFullYear() === selectedYear
          )
        )
      : sortedEvents.filter((event) =>
          event.dates.some((d: string) => {
            const eventDate = new Date(d);
            return (
              eventDate.getFullYear() === selectedYear &&
              months[eventDate.getMonth()] === selectedMonth
            );
          })
        );

  // 3️⃣ Apply limit if provided
  const displayedEvents = limit
    ? monthFilteredEvents.slice(0, limit)
    : monthFilteredEvents;

  // Compute months with events in the selected year
  const monthsWithEvents = months.filter((month) =>
    sortedEvents.some((event) =>
      event.dates.some((d: string) => {
        const dt = new Date(d);
        return (
          dt.getFullYear() === selectedYear && months[dt.getMonth()] === month
        );
      })
    )
  );

  const yearsWithEvents = years.filter((year) =>
    sortedEvents.some((event) =>
      event.dates.some((d: string) => new Date(d).getFullYear() === year)
    )
  );

  return (
    <Container className="my-4">
      {showFilters && (
        <div className="text-center mb-3">
          <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Filter by Year & Month
          </h2>
          {isMobile ? (
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="year-dropdown"
                  style={{
                    background: "linear-gradient(90deg, #FF7E5F, #FF6A00)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "1rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {selectedYear}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {years.map((year) => (
                    <Dropdown.Item
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      active={selectedYear === year}
                    >
                      {year}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="month-dropdown"
                  style={{
                    background: "linear-gradient(90deg, #17A0DB, #0d6efd)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "1rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {selectedMonth}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {["All", ...months].map((month) => (
                    <Dropdown.Item
                      key={month}
                      onClick={() => setSelectedMonth(month)}
                      active={selectedMonth === month}
                    >
                      {month}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="year-dropdown"
                  style={{
                    background: "linear-gradient(90deg, #FF7E5F, #FF6A00)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "1rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {selectedYear}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {years.map((year) => (
                    <Dropdown.Item
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      active={selectedYear === year}
                    >
                      {year}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="month-dropdown"
                  style={{
                    background: "linear-gradient(90deg, #17A0DB, #0d6efd)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "1rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {selectedMonth}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {["All", ...months].map((month) => (
                    <Dropdown.Item
                      key={month}
                      onClick={() => setSelectedMonth(month)}
                      active={selectedMonth === month}
                    >
                      {month}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
      )}

      <Row className="g-4 justify-content-center text-center mb-3">
        {displayedEvents.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 0",
              color: "#555",
            }}
          >
            <div style={styles.lottieWrapper}>
              <DotLottieReact
                src={noDataLottie}
                loop
                autoplay
                style={{
                  width: "100%",
                  maxWidth: isMobile ? "200px" : "400px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
            <h4>
              No events scheduled for {selectedMonth} {selectedYear}
            </h4>
            <p>Check back later for upcoming events!</p>
            {yearsWithEvents.length > 0 && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <p style={{ fontWeight: "bold" }}>
                  Events are also happening in these years:
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {yearsWithEvents.map((year) => (
                    <Button
                      key={year}
                      size="sm"
                      variant="outline-success"
                      active={selectedYear === year}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            {monthsWithEvents.length > 0 && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <p style={{ fontWeight: "bold" }}>Events are happening in:</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {monthsWithEvents.map((month) => (
                    <Button
                      key={month}
                      size="sm"
                      variant="outline-primary"
                      onClick={() => setSelectedMonth(month)}
                    >
                      {month}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          displayedEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        )}
      </Row>
    </Container>
  );
}

const styles = {
  lottieWrapper: {
    flex: "1 1 400px",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
};

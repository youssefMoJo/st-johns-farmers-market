import React, { useState } from "react";
import { Modal, Card, Row, Col, Badge } from "react-bootstrap";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import comingSoonEvent from "../../assets/lottie-files/comingSoonEvent.lottie";
import eventPic from "../../assets/event.png";

type EventModalProps = {
  show: boolean;
  onHide: () => void;
  event: {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    dates: string[];
    time: string;
    imageUrl: string;
    location: string;
    organizer?: {
      name?: string;
      email?: string;
      phone?: string;
      website?: string;
    };
  };
};

export default function EventModal({ show, onHide, event }: EventModalProps) {
  const [showAllDates, setShowAllDates] = useState(false);

  const formatDate = (isoDate: string) => {
    const dt = new Date(isoDate);
    return dt.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="event-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="event-modal"
          style={{ fontFamily: "Yanone Kaffeesatz", fontWeight: "bold" }}
        >
          {event.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "300px",
                marginBottom: "20px",
                overflow: "hidden",
                borderRadius: "8px",
                backgroundColor: "#f3f3f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {event.imageUrl.length === 0 ? (
                <DotLottieReact
                  src={comingSoonEvent}
                  loop
                  autoplay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={eventPic}
                  alt={event.title}
                />
              )}
            </div>
          </Col>
          <Col md={6}>
            <div style={{ paddingLeft: "20px" }}>
              <h5
                style={{
                  color: "#D46540",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                Event Details
              </h5>

              <div style={{ marginBottom: "15px" }}>
                <strong>Date:</strong>{" "}
                {(() => {
                  const sortedDates = [...event.dates].sort(
                    (a, b) => new Date(a).getTime() - new Date(b).getTime()
                  );
                  return sortedDates[0];
                })()}
                {event.dates.length > 1 && (
                  <Badge
                    style={{
                      marginLeft: "8px",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: "#fff",
                      background: "linear-gradient(90deg, #FF7E5F, #FF6A00)",
                    }}
                  >
                    Multiple Dates
                  </Badge>
                )}
              </div>

              <div style={{ marginBottom: "15px" }}>
                <strong>Time:</strong> {event.time}
              </div>

              <div style={{ marginBottom: "15px" }}>
                <strong>Location:</strong> {event.location}
              </div>

              {/* Multiple Dates Pills */}
              {event.dates.length > 1 && (
                <div style={{ marginBottom: "15px" }}>
                  <strong>Other Dates:</strong>
                  <div
                    style={{
                      marginTop: "8px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {(() => {
                      const sorted = [...event.dates].sort(
                        (a, b) => new Date(a).getTime() - new Date(b).getTime()
                      );
                      const remaining = sorted.slice(1);
                      const visible = showAllDates
                        ? remaining
                        : remaining.slice(0, 4);
                      return (
                        <>
                          {visible.map((d, idx) => (
                            <span
                              key={`${d}-${idx}`}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "6px 10px",
                                borderRadius: "16px",
                                background:
                                  "linear-gradient(90deg, rgba(23,160,219,0.12), rgba(13,110,253,0.12))",
                                color: "#0d6efd",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                border: "1px solid rgba(13,110,253,0.3)",
                              }}
                              title="Same time and location"
                            >
                              📅 {formatDate(d)}
                            </span>
                          ))}
                          {remaining.length > 4 && !showAllDates && (
                            <button
                              onClick={() => setShowAllDates(true)}
                              style={{
                                background: "transparent",
                                border: "none",
                                color: "#0d6efd",
                                fontWeight: 700,
                                cursor: "pointer",
                              }}
                            >
                              +{remaining.length - 4} more
                            </button>
                          )}
                          {showAllDates && remaining.length > 4 && (
                            <button
                              onClick={() => setShowAllDates(false)}
                              style={{
                                background: "transparent",
                                border: "none",
                                color: "#0d6efd",
                                fontWeight: 700,
                                cursor: "pointer",
                              }}
                            >
                              Show less
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </div>
                  <div
                    style={{
                      color: "#666",
                      fontSize: "0.85rem",
                      marginTop: "6px",
                    }}
                  >
                    Same time and location for all dates
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>

        <div style={{ marginTop: "20px" }}>
          <h5
            style={{
              color: "#D46540",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            About This Event
          </h5>
          <p style={{ lineHeight: "1.6", fontSize: "1rem" }}>
            {event.description}
          </p>
        </div>

        {/* Organizer Contact (below About section) */}
        {event.organizer && (
          <div
            style={{
              marginTop: "12px",
              padding: "10px",
              border: "1px solid #eee",
              borderRadius: "10px",
              background:
                "linear-gradient(180deg, rgba(71,195,247,0.06), rgba(212,101,64,0.06))",
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
              Interested in selling at this event?
            </div>
            <div style={{ color: "#333", marginBottom: "6px" }}>
              Please contact the organizer
              {event.organizer.name ? `, ${event.organizer.name}` : ""}:
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {event.organizer.email && (
                <a
                  href={`mailto:${event.organizer.email}`}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  ✉️ {event.organizer.email}
                </a>
              )}
              {event.organizer.phone && (
                <a
                  href={`tel:${event.organizer.phone}`}
                  style={{
                    color: "#198754",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  ☎️ {event.organizer.phone}
                </a>
              )}
              {event.organizer.website && (
                <a
                  href={event.organizer.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#D46540",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  🌐 Organizer Website
                </a>
              )}
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={onHide}
          style={{
            backgroundColor: "#D46540",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontFamily: "Yanone Kaffeesatz",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#B8543A";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#D46540";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

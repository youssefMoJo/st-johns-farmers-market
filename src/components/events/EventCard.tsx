import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import comingSoonEvent from "../../assets/lottie-files/comingSoonEvent.lottie";
import eventPic from "../../assets/event.png";
import { useState } from "react";
import EventModal from "./EventModal";

type EventProps = {
  event: {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    date: string;
    time: string;
    imageUrl: string;
    multipleDates: boolean;
    location: string;
    tags: string[];
  };
};

export default function EventCard({ event }: EventProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    // <Col xs={12} sm={6} md={6} lg={4} className="mb-4">
    <Col xs={12} sm={6} md={6} lg={4} xl={4} className="mb-4">
      <Card
        className="h-100"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: "1px solid #D9D9D9",
          maxWidth: "350px",
          margin: "0 auto",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "200px",
                marginBottom: "10px",
                overflow: "hidden",
                borderRadius: "5px",
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

            <div style={{ textAlign: "left", marginBottom: "10px" }}>
              <Card.Title style={{ fontWeight: "bold" }}>
                {event.title}
              </Card.Title>
              <Card.Subtitle
                style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  marginBottom: "0.5rem",
                }}
              >
                {event.location}
              </Card.Subtitle>
              <Card.Text>
                <div>
                  {event.date}{" "}
                  {event.multipleDates && (
                    <span
                      style={{
                        marginLeft: "8px",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: "#fff",
                        background: "linear-gradient(90deg, #FF7E5F, #FF6A00)",
                        verticalAlign: "middle",
                        display: "inline-block",
                        lineHeight: "1.5",
                      }}
                    >
                      Multiple Dates
                    </span>
                  )}
                </div>
                <div>{event.time}</div>
                <div
                  style={{
                    marginTop: "0.5rem",
                    fontStyle: "italic",
                    color: "#555",
                  }}
                >
                  {event.shortDescription}
                </div>
              </Card.Text>
            </div>
          </div>

          <div style={{ marginTop: "auto", textAlign: "left" }}>
            <Button
              onClick={() => setShowModal(true)}
              variant="dark"
              style={{
                backgroundColor: "#2C2C2C",
                fontFamily: "Yanone Kaffeesatz",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              Learn more
            </Button>
          </div>
        </Card.Body>
      </Card>

      <EventModal
        show={showModal}
        onHide={() => setShowModal(false)}
        event={event}
      />
    </Col>
  );
}

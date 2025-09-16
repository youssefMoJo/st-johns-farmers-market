import React from "react";
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
    date: string;
    time: string;
    imageUrl: string;
    multipleDates: boolean;
    location: string;
    tags: string[];
  };
};

export default function EventModal({ show, onHide, event }: EventModalProps) {
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
                <strong>Date:</strong> {event.date}
                {event.multipleDates && (
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

              <div style={{ marginBottom: "20px" }}>
                <strong>Tags:</strong>
                <div style={{ marginTop: "5px" }}>
                  {event.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      style={{
                        marginRight: "5px",
                        marginBottom: "5px",
                        padding: "4px 8px",
                        backgroundColor: "#2C2C2C",
                        color: "#fff",
                        fontSize: "0.8rem",
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
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

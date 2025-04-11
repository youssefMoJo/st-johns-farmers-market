import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import comingSoonEvent from "../../assets/lottie-files/comingSoonEvent.lottie";

type EventProps = {
  event: {
    title: string;
    date: string;
    time: string;
    image: string;
    multipleDates: boolean;
    link: string;
  };
};

export default function EventCard({ event }: EventProps) {
  return (
    <Col xs={12} sm={6} md={3} className="mb-2 mb-md-0">
      <Card
        className="h-100"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: "1px solid #D9D9D9",
        }}
      >
        <Card.Body>
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
            {event.image.length === 0 ? (
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
                  objectFit: "fill",
                }}
                src={event.image}
                alt={event.title}
              />
            )}

            {event.multipleDates && (
              <div
                style={{
                  backgroundColor: "#17A0DB",
                  color: "white",
                  padding: "5px 10px",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "13px",
                  zIndex: 1,
                }}
              >
                Multiple Dates
              </div>
            )}
          </div>

          <div style={{ textAlign: "left", marginBottom: "10px" }}>
            <Card.Title style={{ fontWeight: "bold" }}>
              {event.title}
            </Card.Title>
            <Card.Text>
              <div>{event.date}</div>
              <div>{event.time}</div>
            </Card.Text>
          </div>

          <div style={{ textAlign: "left", marginBottom: "10px" }}>
            <Button
              href={event.link}
              variant="dark"
              style={{
                backgroundColor: "#2C2C2C",
                fontFamily: "Yanone Kaffeesatz",
                fontWeight: "bold",
              }}
            >
              Learn more
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

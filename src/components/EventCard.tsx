import eventPic from "../assets/event.png";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function EventCard() {
  return (
    <Row className="justify-content-center text-center mb-3">
      <Col xs={12} sm={6} md={3} className="mb-2 mb-md-0">
        <Card
          className="h-100"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            border: "1px solid #D9D9D9",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <Card.Body>
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <img
                style={{
                  borderRadius: "5px",
                  marginBottom: "10px",
                  width: "100%",
                }}
                src={eventPic}
                alt="event"
              />
              <div
                style={{
                  backgroundColor: "#17A0DB",
                  color: "white",
                  padding: "5px 10px",
                  position: "absolute",
                  top: "290px",
                  right: "1px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "13px",
                  zIndex: 1,
                }}
              >
                Multiple Dates
              </div>
            </div>

            <div style={{ textAlign: "left", marginBottom: "10px" }}>
              <Card.Title
                style={{
                  fontWeight: "bold",
                }}
              >
                Open Air Antique Fair
              </Card.Title>
              <Card.Text>
                <div>Jun 17, 2025</div>
                <div>8:00 a.m – 3:00 p.m</div>
              </Card.Text>
            </div>
            <div style={{ textAlign: "left", marginBottom: "10px" }}>
              <Button
                href="/meet-our-vendors"
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
    </Row>
  );
}

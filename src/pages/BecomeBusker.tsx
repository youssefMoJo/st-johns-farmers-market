import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import playingMusic from "../assets/lottie-files/playingMusic.lottie";
import { Card, Row, Col, Button } from "react-bootstrap";

const BecomeBusker: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #12646C 65%, rgb(253, 243, 187) 100%)",
          padding: "4rem 1rem",
          color: "white",
        }}
      >
        <div style={styles.contentWrapper}>
          <div style={styles.textWrapper}>
            <SectionTitle
              parts={[{ text: "🎤 Perform at the SJFM", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              Share your talent and be part of our vibrant community events!
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={playingMusic}
              loop
              autoplay
              style={{
                width: "100%",
                // maxWidth: "450px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Performance Options Section */}
      <div
        style={{
          background: "white",
          padding: "3rem 1rem",
          color: "#333",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="mb-4"
            style={{ fontSize: "2rem", fontWeight: "600", textAlign: "center" }}
          >
            🎶 Performance Options
          </h2>
          <Row className="g-4 justify-content-center">
            <Col xs={12} md={6}>
              <Card className="h-100 shadow rounded">
                <Card.Body className="d-flex flex-column">
                  <div
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: "1rem",
                      textAlign: "center",
                    }}
                    aria-label="Indoor Sets Icon"
                  >
                    🎵
                  </div>
                  <Card.Title
                    className="text-center"
                    style={{ fontWeight: "600", fontSize: "1.25rem" }}
                  >
                    Market Café (Indoor Sets)
                  </Card.Title>
                  <Card.Text
                    className="mt-3"
                    style={{
                      flexGrow: 1,
                      fontSize: "1.1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    We invite one performer or group each Market day to play a
                    set in our Market Café. These are typically musical acts.
                    While these performances are currently unpaid (we're working
                    on changing that!), performers are welcome to pass a hat or
                    collect donations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="h-100 shadow rounded">
                <Card.Body className="d-flex flex-column">
                  <div
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: "1rem",
                      textAlign: "center",
                    }}
                    aria-label="Outdoor Busking Icon"
                  >
                    🌳
                  </div>
                  <Card.Title
                    className="text-center"
                    style={{ fontWeight: "600", fontSize: "1.25rem" }}
                  >
                    Outdoor Busking
                  </Card.Title>
                  <Card.Text
                    className="mt-3"
                    style={{
                      flexGrow: 1,
                      fontSize: "1.1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    From June to November, we utilize our outdoor spaces and
                    welcome a variety of performance styles. After reviewing
                    your application, we may request performance samples or an
                    audition to ensure alignment with our Market atmosphere.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Selection Criteria Section */}
      <div
        style={{
          background: "#f8f9fa",
          padding: "3rem 1rem",
          color: "#333",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Card className="shadow rounded border-0 bg-white p-4 d-flex flex-row align-items-center gap-3">
            <div
              style={{ fontSize: "2.5rem", flexShrink: 0 }}
              aria-label="Selection Criteria Icon"
            >
              🎯
            </div>
            <div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Selection Criteria
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: 0,
                }}
              >
                Performers are selected based on the quality of their act,
                compatibility with the Market’s vibe, and the potential benefit
                to the artist. For us, a{" "}
                <span className="bold" style={{ fontWeight: "700" }}>
                  busker
                </span>{" "}
                is someone who entertains without selling physical products.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Product-Based Performers Section */}
      <div
        style={{
          background: "white",
          padding: "3rem 1rem",
          color: "#333",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Card className="shadow rounded border p-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                style={{ fontSize: "2.5rem" }}
                aria-label="Product-Based Performers Icon"
              >
                🎨
              </div>
              <h2
                style={{
                  fontWeight: "600",
                  fontSize: "1.75rem",
                  marginBottom: 0,
                }}
              >
                Product-Based Performers
              </h2>
            </div>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              If you offer products or services for a donation or fee (e.g.,
              face painting, balloon art), please reach out directly to our
              Events Manager to coordinate logistics.
            </p>
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "1.1rem" }}>Contact:</span>
              <Button
                variant="outline-primary"
                href="mailto:eventsmanager@sjfm.ca"
                aria-label="Email Events Manager"
              >
                eventsmanager@sjfm.ca
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* How to Apply Section */}
      <div
        style={{
          background: "#f8f9fa",
          padding: "3rem 1rem 2rem",
          color: "#333",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="mb-4 text-center"
            style={{ fontSize: "2rem", fontWeight: "600" }}
          >
            📝 How to Apply
          </h2>
          <Row className="g-4 justify-content-center">
            <Col xs={12} md={4}>
              <Card className="h-100 shadow rounded text-center p-4 d-flex flex-column">
                <div
                  style={{ fontSize: "3rem", marginBottom: "1rem" }}
                  aria-label="Fill Out Application Icon"
                >
                  📝
                </div>
                <Card.Title style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                  Fill Out the Application
                </Card.Title>
                <Card.Text
                  style={{
                    flexGrow: 1,
                    fontSize: "1.1rem",
                    lineHeight: "1.5",
                    marginTop: "0.5rem",
                  }}
                >
                  Submit the Busker Application form available on our website.
                  Indicate which type of performance you’re applying for.
                </Card.Text>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 shadow rounded text-center p-4 d-flex flex-column">
                <div
                  style={{ fontSize: "3rem", marginBottom: "1rem" }}
                  aria-label="Application Review Icon"
                >
                  👀
                </div>
                <Card.Title style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                  Application Review
                </Card.Title>
                <Card.Text
                  style={{
                    flexGrow: 1,
                    fontSize: "1.1rem",
                    lineHeight: "1.5",
                    marginTop: "0.5rem",
                  }}
                >
                  Our team will assess your submission. If selected, you may be
                  asked to provide performance samples or complete an audition.
                </Card.Text>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 shadow rounded text-center p-4 d-flex flex-column">
                <div
                  style={{ fontSize: "3rem", marginBottom: "1rem" }}
                  aria-label="Scheduling & Confirmation Icon"
                >
                  📅
                </div>
                <Card.Title style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                  Scheduling & Confirmation
                </Card.Title>
                <Card.Text
                  style={{
                    flexGrow: 1,
                    fontSize: "1.1rem",
                    lineHeight: "1.5",
                    marginTop: "0.5rem",
                  }}
                >
                  Selected performers will receive confirmation and scheduling
                  details. Performance slots are limited and subject to
                  availability.
                </Card.Text>
              </Card>
            </Col>
          </Row>
          <p
            className="text-muted mt-4 text-center"
            style={{ fontSize: "1rem" }}
          >
            <span style={{ fontWeight: "700" }}>Note:</span> Not all applicants
            can be accommodated immediately. We appreciate your patience and
            interest in performing at the SJFM!
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contentWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  } as React.CSSProperties,
  textWrapper: {
    flex: "1 1 500px",
    minWidth: "300px",
  } as React.CSSProperties,
  lottieWrapper: {
    flex: "1 1 400px",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
};

export default BecomeBusker;

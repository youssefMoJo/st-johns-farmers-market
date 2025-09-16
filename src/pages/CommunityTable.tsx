import { Card, Row, Col, Button } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import communityTable from "../assets/lottie-files/communityTable.lottie";

const CommunityTable: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #D46540 65%, rgb(253, 243, 187) 100%)",
          padding: "4rem 1rem",
          color: "white",
        }}
      >
        <div style={styles.contentWrapper}>
          <div style={styles.textWrapper}>
            <SectionTitle
              parts={[{ text: "🤝 The Community Table", color: "white" }]}
              align="left"
            />
            <p style={{ lineHeight: "1.6" }}>
              The St. John’s Farmers’ Market is proud to offer our dedicated
              <span className="bold"> Community Table</span>—a high-visibility
              space at our Saturday Markets for local groups, non-profits,
              school teams, and community-minded organizations. This space is
              completely free and designed to help you share your mission,
              recruit volunteers, fundraise, or simply connect with the wider
              community.
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={communityTable}
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

      {/* Why Offer the Community Table */}
      <div style={{ background: "#F7F8FA", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Card
            className="shadow-sm"
            style={{
              borderRadius: 20,
              padding: "2rem 1.5rem",
              background: "white",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: 10 }}>🌟</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 12 }}>
              Why Offer the Community Table?
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.7",
                marginBottom: 0,
              }}
            >
              We believe in supporting the amazing groups doing important work
              in our community. The Community Table offers free space in a busy
              indoor area of the Market, giving organizations the visibility
              they need to grow, share ideas, and build connections.
            </p>
          </Card>
        </div>
      </div>

      {/* Who Can Apply */}
      <div style={{ background: "white", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            📌 Who Can Apply?
          </h2>
          <Row
            xs={1}
            sm={2}
            md={4}
            className="g-4"
            style={{ justifyContent: "center" }}
          >
            <Col>
              <Card className="shadow-sm h-100" style={cardStyles.card}>
                <div style={cardStyles.icon}>🏢</div>
                <Card.Body>
                  <Card.Title style={cardStyles.cardTitle}>
                    Non-profits & Charities
                  </Card.Title>
                  <Card.Text style={cardStyles.cardText}>
                    Registered non-profit organizations and local charities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100" style={cardStyles.card}>
                <div style={cardStyles.icon}>🎓</div>
                <Card.Body>
                  <Card.Title style={cardStyles.cardTitle}>
                    School Teams & Clubs
                  </Card.Title>
                  <Card.Text style={cardStyles.cardText}>
                    School-based teams, clubs, or student organizations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100" style={cardStyles.card}>
                <div style={cardStyles.icon}>🌱</div>
                <Card.Body>
                  <Card.Title style={cardStyles.cardTitle}>
                    Community Groups
                  </Card.Title>
                  <Card.Text style={cardStyles.cardText}>
                    Grassroots initiatives and local community groups.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100" style={cardStyles.card}>
                <div style={cardStyles.icon}>🤲</div>
                <Card.Body>
                  <Card.Title style={cardStyles.cardTitle}>
                    Community-Focused Orgs
                  </Card.Title>
                  <Card.Text style={cardStyles.cardText}>
                    Any organization with a community-focused mission.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* How It Works */}
      <div style={{ background: "#F7F8FA", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            📝 How It Works
          </h2>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ justifyContent: "center" }}
          >
            <Col>
              <Card className="shadow-sm h-100" style={cardStyles.cardStep}>
                <div style={cardStyles.stepNumber}>1</div>
                <div style={cardStyles.stepIcon}>📅</div>
                <Card.Body>
                  <Card.Title style={cardStyles.cardTitle}>
                    Reserve Your Date
                  </Card.Title>
                  <Card.Text style={cardStyles.cardText}>
                    Choose a Saturday Market date that works for your group
                    using our online request form.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100" style={cardStyles.cardStep}>
                <div style={cardStyles.stepNumber}>2</div>
                <div style={cardStyles.stepIcon}>🪑</div>
                <Card.Body>
                  <Card.Title style={cardStyles.cardTitle}>
                    Set Up at the Market
                  </Card.Title>
                  <Card.Text style={cardStyles.cardText}>
                    We'll provide a high-traffic indoor table free of charge.
                    Bring your own signage, brochures, and friendly faces!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100" style={cardStyles.cardStep}>
                <div style={cardStyles.stepNumber}>3</div>
                <div style={cardStyles.stepIcon}>🤝</div>
                <Card.Body>
                  <Card.Title style={cardStyles.cardTitle}>
                    Connect with the Community
                  </Card.Title>
                  <Card.Text style={cardStyles.cardText}>
                    Share your story, promote your cause, recruit volunteers, or
                    fundraise—it's your space to use creatively.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ background: "white", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Card
            className="shadow-lg"
            style={{
              borderRadius: 24,
              background: "#FFFBEA",
              padding: "2.5rem 1.5rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: 16 }}
            >
              Ready to reserve your Community Table?
            </h3>
            <p style={{ fontSize: "1.15rem", marginBottom: 30 }}>
              <span className="bold">Interested?</span> Learn more and request
              your dates below.
            </p>
            <Button
              variant="warning"
              href="https://forms.gle/VCoPqqmSDRJ3UgzM9"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 700,
                fontSize: "1.15rem",
                padding: "0.75rem 2.5rem",
                borderRadius: 30,
              }}
            >
              Reserve Your Community Table
            </Button>
          </Card>
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
    justifyContent: "space-between",
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

const cardStyles = {
  card: {
    borderRadius: 18,
    minHeight: 265,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem 1rem",
    background: "white",
    textAlign: "center" as const,
  },
  icon: {
    fontSize: "2.2rem",
    marginBottom: 12,
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: "1.13rem",
    marginBottom: 10,
  },
  cardText: {
    fontSize: "1rem",
    color: "#444",
  },
  cardStep: {
    borderRadius: 18,
    minHeight: 330,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1.25rem 1.5rem 1.25rem",
    background: "white",
    textAlign: "center" as const,
    position: "relative" as const,
  },
  stepNumber: {
    position: "absolute" as const,
    top: 15,
    left: 20,
    fontSize: "1.2rem",
    fontWeight: 700,
    background: "#F7C948",
    color: "#143C5D",
    borderRadius: "50%",
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(20,60,93,0.08)",
  },
  stepIcon: {
    fontSize: "2.4rem",
    marginTop: 14,
    marginBottom: 16,
  },
};

export default CommunityTable;

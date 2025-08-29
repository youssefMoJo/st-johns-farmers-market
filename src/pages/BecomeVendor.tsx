import React from "react";
import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import cooking from "../assets/lottie-files/cooking.lottie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card, Row, Col, Table, Accordion } from "react-bootstrap";

function VendorHandbookModal(props: { show: boolean; onHide: () => void }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="vendor-handbook-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="vendor-handbook-modal">
          Rules to live by for the Market Community
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The St. John’s Farmers’ Market Cooperative maintains several policy
          documents that outline the rules and procedures for markets and for
          all co-operative activities.
        </p>
        <p>
          The full SJFM Policy Manual can be found{" "}
          <a
            href="https://sjfm.ca/docs/SJFM%20Policy%20Manual%20-%20Updated%20June%202023.pdf"
            style={{
              color: "#D46540",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
              borderBottom: "2px solid #D46540",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#fff";
              target.style.backgroundColor = "#D46540";
              target.style.borderBottom = "2px solid #fff";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#D46540";
              target.style.backgroundColor = "transparent";
              target.style.borderBottom = "2px solid #D46540";
            }}
          >
            Here
          </a>
          . Please note that this is a living document and policies do change
          from time to time as needed.
        </p>
        <p>
          If you are looking for information on our Governance and Organization,
          please refer to the{" "}
          <a
            href="https://sjfm.ca/docs/2023-04-20%20-%20SJFM%20Bylaws%20-%20Approved%20and%20Filed.pdf"
            style={{
              color: "#D46540",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
              borderBottom: "2px solid #D46540",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#fff";
              target.style.backgroundColor = "#D46540";
              target.style.borderBottom = "2px solid #fff";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#D46540";
              target.style.backgroundColor = "transparent";
              target.style.borderBottom = "2px solid #D46540";
            }}
          >
            SJFM By-Laws.
          </a>
        </p>
        <p>
          For the convenience of vendors, important policies for understanding
          the operations of the Market and the responsibilities of being a
          vendor can be found in our{" "}
          <a
            href="https://sjfm.ca/docs/SJFM%20Vendor%20Handbook%20-%20Updated%20June%202023.pdf"
            style={{
              color: "#D46540",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
              borderBottom: "2px solid #D46540",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#fff";
              target.style.backgroundColor = "#D46540";
              target.style.borderBottom = "2px solid #fff";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#D46540";
              target.style.backgroundColor = "transparent";
              target.style.borderBottom = "2px solid #D46540";
            }}
          >
            Vendor Handbook.
          </a>
        </p>
        <p>
          For vendors and individuals who use our commercial kitchen, safety
          regulations and guidelines for use can be found in our{" "}
          <a
            href="https://sjfm.ca/docs/SJFM%20Kitchen%20Manual%20-%20Updated%20June%202023.pdf"
            style={{
              color: "#D46540",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
              borderBottom: "2px solid #D46540",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#fff";
              target.style.backgroundColor = "#D46540";
              target.style.borderBottom = "2px solid #fff";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.color = "#D46540";
              target.style.backgroundColor = "transparent";
              target.style.borderBottom = "2px solid #D46540";
            }}
          >
            Kitchen Handbook.
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const BecomeVendor: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
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
              parts={[{ text: "BECOME A VENDOR", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              The heart of the St. John’s Farmers’ Market is our vendors—local
              growers, makers, and artisans offering everything from homemade
              baked goods to handcrafted accessories. Join our vibrant community
              to showcase your passion, build connections, and bring
              Newfoundland’s best to our visitors.
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={cooking}
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

      {/* Application Status */}
      <div
        style={{ background: "#f8f8f8", padding: "2rem 1rem", color: "#333" }}
      >
        <div
          style={{
            ...styles.contentWrapper,
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>📅 Application Status</h2>
          <Row xs={1} md={3} className="g-4" style={{ width: "100%" }}>
            <Col>
              <Card
                style={{
                  background: "#e6f9ed",
                  border: "none",
                  minHeight: 220,
                  boxShadow: "0 2px 8px rgba(60,180,80,0.08)",
                }}
                className="h-100"
              >
                <Card.Body>
                  <div style={{ fontSize: "2.4rem" }}>🌾</div>
                  <Card.Title style={{ color: "#228B22", fontWeight: "bold" }}>
                    Farmers & Primary Producers
                  </Card.Title>
                  <Card.Text>
                    Applications open <b>year-round</b>! Contact the Market
                    Manager at{" "}
                    <a
                      href="mailto:marketmanager@sjfm.ca"
                      style={{ color: "#228B22", fontWeight: "bold" }}
                    >
                      marketmanager@sjfm.ca
                    </a>{" "}
                    to get started.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  background: "#fff6f6",
                  border: "none",
                  minHeight: 220,
                  boxShadow: "0 2px 8px rgba(200,0,0,0.06)",
                }}
                className="h-100"
              >
                <Card.Body>
                  <div style={{ fontSize: "2.4rem" }}>🍞</div>
                  <Card.Title style={{ color: "#D46540", fontWeight: "bold" }}>
                    Food Vendors
                  </Card.Title>
                  <Card.Text>
                    <b>2025 applications are closed.</b> Please check back in
                    early 2025 for updates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  background: "#fffbe6",
                  border: "none",
                  minHeight: 220,
                  boxShadow: "0 2px 8px rgba(200,180,0,0.07)",
                }}
                className="h-100"
              >
                <Card.Body>
                  <div style={{ fontSize: "2.4rem" }}>🎨</div>
                  <Card.Title style={{ color: "#C19A3B", fontWeight: "bold" }}>
                    Artisans & Makers
                  </Card.Title>
                  <Card.Text>
                    <b>2025 applications are closed.</b> Please revisit in 2025
                    for new opportunities!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Vendor Handbook */}
      <div style={{ background: "white", padding: "2rem 1rem", color: "#333" }}>
        <div
          style={{
            ...styles.contentWrapper,
            flexDirection: "column",
            alignItems: "center",
            textAlign: "left",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          <Card
            style={{
              width: "100%",
              maxWidth: 800,
              margin: "0 auto",
              background: "#e7f0fa",
              border: "2px solid #1976d2",
              borderRadius: "1.5rem",
              boxShadow: "0 4px 24px rgba(25,118,210,0.10)",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
              padding: "1.5rem 0.5rem",
            }}
            onClick={() => setModalShow(true)}
            className="vendor-handbook-card"
          >
            <Card.Body
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: "3rem", flex: "0 0 64px" }}>📘</div>
              <div style={{ flex: "1 1 300px" }}>
                <Card.Title
                  style={{
                    fontSize: "2rem",
                    color: "#1976d2",
                    fontWeight: 700,
                  }}
                >
                  Vendor Handbook
                </Card.Title>
                <Card.Text style={{ fontSize: "1.15rem", color: "#234b70" }}>
                  Everything you need to know about becoming a vendor: selection
                  criteria, market policies, and operational details.{" "}
                  <span style={{ fontWeight: 600 }}>
                    Click to view the full handbook!
                  </span>
                </Card.Text>
                <Button
                  variant="primary"
                  style={{
                    marginTop: "0.5rem",
                    fontWeight: 600,
                    background: "#1976d2",
                    border: "none",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalShow(true);
                  }}
                >
                  View Handbook
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <VendorHandbookModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>

      {/* Vendor Guidelines */}
      <div
        style={{ background: "#f8f8f8", padding: "2rem 1rem", color: "#333" }}
      >
        <div
          style={{
            ...styles.contentWrapper,
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>📋 Vendor Guidelines</h2>
          <Row xs={1} md={2} className="g-3" style={{ width: "100%" }}>
            <Col>
              <Card
                className="h-100"
                style={{
                  borderLeft: "6px solid #1976d2",
                  background: "#f8fbff",
                }}
              >
                <Card.Body
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ fontSize: "2rem" }}>✅</span>
                  <span style={{ fontSize: "1.12rem" }}>
                    All products must be <b>handmade, grown, or produced</b> in
                    Newfoundland and Labrador. If you don’t{" "}
                    <b>“Make it, Bake it, or Grow it,”</b> you can’t sell it.
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{
                  borderLeft: "6px solid #C19A3B",
                  background: "#fffbe6",
                }}
              >
                <Card.Body
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ fontSize: "2rem" }}>⚠️</span>
                  <span style={{ fontSize: "1.12rem" }}>
                    Due to high demand, we <b>cannot guarantee</b> a spot at
                    every market. Confirm your attendance <b>within 72 hours</b>{" "}
                    of receiving your invitation. Late responses or
                    cancellations may incur a fee.
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{
                  borderLeft: "6px solid #228B22",
                  background: "#f7fcf8",
                }}
              >
                <Card.Body
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ fontSize: "2rem" }}>✅</span>
                  <span style={{ fontSize: "1.12rem" }}>
                    All vendors must follow policies in the{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalShow(true);
                      }}
                      style={{
                        color: "#1976d2",
                        fontWeight: "bold",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Vendor Handbook
                    </a>{" "}
                    with a focus on safety, food safety, and product
                    suitability.
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{
                  borderLeft: "6px solid #D46540",
                  background: "#fff9f7",
                }}
              >
                <Card.Body
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ fontSize: "2rem" }}>⚠️</span>
                  <span style={{ fontSize: "1.12rem" }}>
                    The Market Manager and Board reserve the right to{" "}
                    <b>deny participation</b> if Vendor Handbook policies are
                    not followed.
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Food Vendors & Licensing */}
      <div style={{ background: "white", padding: "2rem 1rem", color: "#333" }}>
        <div
          style={{
            ...styles.contentWrapper,
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>🍎 Food Vendors & Licensing</h2>
          <Row xs={1} md={3} className="g-3" style={{ width: "100%" }}>
            <Col>
              <Card
                className="h-100"
                style={{ background: "#f8fbff", minHeight: 160 }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>📝</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    1. Apply Online
                  </Card.Title>
                  <Card.Text>
                    Complete the Vendor Application form on our website. Receive
                    an automatic confirmation email.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{ background: "#fffbe6", minHeight: 160 }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>📩</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    2. Application Review
                  </Card.Title>
                  <Card.Text>
                    Market Manager reviews and contacts you within 2 weeks. If
                    eligible, you’ll receive required forms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{ background: "#f8f8f8", minHeight: 160 }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>📄</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    3. Conditional Approval
                  </Card.Title>
                  <Card.Text>
                    Receive a Conditional Approval Letter, needed for your food
                    license application.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            xs={1}
            md={3}
            className="g-3"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <Col>
              <Card
                className="h-100"
                style={{ background: "#e6f9ed", minHeight: 160 }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>📧</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    4. Submit to Inspector
                  </Card.Title>
                  <Card.Text>
                    Email forms and approval letter to{" "}
                    <a href="mailto:ehaa@gov.nl.ca">ehaa@gov.nl.ca</a>.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{ background: "#fff6f6", minHeight: 160 }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>🏛</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    5. Service NL Review
                  </Card.Title>
                  <Card.Text>
                    Service NL processes your license. You’ll be notified when
                    approved.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{ background: "#e7f0fa", minHeight: 160 }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>🧑‍🍳</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    6. Food Inspection
                  </Card.Title>
                  <Card.Text>
                    Market Manager schedules your on-site food inspection for
                    your first market date.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            xs={1}
            md={1}
            className="g-3"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <Col>
              <Card
                className="h-100"
                style={{
                  background: "#e6f9ed",
                  borderLeft: "6px solid #228B22",
                }}
              >
                <Card.Body>
                  <div
                    style={{
                      fontSize: "2rem",
                      display: "inline-block",
                      marginRight: "0.5rem",
                    }}
                  >
                    🏅
                  </div>
                  <span style={{ fontWeight: "bold" }}>
                    7. Final License Issuance:
                  </span>{" "}
                  Once you pass inspection, Service NL mails you the license.{" "}
                  <b>Display it at your booth at all times.</b>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card
            className="h-100"
            style={{
              background: "#fffbe6",
              borderLeft: "6px solid #C19A3B",
              marginTop: "1.5rem",
            }}
          >
            <Card.Body
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <span style={{ fontSize: "2rem" }}>🍳</span>
              <span>
                <b>Need a licensed kitchen?</b> Ask the Market Manager about
                renting our on-site licensed kitchen!
              </span>
            </Card.Body>
          </Card>
          <p style={{ marginTop: "1rem" }}>
            <span className="bold">Note:</span> If you plan to introduce new
            food products that differ significantly from your original
            offerings, please consult with both the Market Manager and Service
            NL for approval.
          </p>
        </div>
      </div>

      {/* Food Quality Standards */}
      <div
        style={{ background: "#f8f8f8", padding: "2rem 1rem", color: "#333" }}
      >
        <div
          style={{
            ...styles.contentWrapper,
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>🧑‍🍳 Food Quality Standards</h2>
          <Row xs={1} md={3} className="g-4" style={{ width: "100%" }}>
            <Col>
              <Card
                className="h-100"
                style={{
                  background: "#e7f0fa",
                  borderLeft: "6px solid #1976d2",
                  minHeight: 170,
                }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>🍲</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    On-Site Adjudication
                  </Card.Title>
                  <Card.Text>
                    All food vendors are reviewed by at least two staff members
                    to ensure quality and receive constructive feedback.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{
                  background: "#fffbe6",
                  borderLeft: "6px solid #C19A3B",
                  minHeight: 170,
                }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>⏳</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Improvement Window
                  </Card.Title>
                  <Card.Text>
                    Vendors have one additional market date to address any
                    concerns. More time? Temporarily remove affected products
                    until standards are met.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100"
                style={{
                  background: "#f8fbff",
                  borderLeft: "6px solid #228B22",
                  minHeight: 170,
                }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>📝</div>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Seasonal Reviews
                  </Card.Title>
                  <Card.Text>
                    All food vendors are juried at least once per season; new
                    vendors are reviewed twice in their first year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <blockquote
            style={{
              borderLeft: "6px solid #1976d2",
              background: "#f1f6fa",
              margin: "1.5rem 0 0 0",
              padding: "1.2rem 1.5rem",
              fontStyle: "italic",
              color: "#234b70",
              fontSize: "1.12rem",
              // maxWidth: 700,
            }}
          >
            “Our goal is to work with vendors to uphold the highest quality
            standards. Feedback is always constructive and intended to help you
            succeed at the Market.” <br />
            <span style={{ fontWeight: 600, color: "#1976d2" }}>
              – SJFM Market Team
            </span>
          </blockquote>
          <div style={{ marginTop: "1rem" }}>
            For full details on our quality standards, please contact the Market
            Manager directly at{" "}
            <a href="mailto:marketmanager@sjfm.ca">marketmanager@sjfm.ca</a>.
          </div>
        </div>
      </div>

      {/*Crafts, Specialty Items & Non-Food Products */}
      <div style={{ background: "white", padding: "2rem 1rem", color: "#333" }}>
        <div
          style={{
            ...styles.contentWrapper,
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>
            🎨 Crafts, Specialty Items & Non-Food Products
          </h2>
          <div>
            <p>
              To uphold high standards for non-food products at the St. John’s
              Farmers’ Market, all vendors offering items such as art, crafts,
              jewelry, clothing, and similar goods must be adjudicated before
              selling at the market.
            </p>
            <p>
              If you wish to introduce a product that is significantly different
              from what you originally applied to sell, a new application is
              required.
            </p>
            <h5>How to Apply:</h5>
            <Row xs={1} md={4} className="g-3" style={{ width: "100%" }}>
              <Col>
                <Card
                  className="h-100"
                  style={{
                    background: "#e7f0fa",
                    textAlign: "center",
                    minHeight: 180,
                  }}
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.2rem" }}>📝</div>
                    <Card.Title
                      style={{ fontWeight: "bold", marginTop: "0.5rem" }}
                    >
                      Apply
                    </Card.Title>
                    <Card.Text>
                      Submit the Vendor Application form. Receive a confirmation
                      email.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="h-100"
                  style={{
                    background: "#fffbe6",
                    textAlign: "center",
                    minHeight: 180,
                  }}
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.2rem" }}>🎨</div>
                    <Card.Title
                      style={{ fontWeight: "bold", marginTop: "0.5rem" }}
                    >
                      Artisan Form
                    </Card.Title>
                    <Card.Text>
                      Receive the Artisan Craft Application by email. Complete
                      and return it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="h-100"
                  style={{
                    background: "#e6f9ed",
                    textAlign: "center",
                    minHeight: 180,
                  }}
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.2rem" }}>👩‍⚖️</div>
                    <Card.Title
                      style={{ fontWeight: "bold", marginTop: "0.5rem" }}
                    >
                      Adjudication
                    </Card.Title>
                    <Card.Text>
                      Attend your first market date. Two staff/board members
                      adjudicate your products.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="h-100"
                  style={{
                    background: "#fff6f6",
                    textAlign: "center",
                    minHeight: 180,
                  }}
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.2rem" }}>✅</div>
                    <Card.Title
                      style={{ fontWeight: "bold", marginTop: "0.5rem" }}
                    >
                      Approved
                    </Card.Title>
                    <Card.Text>
                      Upon successful adjudication, you can book future market
                      dates.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <p style={{ marginTop: "1rem" }}>
              <span className="bold">Please note:</span> Periodic inspections
              may occur throughout the season. If your product quality declines,
              further adjudication may be required.
            </p>
          </div>
        </div>
      </div>

      {/* 2025 Vendor Fees */}
      <div
        style={{ background: "#f8f8f8", padding: "2.5rem 1rem", color: "#333" }}
      >
        <div
          style={{
            ...styles.contentWrapper,
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>💰 2025 Indoor Booth Fees</h2>
          <p style={{ fontSize: "1.15rem", maxWidth: 700 }}>
            Booth fees for the 2025 Market season are based on vendor category
            and booth size. All fees are per market date. Please review the
            pricing below for each vendor type and booth size. Non-profit
            organizations can participate for free!
          </p>
          <Row xs={1} md={4} className="g-4" style={{ width: "100%" }}>
            <Col>
              <Card
                style={{
                  background: "#e6f9ed",
                  border: "none",
                  minHeight: 250,
                  boxShadow: "0 2px 8px rgba(60,180,80,0.08)",
                }}
                className="h-100 text-center shadow-sm"
              >
                <Card.Body>
                  <div style={{ fontSize: "2.4rem" }}>🌾</div>
                  <Card.Title style={{ color: "#228B22", fontWeight: "bold" }}>
                    Farmers
                  </Card.Title>
                  <div className="d-flex justify-content-between mt-3">
                    <span>28 sq.ft (7×4)</span>
                    <span>
                      <b>$40.04</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>48 sq.ft (6×8)</span>
                    <span>
                      <b>$68.64</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>80 sq.ft</span>
                    <span>
                      <b>N/A</b>
                    </span>
                  </div>
                  <small className="text-muted d-block mt-3">
                    One table included
                  </small>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  background: "#fffbe6",
                  border: "none",
                  minHeight: 250,
                  boxShadow: "0 2px 8px rgba(200,180,0,0.07)",
                }}
                className="h-100 text-center shadow-sm"
              >
                <Card.Body>
                  <div style={{ fontSize: "2.4rem" }}>🛍️</div>
                  <Card.Title style={{ color: "#C19A3B", fontWeight: "bold" }}>
                    Vendors
                  </Card.Title>
                  <div className="d-flex justify-content-between mt-3">
                    <span>28 sq.ft (7×4)</span>
                    <span>
                      <b>$47.74</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>48 sq.ft (6×8)</span>
                    <span>
                      <b>$81.84</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>80 sq.ft</span>
                    <span>
                      <b>N/A</b>
                    </span>
                  </div>
                  <small className="text-muted d-block mt-3">
                    One table included
                  </small>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  background: "#e7f0fa",
                  border: "none",
                  minHeight: 250,
                  boxShadow: "0 2px 8px rgba(25,118,210,0.10)",
                }}
                className="h-100 text-center shadow-sm"
              >
                <Card.Body>
                  <div style={{ fontSize: "2.4rem" }}>🍳</div>
                  <Card.Title style={{ color: "#1976d2", fontWeight: "bold" }}>
                    Prepared Food / Heavy Equipment
                  </Card.Title>
                  <div className="d-flex justify-content-between mt-3">
                    <span>28 sq.ft (7×4)</span>
                    <span>
                      <b>N/A</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>48 sq.ft (6×8)</span>
                    <span>
                      <b>N/A</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>80 sq.ft</span>
                    <span>
                      <b>$136.40</b>
                    </span>
                  </div>
                  <small className="text-muted d-block mt-3">
                    One table included
                  </small>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  background: "#fff6f6",
                  border: "none",
                  minHeight: 250,
                  boxShadow: "0 2px 8px rgba(200,0,0,0.06)",
                  position: "relative",
                }}
                className="h-100 text-center shadow-sm"
              >
                <Card.Body>
                  <div style={{ fontSize: "2.4rem" }}>❤️</div>
                  <Card.Title
                    style={{
                      color: "#D46540",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Non-Profit{" "}
                    <span
                      style={{
                        color: "green",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginLeft: "0.25em",
                      }}
                    >
                      FREE
                    </span>
                  </Card.Title>
                  <div className="d-flex justify-content-between mt-3">
                    <span>28 sq.ft (7×4)</span>
                    <span style={{ color: "green", fontWeight: 700 }}>
                      FREE
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>48 sq.ft (6×8)</span>
                    <span style={{ color: "green", fontWeight: 700 }}>
                      FREE
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>80 sq.ft</span>
                    <span style={{ color: "green", fontWeight: 700 }}>
                      FREE
                    </span>
                  </div>
                  <small className="text-muted d-block mt-3">
                    One booth per Saturday
                  </small>
                </Card.Body>
              </Card>
            </Col>
            <small className="text-muted d-block mt-3">
              * HST will be added to all applicable rates
            </small>
          </Row>

          <div style={{ width: "100%", marginTop: "2rem" }}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>View Detailed Fees</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>28 sq.ft (7×4)</th>
                        <th>48 sq.ft (6×8)</th>
                        <th>80 sq.ft</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Farmers</b>
                        </td>
                        <td>$40.04</td>
                        <td>$68.64</td>
                        <td>N/A</td>
                        <td>Primary producers only</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Vendors</b>
                        </td>
                        <td>$47.74</td>
                        <td>$81.84</td>
                        <td>N/A</td>
                        <td>Artisans, crafts, makers, specialty food</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Prepared Food / Heavy Equipment</b>
                        </td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>$136.40</td>
                        <td>Hot foods, food trucks, large setups</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Non-Profit</b>{" "}
                          <span
                            style={{
                              background: "#D46540",
                              color: "#fff",
                              fontWeight: 700,
                              padding: "0.2em 0.6em",
                              borderRadius: "1em",
                              fontSize: "0.85rem",
                              marginLeft: "0.25em",
                            }}
                          >
                            FREE
                          </span>
                        </td>
                        <td>$0</td>
                        <td>$0</td>
                        <td>$0</td>
                        <td>Registered non-profit organizations</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* 2025 Outdoor Booth Fees */}
          <div style={{ marginTop: "3rem", width: "100%" }}>
            <h2 style={{ fontSize: "2rem" }}>🏞️ 2025 Outdoor Booth Fees</h2>
            <p style={{ fontSize: "1.15rem", maxWidth: 700 }}>
              Outdoor booth spaces are available during the 2025 season for
              farmers, vendors, and non-profit organizations. All outdoor booth
              fees are per market date and include one table.
            </p>
            <Row xs={1} md={3} className="g-4" style={{ width: "100%" }}>
              <Col>
                <Card
                  style={{
                    background: "#e6f9ed",
                    border: "none",
                    minHeight: 180,
                    boxShadow: "0 2px 8px rgba(60,180,80,0.08)",
                  }}
                  className="h-100 text-center shadow-sm"
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.4rem" }}>🌾</div>
                    <Card.Title
                      style={{ color: "#228B22", fontWeight: "bold" }}
                    >
                      Farmer
                    </Card.Title>
                    <div className="mt-3" style={{ fontSize: "1.5rem" }}>
                      <b>$35</b>{" "}
                      <span className="text-muted" style={{ fontSize: "1rem" }}>
                        + HST
                      </span>
                    </div>
                    <small className="text-muted d-block mt-2">
                      One table included
                    </small>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    background: "#fffbe6",
                    border: "none",
                    minHeight: 180,
                    boxShadow: "0 2px 8px rgba(200,180,0,0.07)",
                  }}
                  className="h-100 text-center shadow-sm"
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.4rem" }}>🛍️</div>
                    <Card.Title
                      style={{ color: "#C19A3B", fontWeight: "bold" }}
                    >
                      Vendor
                    </Card.Title>
                    <div className="mt-3" style={{ fontSize: "1.5rem" }}>
                      <b>$50</b>{" "}
                      <span className="text-muted" style={{ fontSize: "1rem" }}>
                        + HST
                      </span>
                    </div>
                    <small className="text-muted d-block mt-2">
                      One table included
                    </small>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    background: "#fff6f6",
                    border: "none",
                    minHeight: 180,
                    boxShadow: "0 2px 8px rgba(200,0,0,0.06)",
                  }}
                  className="h-100 text-center shadow-sm"
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.4rem" }}>❤️</div>
                    <Card.Title
                      style={{
                        color: "#D46540",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      Non-Profit{" "}
                      <span
                        style={{
                          color: "green",
                          fontWeight: 700,
                          fontSize: "1rem",
                          marginLeft: "0.25em",
                        }}
                      >
                        FREE
                      </span>
                    </Card.Title>
                    <div
                      className="mt-3"
                      style={{
                        color: "green",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                      }}
                    >
                      FREE
                    </div>
                    <small className="text-muted d-block mt-2">
                      One table included
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div>
              <small className="text-muted d-block mt-3">
                * HST will be added to all applicable rates
              </small>
            </div>
            <div style={{ width: "100%", marginTop: "2rem" }}>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    View Detailed Outdoor Booth Fees
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <b>Farmers</b>
                          </td>
                          <td>$35 + HST</td>
                          <td>One table included</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Vendors</b>
                          </td>
                          <td>$50 + HST</td>
                          <td>One table included</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Non-Profit</b>{" "}
                            <span
                              style={{
                                background: "#D46540",
                                color: "#fff",
                                fontWeight: 700,
                                padding: "0.2em 0.6em",
                                borderRadius: "1em",
                                fontSize: "0.85rem",
                                marginLeft: "0.25em",
                              }}
                            >
                              FREE
                            </span>
                          </td>
                          <td>FREE</td>
                          <td>One table included</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          {/* Other Vendor Fees & Discounts */}
          <div style={{ marginTop: "3rem", width: "100%" }}>
            <h2 style={{ fontSize: "2rem" }}>
              📌 Other Vendor Fees & Discounts
            </h2>
            <Row xs={1} md={3} className="g-4" style={{ width: "100%" }}>
              <Col>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body>
                    <div style={{ fontSize: "2.4rem" }}>⚡</div>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      Utility Fee
                    </Card.Title>
                    <div className="mt-2" style={{ fontSize: "1.25rem" }}>
                      $10{" "}
                      <span className="text-muted" style={{ fontSize: "1rem" }}>
                        per market date
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body>
                    <div style={{ fontSize: "2.4rem" }}>📦</div>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      Storage Room Fee
                    </Card.Title>
                    <div className="mt-2" style={{ fontSize: "1.25rem" }}>
                      $3.75 + HST{" "}
                      <span className="text-muted" style={{ fontSize: "1rem" }}>
                        per sq.ft per month
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body>
                    <div style={{ fontSize: "2.4rem" }}>🎉</div>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      Senior Discount (65+)
                    </Card.Title>
                    <div className="mt-2" style={{ fontSize: "1.25rem" }}>
                      $5 off vendor fee{" "}
                      <span className="text-muted" style={{ fontSize: "1rem" }}>
                        (year round)
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
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

export default BecomeVendor;

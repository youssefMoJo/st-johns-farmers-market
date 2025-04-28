import React from "react";
import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import cooking from "../assets/lottie-files/cooking.lottie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
                maxWidth: "450px",
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

          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Applications are currently <strong>closed</strong>. We are excited
            to announce that vendor applications will reopen in early{" "}
            <strong>2025</strong>! Stay tuned for updates.
          </p>
        </div>
      </div>

      {/* Vendor Handbook */}
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
          <h2 style={{ fontSize: "2rem" }}>📘 Vendor Handbook</h2>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Everything you need to know about becoming a vendor is outlined in
            our{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setModalShow(true);

                const target = e.target as HTMLAnchorElement;
                target.style.color = "#D46540";
                target.style.fontWeight = "bold";
                target.style.textDecoration = "none";
                target.style.cursor = "pointer";
                target.style.borderBottom = "2px solid #D46540";
              }}
              style={{
                color: "#D46540",
                fontWeight: "bold",
                textDecoration: "none",
                cursor: "pointer",
                borderBottom: "2px solid #D46540",
                transition: "all 0.3s ease",
                padding: "3px",
                borderRadius: "10px",
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
              Vendor Handbook
            </a>{" "}
            to understand:{" "}
            <span style={{ color: "rgb(19, 81, 131)", fontWeight: "bold" }}>
              {" "}
              Selection criteria - Market policies - Operational details{" "}
            </span>
          </p>
        </div>
        <VendorHandbookModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>

      {/* Vendor Categories */}
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
          <h2 style={{ fontSize: "2rem" }}>🛍️ Vendor Categories</h2>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Applications are currently <strong>closed</strong>. We are excited
            to announce that vendor applications will reopen in early{" "}
            <strong>2025</strong>! Stay tuned for updates.
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

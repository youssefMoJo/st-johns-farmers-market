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

          <div style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <h5>Applications for 2025 are now closed.</h5>
            <p>
              Vendor applications for the Saturday St. John’s Farmers’ Market
              are closed as of March 1, 2025.
            </p>
            <h5>Still a Farmer or Primary Producer?</h5>
            <p>
              We accept farmers and primary producers year-round. Please contact
              the Market Manager directly at{" "}
              <a href="mailto:marketmanager@sjfm.ca"> marketmanager@sjfm.ca </a>
              to get started.
            </p>
            <h5>Food Vendors & Artisans</h5>
            <p>
              Applications for food vendors and craft artisans are closed until
              2025. Please check back in early 2025 for updates on how to apply.
            </p>
          </div>
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
                padding: "1px 5px",
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
            We strongly recommend reviewing it before applying to understand:
            <ul style={{ color: "rgb(19, 81, 131)", fontWeight: "bold" }}>
              <li> Selection criteria</li>
              <li> Market policies</li>
              <li>Operational details</li>
            </ul>
            After submitting your application, you’ll be contacted by the Market
            Manager within 2 weeks. We’ll provide initial feedback and outline
            the next steps based on your product category.{" "}
            <span className="bold">Please note: </span>
            applications are not accepted on a first-come, first-served basis—we
            assess each submission carefully to ensure a diverse and balanced
            market.
          </p>
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
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>
              {" "}
              All products sold must be handmade, grown, or produced in
              Newfoundland and Labrador. If you don’t{" "}
              <span className="bold">“Make it, Bake it, or Grow it,” </span> you
              can’t sell it.
            </li>
            <li>
              All vendors must follow the policies outlined in the{" "}
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
                  padding: "1px 5px",
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
              , with a focus on safety, food safety, and product suitability. A
              paper copy is available upon request from the Market Manager.
            </li>
            <li>
              The Market Manager and Board reserve the right to deny vendor
              participation if Vendor Handbook policies are not followed.
            </li>
            <li>
              While we strive to accommodate as many vendors as possible, high
              demand means we cannot guarantee a spot at any specific market.
              Vendors selected to attend will receive an email confirmation at
              least 4 weeks in advance. You must confirm your attendance by
              responding no later than 72 hours before your scheduled date. Late
              responses or cancellations made after this 72-hour window may
              incur a fee, as outlined in our policy.
            </li>
          </ul>
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
          <div>
            <h5>For All Food Vendors</h5>
            <p>To sell food at the St. John’s Farmers’ Market, vendors must:</p>
            <ol style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              <li>
                <span className="bold">
                  Hold a Seasonal Food Establishment License{" "}
                </span>{" "}
                specific to this market.
              </li>
              <ul>
                <li>Your existing business license does not apply.</li>
              </ul>
              <li>
                <span className="bold">
                  {" "}
                  Complete an approved food safety course.
                </span>
              </li>
              <li>
                {" "}
                <span className="bold">Display your food license </span>
                at your booth once approved.
              </li>
            </ol>
          </div>
          <div>
            <h5>Need a licensed kitchen?</h5>
            <p>Ask the Market Manager about renting our licensed kitchen.</p>
          </div>
          <div>
            <h5>Steps to Obtain Your Food License with Us</h5>
            <p>
              To begin the process of securing your food license, please follow
              the steps below:
            </p>
            <ol>
              <li className="bold">Complete the Vendor Application</li>
              <ul>
                <li>
                  Submit the Vendor Application form available on our website.
                  Once submitted, you will automatically receive a confirmation
                  email.
                </li>
              </ul>
              <li className="bold">Application Review & Required Forms</li>
              <ul>
                <li>
                  After reviewing your application, the Market Manager will
                  contact you via email within two weeks. If your product aligns
                  with our market’s selection criteria and demand, you will
                  receive the necessary forms to proceed.
                </li>
                <ul>
                  <li>
                    If your product does not meet our current needs, the Market
                    Manager will notify you. You may revise and resubmit your
                    application or withdraw it.
                  </li>
                </ul>
              </ul>
              <li className="bold">Conditional Approval Letter</li>
              <ul>
                <li>
                  If your application is successful, you will receive a
                  Conditional Approval Letter from the Market Manager. This
                  letter is required for your food license application and
                  confirms our interest in having you as a vendor.
                </li>
              </ul>
              <li className="bold">Submit Documentation to Food Inspector</li>
              <ul>
                <li>
                  Email the completed forms and your Conditional Approval Letter
                  to our food inspector at{" "}
                  <a href="mailto:ehaa@gov.nl.ca"> ehaa@gov.nl.ca </a>.
                </li>
              </ul>
              <li className="bold">Processing by Service NL</li>
              <ul>
                <li>
                  Service NL will review and process your food license. This
                  step may take several weeks depending on demand. You may
                  contact Service NL directly for updates. You will be notified
                  by them once your license is approved.
                </li>
              </ul>
              <li className="bold">Scheduling Your Food Inspection</li>
              <ul>
                <li>
                  After your food license is approved, the Market Manager will
                  reach out to schedule your on-site food inspection for your
                  first market day.
                </li>
              </ul>
              <li className="bold">Final License Issuance</li>
              <ul>
                <li>
                  Once you pass your inspection, Service NL will mail you the
                  final food license. This license must be displayed at your
                  booth at all times during the market.
                </li>
              </ul>
            </ol>
          </div>
          <p>
            <span className="bold"> Note: </span>If you plan to introduce new
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
          <div>
            <p>
              To ensure the highest quality of food at the St. John’s Farmers’
              Market, all food vendors are subject to on-site adjudication by
              market staff. Each food product will be reviewed by a minimum of
              two staff members, who will then provide constructive feedback to
              help vendors meet or exceed our quality expectations.
            </p>
            <p>
              {" "}
              If any concerns are noted during adjudication, vendors will have
              one additional market date to make the necessary improvements.
              Should more time be required, we ask that the affected products be
              temporarily removed from your offerings until they meet the
              expected standard.
            </p>
            <p>
              All food vendors will be juried at least once per season. New
              vendors will be reviewed at least twice during their first season.
              If products consistently fall below our standards and feedback is
              not followed, the vendor may be asked to leave the market.
            </p>
            <p>
              For full details on our quality standards, please contact the
              Market Manager directly at{" "}
              <a href="mailto:marketmanager@sjfm.ca"> marketmanager@sjfm.ca </a>
              .
            </p>
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
            <ol>
              <li className="bold">Submit the Vendor Application</li>
              <p>
                Complete the Vendor Application form on our website. You will
                receive an automatic confirmation email once it has been
                successfully submitted.
              </p>
              <li className="bold">Receive the Artisan Craft Application</li>
              <p>
                Within two weeks of receiving your vendor application, the
                Market Manager will review your submission and email you the
                Artisan Craft Application Form. If your products do not meet our
                market criteria or current demand, the Market Manager will
                contact you with options to revise and resubmit, or to withdraw
                your application.
              </p>
              <li className="bold">Complete the Artisan Craft Application</li>
              <p>
                Fill out the Artisan Craft Application Form and return it to the
                Market Manager for review.
              </p>
              <li className="bold">Initial Market Date & Adjudication</li>
              <p>
                If your products meet our standards, you will be invited to
                attend your first market date. During this debut, at least two
                staff or board members will adjudicate your products. Feedback
                will be provided for any items not meeting expectations, along
                with a timeframe to make improvements if necessary.
              </p>
              <li className="bold">Post-Adjudication Approval</li>
              <p>
                Upon successful adjudication, the Market Manager will provide
                you with details on how to book future market dates.
              </p>
            </ol>
            <p>
              <span className="bold"> Please note </span>that periodic
              inspections may occur throughout the season. If the quality of
              your products appears to decline, further adjudication may be
              required.
            </p>
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

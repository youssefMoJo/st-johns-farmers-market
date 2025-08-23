import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import contactLottie from "../assets/lottie-files/contact.lottie";

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #12646C 65%, rgb(240, 240, 240) 100%)",
          padding: "4rem 1rem",
          color: "white",
        }}
      >
        <div style={styles.contentWrapper}>
          <div style={styles.textWrapper}>
            <SectionTitle
              parts={[{ text: "📬 Contact Us", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              Have questions about the Market? Want to get involved, support
              local, or simply say hello? We’d love to hear from you!
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={contactLottie}
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

      {/* Main Content */}
      <div style={{ background: "white", padding: "2rem 1rem", color: "#333" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Market Hours */}
          <div style={{ ...cardStyle, flex: "1 1 320px", minWidth: "300px" }}>
            <h2 style={cardHeaderStyle}>🕰️ Market Hours</h2>
            <p style={paragraphStyle}>
              <strong>Saturdays (year-round):</strong> 9:00am – 4:00pm
              <br />
              <strong>Some Sundays:</strong> Check our social media for details.
            </p>
          </div>

          {/* Location */}
          <div style={{ ...cardStyle, flex: "1 1 320px", minWidth: "300px" }}>
            <h2 style={cardHeaderStyle}>🗺️ Location</h2>
            <p style={paragraphStyle}>
              St. John’s Community Market
              <br />
              245 Freshwater Road
              <br />
              St. John’s, NL A1B 1B3
              <br />
              <a href="tel:+17092217536" style={linkStyle}>
                (709) 221-7536
              </a>
            </p>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1000px",
            margin: "2rem auto 0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Support the Market */}
          <div style={{ ...cardStyle, flex: "2 1 400px", minWidth: "320px" }}>
            <h2 style={cardHeaderStyle}>❤️ Support the Market</h2>
            <p style={paragraphStyle}>
              Support Local. Support the St. John’s Farmers’ Market. Since 2008,
              we’ve offered a place to find local foods and connect with the
              community. We’re a non-profit organization supporting local
              farmers and fostering community bonds. Your support helps us
              sustain a vibrant hub of delicious food and culture in St. John’s.
            </p>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1000px",
            margin: "2rem auto 0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Staff Contacts */}
          <div style={{ ...cardStyle, flex: "1 1 350px", minWidth: "320px" }}>
            <h2 style={cardHeaderStyle}>👥 Staff Contacts</h2>
            <ul
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                paddingLeft: "1.2em",
                margin: 0,
              }}
            >
              <li>
                <strong>Executive Director:</strong> Pam Anstey –{" "}
                <a href="mailto:ed@sjfm.ca" style={linkStyle}>
                  ed@sjfm.ca
                </a>
              </li>
              <li>
                <strong>Market Manager:</strong> Ricky Szabo –{" "}
                <a href="mailto:marketmanager@sjfm.ca" style={linkStyle}>
                  marketmanager@sjfm.ca
                </a>
              </li>
              <li>
                <strong>Administrative Assistant:</strong> Theresa Murphy –{" "}
                <a href="mailto:info@sjfm.ca" style={linkStyle}>
                  info@sjfm.ca
                </a>
              </li>
              <li>
                <strong>Events & Activities Coordinator:</strong> Cathie Reed –{" "}
                <a href="mailto:eventsmanager@sjfm.ca" style={linkStyle}>
                  eventsmanager@sjfm.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Volunteer */}
          <div style={{ ...cardStyle, flex: "1 1 350px", minWidth: "320px" }}>
            <h2 style={cardHeaderStyle}>🙌 Volunteer</h2>
            <p style={paragraphStyle}>
              Volunteering is a great way to support the St. John’s Farmers’
              Market! By giving your time, you’ll help strengthen our community
              and promote sustainable food systems. Volunteers are integral to
              our success, with a variety of roles available.
            </p>
            <p style={paragraphStyle}>
              Interested in volunteering? Email us at{" "}
              <a href="mailto:volunteer@sjfm.ca" style={linkStyle}>
                volunteer@sjfm.ca
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const paragraphStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  marginBottom: "1rem",
  color: "#222",
};

const cardStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #f5fafb 75%, #e9f2f2 100%)",
  borderRadius: "18px",
  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.05)",
  padding: "2rem 1.5rem",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  minHeight: "180px",
};

const cardHeaderStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  margin: 0,
  marginBottom: "0.5rem",
  letterSpacing: "-0.5px",
  color: "#14676c",
  display: "flex",
  alignItems: "center",
  gap: "0.5em",
};

const linkStyle: React.CSSProperties = {
  color: "#0a8c8c",
  textDecoration: "underline",
  fontWeight: 500,
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

export default Contact;

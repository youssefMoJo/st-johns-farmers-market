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
            "linear-gradient(to bottom right, #D46540 65%, rgb(240, 240, 240) 100%)",
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
      <div style={{ background: "#f7fafb", padding: "3rem 1rem 4rem 1rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Market Hours */}
          <div style={fancyCardStyle}>
            <div style={styles.iconCircleStyle}>🕰️</div>
            <h3 style={fancyCardHeaderStyle}>Market Hours</h3>
            <p style={paragraphStyle}>
              <strong>Saturdays (year-round):</strong> 9:00am – 4:00pm
              <br />
              <strong>Some Sundays:</strong> Check our social media for details.
            </p>
          </div>

          {/* Location */}
          <div style={fancyCardStyle}>
            <div style={styles.iconCircleStyle}>🗺️</div>
            <h3 style={fancyCardHeaderStyle}>Location</h3>

            <p style={paragraphStyle}>
              245 Freshwater Road
              <br />
              St. John’s, NL A1B 1B3
              <br />
              <a href="tel:+17092217536" style={fancyLinkStyle}>
                (709) 221-7536
              </a>
            </p>
            <div
              style={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 8px 0 rgba(10,140,140,0.08)",
                marginTop: "0.7rem",
              }}
            >
              <iframe
                title="St. John's Farmers' Market Map"
                src="https://www.google.com/maps?q=245+Freshwater+Road,+St.+John’s,+NL+A1B+1B3&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Support the Market */}
          <div style={fancyCardStyle}>
            <div style={styles.iconCircleStyle}>❤️</div>
            <h3 style={fancyCardHeaderStyle}>Support the Market</h3>
            <p style={paragraphStyle}>
              Since 2008, we’ve offered a place to find local foods and connect
              with the community. We’re a non-profit supporting local farmers
              and fostering community bonds. Your support helps us sustain a
              vibrant hub of delicious food and culture in St. John’s.
            </p>
            <a
              href="mailto:info@sjfm.ca"
              style={{
                ...fancyLinkStyle,
                display: "inline-block",
                marginTop: "1rem",
                background: "#0a8c8c",
                color: "white",
                padding: "0.6em 1.5em",
                borderRadius: "999px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 2px 8px 0 rgba(10,140,140,0.08)",
                transition: "background 0.2s",
              }}
            >
              Get Involved
            </a>
          </div>
        </div>

        {/* Staff & Volunteer Section */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "3.5rem auto 0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Staff Contacts */}
          <div
            style={{
              ...fancyCardStyle,
              background:
                "radial-gradient(900px 300px at 10% -40px, rgba(71,195,247,0.25), rgba(71,195,247,0) 60%)," +
                "radial-gradient(800px 280px at 110% 20%, rgba(212,101,64,0.18), rgba(212,101,64,0) 60%)," +
                "linear-gradient(180deg, #ffffff 0%, #f8fbfd 100%)",
              boxShadow: "0 10px 36px 0 rgba(20,60,93,0.12)",
              border: "1.5px solid rgba(71,195,247,0.45)",
              padding: "2.8rem 2.2rem 2.2rem 2.2rem",
              position: "relative",
              overflow: "visible",
            }}
          >
            <div
              style={{
                ...styles.iconCircleStyle,
                background:
                  "linear-gradient(135deg, #0a8c8c 50%, #47C3F7 100%)",
                boxShadow: "0 6px 18px 0 rgba(71,195,247,0.26)",
              }}
            >
              👤
            </div>
            <h3
              style={{
                ...fancyCardHeaderStyle,
                color: "#0a8c8c",
                fontSize: "1.55rem",
                letterSpacing: "-1px",
                marginBottom: "1.2rem",
              }}
            >
              Meet Our Team
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                width: "100%",
              }}
            >
              {/* Executive Director */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(71,195,247,0.12), rgba(10,140,140,0.08))",
                  borderRadius: "14px",
                  padding: "1rem 1.2rem",
                  boxShadow: "0 2px 10px 0 rgba(10,140,140,0.06)",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0a8c8c 60%, #00bcd4 100%)",
                    color: "white",
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  PA
                </span>
                <div>
                  <div style={{ fontWeight: 700, color: "#143C5D" }}>
                    Pam Anstey
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: "999px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0a8c8c",
                        background: "rgba(10,140,140,0.12)",
                      }}
                    >
                      Executive Director
                    </span>
                  </div>
                  <a
                    href="mailto:ed@sjfm.ca"
                    style={{ ...fancyLinkStyle, fontSize: "0.97rem" }}
                  >
                    ed@sjfm.ca
                  </a>
                </div>
              </div>
              {/* Market Manager */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(71,195,247,0.12), rgba(10,140,140,0.08))",
                  borderRadius: "14px",
                  padding: "1rem 1.2rem",
                  boxShadow: "0 2px 10px 0 rgba(10,140,140,0.06)",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0a8c8c 60%, #00bcd4 100%)",
                    color: "white",
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  RS
                </span>
                <div>
                  <div style={{ fontWeight: 700, color: "#143C5D" }}>
                    Ricky Szabo
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: "999px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0a8c8c",
                        background: "rgba(10,140,140,0.12)",
                      }}
                    >
                      Market Manager
                    </span>
                  </div>
                  <a
                    href="mailto:marketmanager@sjfm.ca"
                    style={{ ...fancyLinkStyle, fontSize: "0.97rem" }}
                  >
                    marketmanager@sjfm.ca
                  </a>
                </div>
              </div>
              {/* Administrative Assistant */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(71,195,247,0.12), rgba(10,140,140,0.08))",
                  borderRadius: "14px",
                  padding: "1rem 1.2rem",
                  boxShadow: "0 2px 10px 0 rgba(10,140,140,0.06)",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0a8c8c 60%, #00bcd4 100%)",
                    color: "white",
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  TM
                </span>
                <div>
                  <div style={{ fontWeight: 700, color: "#143C5D" }}>
                    Theresa Murphy
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: "999px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0a8c8c",
                        background: "rgba(10,140,140,0.12)",
                      }}
                    >
                      Administrative Assistant
                    </span>
                  </div>
                  <a
                    href="mailto:info@sjfm.ca"
                    style={{ ...fancyLinkStyle, fontSize: "0.97rem" }}
                  >
                    info@sjfm.ca
                  </a>
                </div>
              </div>
              {/* Events & Activities Coordinator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(71,195,247,0.12), rgba(10,140,140,0.08))",
                  borderRadius: "14px",
                  padding: "1rem 1.2rem",
                  boxShadow: "0 2px 10px 0 rgba(10,140,140,0.06)",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0a8c8c 60%, #00bcd4 100%)",
                    color: "white",
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  CR
                </span>
                <div>
                  <div style={{ fontWeight: 700, color: "#143C5D" }}>
                    Cathie Reed
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: "999px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0a8c8c",
                        background: "rgba(10,140,140,0.12)",
                      }}
                    >
                      Events & Activities Coordinator
                    </span>
                  </div>
                  <a
                    href="mailto:eventsmanager@sjfm.ca"
                    style={{ ...fancyLinkStyle, fontSize: "0.97rem" }}
                  >
                    eventsmanager@sjfm.ca
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer */}
          <div style={fancyCardStyle}>
            <div style={styles.iconCircleStyle}>🙌</div>
            <h3 style={fancyCardHeaderStyle}>Volunteer</h3>
            <p style={paragraphStyle}>
              Volunteering is a great way to support the St. John’s Farmers’
              Market! By giving your time, you’ll help strengthen our community
              and promote sustainable food systems.
            </p>
            <p style={paragraphStyle}>
              Interested in volunteering? Click the button below to email us and
              get started!
            </p>
            <a
              href="mailto:volunteer@sjfm.ca"
              style={{
                ...fancyLinkStyle,
                display: "inline-block",
                marginTop: "1rem",
                background: "#14676c",
                color: "white",
                padding: "0.6em 1.5em",
                borderRadius: "999px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 2px 8px 0 rgba(20,103,108,0.08)",
                transition: "background 0.2s",
              }}
            >
              Become a Volunteer
            </a>
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

const fancyCardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: "22px",
  boxShadow: "0 4px 24px 0 rgba(18,100,108,0.07)",
  padding: "2.5rem 2rem 2rem 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  position: "relative",
  minHeight: "220px",
  overflow: "hidden",
};

const fancyCardHeaderStyle: React.CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  margin: 0,
  marginBottom: "0.7rem",
  letterSpacing: "-0.5px",
  color: "#14676c",
};

const fancyLinkStyle: React.CSSProperties = {
  color: "#0a8c8c",
  textDecoration: "underline",
  fontWeight: 500,
  transition: "color 0.2s",
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
  iconCircleStyle: {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0a8c8c 60%, #14676c 100%)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    marginBottom: "1.1rem",
    boxShadow: "0 2px 10px 0 rgba(10,140,140,0.10)",
  } as React.CSSProperties,
};

export default Contact;

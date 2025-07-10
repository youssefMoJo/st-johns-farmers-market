import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import playingMusic from "../assets/lottie-files/playingMusic.lottie";

const BecomeBusker: React.FC = () => {
  return (
    <div>
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
              Interested in performing at the St. John’s Community Market?
              Whether you're a musician, performer, or entertainer, we offer
              opportunities to share your talent during our vibrant Market
              events. You can also express interest in other events held in our
              facility throughout the year.
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
          <h2 style={{ fontSize: "2rem" }}>🎶 Performance Options</h2>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>
              <span className="bold">Market Café (Indoor Sets):</span> We invite
              one performer or group each Market day to play a set in our Market
              Café. These are typically musical acts. While these performances
              are currently unpaid (we're working on changing that!), performers
              are welcome to pass a hat or collect donations.
            </li>
            <li>
              <span className="bold">Outdoor Busking:</span> From June to
              November, we utilize our outdoor spaces and welcome a variety of
              performance styles. After reviewing your application, we may
              request performance samples or an audition to ensure alignment
              with our Market atmosphere.
            </li>
          </ul>

          <h2 style={{ fontSize: "2rem" }}>📋 Selection Criteria</h2>
          <p>
            Performers are selected based on the quality of their act,
            compatibility with the Market’s vibe, and the potential benefit to
            the artist. For us, a <span className="bold">busker</span> is
            someone who entertains without selling physical products.
          </p>

          <h2 style={{ fontSize: "2rem" }}>🎨 Product-Based Performers</h2>
          <p>
            If you offer products or services for a donation or fee (e.g., face
            painting, balloon art), please reach out directly to our Events
            Manager to coordinate logistics.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:eventsmanager@sjfm.ca">eventsmanager@sjfm.ca</a>
          </p>

          <h2 style={{ fontSize: "2rem" }}>📝 How to Apply</h2>
          <ol style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li className="bold">Fill Out the Application</li>
            <ul>
              <li>
                Submit the Busker Application form available on our website.
                Indicate which type of performance you’re applying for.
              </li>
            </ul>

            <li className="bold">Application Review</li>
            <ul>
              <li>
                Our team will assess your submission. If selected, you may be
                asked to provide performance samples or complete an audition.
              </li>
            </ul>

            <li className="bold">Scheduling & Confirmation</li>
            <ul>
              <li>
                Selected performers will receive confirmation and scheduling
                details. Performance slots are limited and subject to
                availability.
              </li>
            </ul>
          </ol>

          <p>
            <span className="bold">Note:</span> Not all applicants can be
            accommodated immediately. We appreciate your patience and interest
            in performing at the SJFM!
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

export default BecomeBusker;

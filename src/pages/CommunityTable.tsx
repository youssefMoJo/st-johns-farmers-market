import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import communityTable from "../assets/lottie-files/communityTable.lottie";

const CommunityTable: React.FC = () => {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #143C5D 65%, rgb(253, 243, 187) 100%)",
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
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
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
            🌟 Why Offer the Community Table?
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            We believe in supporting the amazing groups doing important work in
            our community. The Community Table offers free space in a busy
            indoor area of the Market, giving organizations the visibility they
            need to grow, share ideas, and build connections.
          </p>

          <h2 style={{ fontSize: "2rem" }}>📌 Who Can Apply?</h2>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>Non-profits and charities</li>
            <li>School teams and clubs</li>
            <li>Community groups and initiatives</li>
            <li>Any organization with a community-focused mission</li>
          </ul>

          <h2 style={{ fontSize: "2rem" }}>📝 How It Works</h2>
          <ol style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li className="bold">Reserve Your Date</li>
            <ul>
              <li>
                Choose a Saturday Market date that works for your group using
                our online request form.
              </li>
            </ul>
            <li className="bold">Set Up at the Market</li>
            <ul>
              <li>
                We'll provide a high-traffic indoor table free of charge. Bring
                your own signage, brochures, and friendly faces!
              </li>
            </ul>
            <li className="bold">Connect with the Community</li>
            <ul>
              <li>
                Share your story, promote your cause, recruit volunteers, or
                fundraise—it's your space to use creatively.
              </li>
            </ul>
          </ol>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <span className="bold">Interested?</span> Learn more and request
            your dates here:{" "}
            <a
              href="https://forms.gle/VCoPqqmSDRJ3UgzM9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Your Community Table
            </a>
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

export default CommunityTable;

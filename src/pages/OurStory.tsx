import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import farmersLottie from "../assets/lottie-files/Farmers.lottie";

const OurStory: React.FC = () => {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #1B5A7A 65%, rgb(240, 240, 240) 100%)",
          padding: "4rem 1rem",
          color: "white",
        }}
      >
        <div style={styles.contentWrapper}>
          <div style={styles.textWrapper}>
            <SectionTitle
              parts={[{ text: "📖 Our Story", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              Since our founding, the St. John’s Farmers’ Market has grown into
              a vibrant gathering place for local farmers, artisans, and the
              broader community. Discover our history, our space, and our
              commitment to honoring the land and the people who call it home.
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={farmersLottie}
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
            gap: "2rem",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>🌿 Land Acknowledgement</h2>
          <p style={paragraphStyle}>
            We respectfully acknowledge the land on which we gather as the
            ancestral homelands of the Beothuk, whose culture has been erased
            forever. We also acknowledge the island of Ktaqmkuk (Newfoundland)
            as the unceded, traditional territory of the Beothuk and the
            Mi’kmaq. Labrador is the traditional and ancestral homelands of the
            Innu of Nitassinan, the Inuit of Nunatsiavut, and the Inuit of
            NunatuKavut.
          </p>
          <p style={paragraphStyle}>
            We recognize all First Peoples who were here before us, those who
            live with us now, and the seven generations to come. As First
            Peoples have done since time immemorial, we strive to be responsible
            stewards of the land and to respect the cultures, ceremonies, and
            traditions of all who call it home.
          </p>
          <p style={paragraphStyle}>
            At the St. John’s Farmers’ Market, we acknowledge that all we do
            here is built on the foundation of those who came before us. We grow
            our crops and craft our goods on land that was not originally ours.
            We strive to create an open and welcoming environment for everyone,
            including those who are part of the Two-Spirit community. As we open
            our hearts and minds to the past, we commit ourselves to working in
            a spirit of truth and reconciliation to build a better future for
            all.
          </p>

          <h2 style={{ fontSize: "2rem" }}>🏛️ Our Space</h2>
          <p style={paragraphStyle}>
            Since 2018, we have called the former Metrobus depot on Freshwater
            Road our home. At 14,000 sq ft—seven times the size of our previous
            location—our facility offers a welcoming, accessible, and
            community-focused space for everyone.
          </p>
          <p style={paragraphStyle}>
            The larger space allows us to welcome more vendors and provides
            customers room to socialize, enjoy delicious local food, shop for
            fresh produce, and discover unique local art. It's much more than
            our old market could offer—without losing any of the charm and
            energy that made it special.
          </p>
          <p style={paragraphStyle}>
            Our vision is to create a true community space, complete with a
            community kitchen, public square, playground, and other amenities.
            We see this as an essential gathering place in a city that lacks
            welcoming public spaces.
          </p>

          <h2 style={{ fontSize: "2rem" }}>📜 Our History</h2>
          <p style={paragraphStyle}>
            The St. John’s Farmers’ Market began in Fall 2007 with a single
            local organic farmer renting the Masonic Temple in downtown St.
            John’s to sell surplus crops. She invited other vendors, and the
            event was a huge success, attracting over 500 customers with minimal
            advertising. That initial spark led to more markets that same fall,
            and a dedicated group of community members formed a Steering
            Committee in January 2008 to make a regular market a reality.
          </p>
          <p style={paragraphStyle}>
            Throughout 2008, this volunteer committee organized weekly markets
            every Saturday from July to November. Later that year, they
            appointed a Consulting Team to help develop a sustainable plan,
            which recommended adopting a Co-op structure to support both
            economic and social goals.
          </p>
          <p style={paragraphStyle}>
            In 2009, the Steering Committee formally incorporated as the Friends
            of the St. John’s Farmers’ Market, hired its first Market Manager,
            and continued to manage the market through 2010. During this time,
            they developed the St. John’s Farmers’ Market Co-op, consulting the
            community, researching best practices, and drafting by-laws and a
            business plan.
          </p>
          <p style={paragraphStyle}>
            The Co-op was officially formed in November 2010 with 25 founding
            members and held its first AGM in May 2011. Since then, the St.
            John’s Farmers’ Market Co-op has managed the market, while the
            Friends of the St. John’s Farmers’ Market continue to support its
            mission.
          </p>
        </div>
      </div>
    </div>
  );
};

const paragraphStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  marginBottom: "1rem",
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

export default OurStory;

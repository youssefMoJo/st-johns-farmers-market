import SectionTitle from "../SectionTitle";
import Image from "react-bootstrap/Image";
import reviewsBG from "../../assets/reviews-sec-bg.png";
import ReviewsGrid from "./ReviewsGrid";
import rightArrowIcon from "../../assets/Icons/white-right-arrow-icon.png";
import { EXTERNAL_LINKS } from "../../constants/externalLinks";

export default function Reviews() {
  return (
    <div style={{ position: "relative", textAlign: "center", padding: "20px" }}>
      {/* Image now in the background */}
      <Image
        src={reviewsBG}
        fluid
        className="w-100"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Make sure the image stays behind the content
        }}
      />

      {/* Content on top of the image */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          parts={[
            { text: "WHAT", color: "white" },
            { text: "PEOPLE", color: "#47C3F7" },
            { text: "SAY", color: "white" },
          ]}
        />
        <ReviewsGrid />
        {/* Explore All Events Button */}
        <a
          href={EXTERNAL_LINKS.googleReviews}
          rel="noreferrer"
          target="_blank"
          style={{
            color: "white",
            padding: "1px 1px",
            textDecoration: "none",
            display: "inline-flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bolder",
          }}
        >
          🔍 See All Reviews
          <img src={rightArrowIcon} alt="rightArrow" width={22} height={22} />
        </a>
      </div>
    </div>
  );
}

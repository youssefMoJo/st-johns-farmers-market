import SectionTitle from "../SectionTitle";
import Image from "react-bootstrap/Image";
import reviewsBG from "../../assets/reviews-sec-bg.png";
import ReviewsGrid from "./ReviewsGrid";
import rightArrowIcon from "../../assets/Icons/white-right-arrow-icon.png";

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
          href="https://www.google.com/search?sca_esv=6f5fcc8f272f4316&rlz=1C5CHFA_enCA1108CA1108&sxsrf=AHTn8zoHQc1tQs2On_VChgOAys5MZX5EZQ:1744480935945&q=st.+john%27s+farmers%27+market+reviews&uds=ABqPDvzTxvAGQeEyjtI1P_G63vP1BoIJePuPz8QqTBnrUQ7_a9DKN3fuCvji3ALDTeGshirT7fkAP2NSE1ndQxIHQm5sJ4eOSQtKSoXNrk8mM6zrrDJ_oAg6755B6fdJFzP_SG8q6QQP_OfMR1Cyw-iXk4yfDdSjI2vuBtfW37OKmxJMMni_3P2eBjp1noZo0AsHcv11Hj9TfgWswz0pkQq_UYLkF1K1CpVt4HjYV3nJ2ysW1VTHXMqdGkIcYoXXpZ2tehfOmuJeTV-yPkcX3v3-FhEjUGx4NkQwWLPosfFbytISzcVSR68P_LV9pX65kwIlpwkOOnFM40piJnR_TU1lNnWAeQfUq-6CNtFimlQr0n9QfIhuewArUasKP4GwLAB3pYhZ12vp-uYz7WZfh3Mm2HXCIFN7Zv3bjPivXSNo-ccS5vI21072HTHhgKkppb0_99RgQCdnE3AIDYbq-aEWhS918HukPIUP8QAfq18LljVrMmjh0w4&si=APYL9bvoDGWmsM6h2lfKzIb8LfQg_oNQyUOQgna9TyfQHAoqUvBbmEwfAlBLObmizneYy1wDn65K5z7h872_hzLAKINevcbDAneRqg6MxQV23IdLRFOpsgRiMtYoZvZ-SVI3n28LLGQeffzNY-neIhWexuUfHK02Qg%3D%3D&sa=X&ved=2ahUKEwjtjYT0idOMAxVJhIkEHdCGMccQk8gLegQIHhAB&ictx=1&stq=1&cs=1&lei=p6r6Z62eOcmIptQP0I3GuQw"
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

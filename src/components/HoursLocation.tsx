import rightArrow from "../assets/arrow-right.png";
import locationIcon from "../assets/location-icon.png";

export default function HoursLocation() {
  return (
    <div
      className="hours-location"
      style={{
        backgroundColor: "#AC1C21",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
      }}
    >
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "80%",
          maxWidth: "1000px",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section - Hours of Operation */}
        <div
          className="section text-white"
          style={{
            flexGrow: 1,
            alignItems: "flex-start",
            marginBottom: "20px",
            flexBasis: "48%",
          }}
        >
          <h3
            className="title fw-bold"
            style={{ fontFamily: "Caveat Brush", marginBottom: "15px" }}
          >
            📅 Hours of Operation
          </h3>
          <div className="info">
            <p className="fs-5" style={{ marginBottom: "5px" }}>
              🕘 Saturdays (Year-Round): 9:00 AM – 4:00 PM
            </p>
            <p className="fs-5">
              🌟 Select Sundays: Check our social media for updates!
            </p>
          </div>
        </div>

        {/* Right Section - Location */}
        <div
          className="section text-white"
          style={{
            flexGrow: 1,
            alignItems: "flex-start",
            flexBasis: "48%",
          }}
        >
          <h3 className="title fw-bold" style={{ marginBottom: "15px" }}>
            🗺️ Location
          </h3>
          <div className="info">
            <p className="fs-5" style={{ marginBottom: "5px" }}>
              245 Freshwater Rd St. John's, NL A1B 1B3
            </p>

            <a
              href="https://www.google.com/maps?q=245+Freshwater+Rd+St.+John's,+NL+A1B+1B3"
              target="_blank"
              style={{
                color: "white",
                padding: "1px 1px",
                textDecoration: "none",
                display: "inline-flex",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.25rem",
              }}
            >
              <img
                src={locationIcon}
                alt="locationIcon"
                width={22}
                height={22}
              />
              Get Directions
              <img src={rightArrow} alt="rightArrow" width={22} height={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

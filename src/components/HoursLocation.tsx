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
          style={
            {
              // flexGrow: 1,
              // alignItems: "flex-start",
              // marginBottom: "20px",
              // flexBasis: "48%",
            }
          }
        >
          <h3
            className="title caveat-brush-regular"
            style={{ marginBottom: "15px" }}
          >
            📅 Hours of Operation
          </h3>

          <div className="info">
            <p style={{ marginBottom: "5px" }}>
              🕘{" "}
              <span style={{ fontWeight: "bold" }}>
                Saturdays (Year-Round):{" "}
              </span>{" "}
              9:00 AM – 4:00 PM
            </p>
            <p>
              🌟 <span style={{ fontWeight: "bold" }}>Select Sundays: </span>
              Check our social media for updates!
            </p>
          </div>
        </div>

        {/* Right Section - Location */}
        <div
          className="section text-white"
          style={
            {
              // flexGrow: 1,
              // alignItems: "flex-start",
              // flexBasis: "48%",
            }
          }
        >
          <h3
            className="title caveat-brush-regular"
            style={{ marginBottom: "15px" }}
          >
            🗺️ Location
          </h3>
          <div className="info">
            <p
              style={{
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              245 Freshwater Rd St. John's, NL A1B 1B3
            </p>

            <a
              href="https://www.google.com/maps?q=245+Freshwater+Rd+St.+John's,+NL+A1B+1B3"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
                padding: "1px 1px",
                textDecoration: "none",
                display: "inline-flex",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
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

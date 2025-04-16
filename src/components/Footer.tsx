import HoursLocation from "./HoursLocation";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1f1d1d", color: "white" }}>
      <div
        style={{
          maxWidth: "1200px", // you can adjust this
          margin: "0 auto",
        }}
      >
        {/* Middle: HoursLocation + Newsletter */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "40px",
          }}
        >
          {/* Left Side */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <HoursLocation bgColor={"#1f1d1d"} />
          </div>

          {/* Right Side - Newsletter */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2
              className="caveat-brush-regular"
              style={{ fontSize: "2rem", marginBottom: "10px" }}
            >
              NEWSLETTER
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Subscribe to our newsletter to receive news and updates.
            </p>
            <form
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Value"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Value"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#2c2a2b",
                  color: "white",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "0.9rem",
            opacity: 0.8,
          }}
        >
          St. John’s Farmers’ Market © All rights reserved
          <br />
          Developed by Youssef Mohamed
        </div>
      </div>
    </footer>
  );
}

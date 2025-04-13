import SectionTitle from "./SectionTitle";
import CustomButton from "./ui/CustomButton";

export default function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <SectionTitle
          parts={[
            { text: "Welcome to", color: "#47C3F7" },
            { text: "St. John’s Farmers’ Market", color: "#143C5D" },
          ]}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <p
            style={{
              width: "100%",
              color: "#131111",
              fontFamily: "Yaldevi Colombo",
              fontSize: "17px",
              margin: 0,
            }}
          >
            The St. John’s Farmers’ Market is home to a diverse community of
            local vendors. We invite you to explore and connect with the
            passionate makers, bakers, and growers who bring fresh, handcrafted,
            and locally sourced products to Newfoundland.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <CustomButton href="/meet-our-vendors">
              View Our Vendors
            </CustomButton>
            <CustomButton variant="outline" href="/our-story">
              Read Our Story
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

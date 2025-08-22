import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import rentalSpacesLottie from "../assets/lottie-files/rentalSpaces.lottie";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import mainMarketHallImg from "../assets/mainMarketHallImg.jpg";
import workshopRoomImg from "../assets/workshopRoomImg.jpg";
import commercialKitchenImg from "../assets/commercialKitchenImg.jpg";

interface Space {
  name: string;
  image: string;
  description: string;
  capacity: string;
  price: string;
  link: string;
}

const RentalSpaces: React.FC = () => {
  const spaces: Space[] = [
    {
      name: "Main Market Hall",
      image: mainMarketHallImg,
      description:
        "A spacious, vibrant venue ideal for large markets, exhibitions, and community events.",
      capacity: "Up to 300 people",
      price: "Starting at $500/day",
      link: "/rental-spaces/main-market-hall",
    },
    {
      name: "Workshop Room",
      image: workshopRoomImg,
      description:
        "Perfect for classes, meetings, and small gatherings in a comfortable setting.",
      capacity: "Up to 30 people",
      price: "Starting at $100/half-day",
      link: "/rental-spaces/workshop-room",
    },
    {
      name: "Commercial Kitchen",
      image: commercialKitchenImg,
      description:
        "A fully equipped kitchen for culinary workshops, catering, or food prep.",
      capacity: "Varies by activity",
      price: "Starting at $25/hour",
      link: "/rental-spaces/commercial-kitchen",
    },
  ];

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
              parts={[{ text: "🏢 Rental Spaces", color: "white" }]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              Our rental spaces provide a versatile and welcoming setting for
              markets, events, workshops, and community gatherings. From small
              meetings to large celebrations, our accessible, well-equipped
              facility offers flexible layouts, modern amenities, and a vibrant
              atmosphere—perfect for bringing your ideas to life.
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={rentalSpacesLottie}
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
      <div style={styles.cardsWrapper}>
        {spaces.map((space) => (
          <div key={space.name} style={styles.card}>
            <Image
              src={space.image}
              alt={space.name}
              style={styles.image}
              fluid
            />
            <div style={styles.cardContent}>
              <h3>{space.name}</h3>
              <p>{space.description}</p>
              <Link to={space.link} style={styles.button}>
                View Details
              </Link>
            </div>
          </div>
        ))}
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

  cardsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "0 1rem",
  } as React.CSSProperties,
  card: {
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  } as React.CSSProperties,
  cardContent: {
    padding: "1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  } as React.CSSProperties,
  button: {
    marginTop: "auto",
    display: "inline-block",
    background: "#1B5A7A",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "center",
    transition: "background 0.3s",
  } as React.CSSProperties,
};

export default RentalSpaces;

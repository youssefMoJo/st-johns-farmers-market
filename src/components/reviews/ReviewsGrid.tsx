import { Row } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import reviewsData from "../../data/reviews.json";

function getRandomReviews(reviews: typeof reviewsData, count: number) {
  // Shuffle the reviews array
  const shuffled = [...reviews].sort(() => 0.5 - Math.random());
  // Return the first 'count' items
  return shuffled.slice(0, count);
}

export default function ReviewsGrid() {
  const randomReviews = getRandomReviews(reviewsData, 3);

  return (
    <Row className="g-4 justify-content-center text-center mb-3">
      {randomReviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </Row>
  );
}

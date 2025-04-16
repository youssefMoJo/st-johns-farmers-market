import { useEffect, useRef, useState } from "react";
import { Card, Col } from "react-bootstrap";
import lottie, { AnimationItem } from "lottie-web";
import reviewStars from "../../assets/lottie-files/reviewStars.json";
import googleIcon from "../../assets/Icons/google-icon.png";

type EventProps = {
  review: {
    reviewerName: string;
    reviewText: string;
    date: string;
  };
};

export default function EventCard({ review }: EventProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationContainerRef = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection observer
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Load and control animation
  useEffect(() => {
    if (
      isInView &&
      animationContainerRef.current &&
      !animationInstance.current
    ) {
      const anim = lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: reviewStars,
      });

      animationInstance.current = anim;

      anim.addEventListener("complete", () => {
        const totalFrames = anim.getDuration(true);
        anim.playSegments([80, 140], true);
      });
    }
  }, [isInView]);

  return (
    <Col xs={12} sm={6} md={3} className="mb-2 mb-md-0">
      <Card
        className="h-100"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: "1px solid #D9D9D9",
          maxWidth: "350px",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <div
            ref={containerRef}
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              marginBottom: "10px",
              overflow: "hidden",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              ref={animationContainerRef}
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            <div
              style={{
                backgroundColor: "#17A0DB",
                color: "white",
                padding: "5px 10px",
                position: "absolute",
                top: "10px",
                right: "10px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "13px",
                zIndex: 1,
              }}
            >
              {review.date}
            </div>
          </div>

          <div className="d-flex align-items-center">
            <img
              src={googleIcon}
              alt="Review Source"
              width={20}
              height={20}
              className="me-1"
            />
            <span className="fw-bold me-2">5/5</span>
            <span className="text-muted me-2" style={{ fontSize: "30px" }}>
              ·
            </span>
            <span className="fw-bold me-2">{review.reviewerName}</span>
          </div>

          <div
            style={{
              textAlign: "left",
              marginBottom: "10px",
              height: "140px",
              overflowY: "auto",
              paddingRight: "5px",
              fontSize: "14px",
            }}
          >
            <div>{review.reviewText}</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

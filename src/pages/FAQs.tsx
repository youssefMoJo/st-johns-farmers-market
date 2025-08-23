import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import faqLottie from "../assets/lottie-files/faq.lottie";
import faqs from "../data/faqs.json";

type FAQ = {
  question: string;
  answer: string;
  tags: string[];
  link?: string;
};

const allTags = ["All", "Main Market Hall", "Kitchen", "Community Room"];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs =
    selectedTag === "All"
      ? faqs
      : (faqs as FAQ[]).filter((faq) =>
          faq.tags.some(
            (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
          )
        );

  return (
    <div>
      {/* Hero */}
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
              parts={[
                { text: "❓ Frequently Asked Questions", color: "white" },
              ]}
              align="left"
            />
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
              Got questions about the Market? We've got answers! Browse below to
              find everything you need to know.
            </p>
          </div>

          <div style={styles.lottieWrapper}>
            <DotLottieReact
              src={faqLottie}
              loop
              autoplay
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div style={{ background: "#f8f8f8", padding: "1rem" }}>
        <div
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                margin: "0.5rem",
                padding: "0.5rem 1rem",
                background: selectedTag === tag ? "#12646C" : "white",
                color: selectedTag === tag ? "white" : "#12646C",
                border: "2px solid #12646C",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div style={{ background: "white", padding: "2rem 1rem", color: "#333" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {filteredFaqs.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
              No FAQs found for "{selectedTag}". Please choose another category.
            </p>
          ) : (
            filteredFaqs.map((item, index) => (
              <div
                key={index}
                style={{
                  ...faqStyles.card,
                  cursor: openIndex === index ? "default" : "pointer",
                  userSelect: openIndex === index ? "text" : "none",
                }}
                onClick={() => openIndex !== index && toggleQuestion(index)}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.background = "#f0f0f0";
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.background = "#f9f9f9";
                  }
                }}
              >
                <div style={faqStyles.header}>
                  <h3 style={faqStyles.question}>
                    {item.question}
                    <span style={faqStyles.toggle}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </h3>
                </div>
                {openIndex === index && (
                  <div style={faqStyles.body}>
                    <p style={faqStyles.answer}>
                      {item.answer}
                      {item.link && (
                        <>
                          {" "}
                          <a
                            href={item.link}
                            style={{
                              color: "#12646C",
                              textDecoration: "underline",
                            }}
                          >
                            Learn more
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const faqStyles = {
  card: {
    borderRadius: "8px",
    background: "#f9f9f9",
    marginBottom: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    cursor: "pointer",
    overflow: "hidden",
    transition: "background 0.3s",
  } as React.CSSProperties,
  header: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,
  question: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: 0,
    userSelect: "none",
  } as React.CSSProperties,
  toggle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginLeft: "1rem",
  } as React.CSSProperties,
  body: {
    padding: "1rem",
    background: "#fff",
    borderTop: "1px solid #eee",
    cursor: "text",
  } as React.CSSProperties,
  answer: {
    fontSize: "1.1rem",
    margin: 0,
    lineHeight: "1.6",
    whiteSpace: "pre-line",
  } as React.CSSProperties,
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

export default FAQs;

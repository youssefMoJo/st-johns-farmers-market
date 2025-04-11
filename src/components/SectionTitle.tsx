type SectionTitleProps = {
  parts: {
    text: string;
    color?: string;
  }[];
  className?: string;
  align?: "left" | "center" | "right";
};

export default function SectionTitle({
  parts,
  className = "title caveat-brush-regular",
  align = "center",
}: SectionTitleProps) {
  return (
    <h1 className={className} style={{ textAlign: align }}>
      {parts.map((part, idx) => (
        <span
          key={idx}
          style={{ color: part.color || "inherit", marginRight: "5px" }}
        >
          {part.text}
        </span>
      ))}
    </h1>
  );
}

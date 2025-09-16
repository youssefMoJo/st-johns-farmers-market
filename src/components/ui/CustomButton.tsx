import styles from "./CustomButton.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

type CustomButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "solid-alt" | "outline-alt";
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties; // Allow custom inline styles
};

export default function CustomButton({
  children,
  variant = "solid",
  href,
  onClick,
  style,
}: CustomButtonProps) {
  const btnClass = classNames({
    [styles.solidButton]: variant === "solid",
    [styles.outlineButton]: variant === "outline",
    [styles.solidAltButton]: variant === "solid-alt",
    [styles.outlineAltButton]: variant === "outline-alt",
  });

  // If href provided, decide between internal route (Link) or external anchor
  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return (
        <Link to={href} className={btnClass} style={style}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={btnClass} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

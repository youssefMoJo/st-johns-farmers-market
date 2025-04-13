import styles from "./CustomButton.module.css";
import classNames from "classnames";

type CustomButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  onClick?: () => void;
};

export default function CustomButton({
  children,
  variant = "solid",
  href,
  onClick,
}: CustomButtonProps) {
  const btnClass = classNames({
    [styles.solidButton]: variant === "solid",
    [styles.outlineButton]: variant === "outline",
  });

  if (href) {
    return (
      <a href={href} className={btnClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

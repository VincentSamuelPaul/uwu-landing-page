import Link from "next/link";
import React from "react";

type ButtonProps = {
  href: string;
  bg?: string; // CSS color for background
  color?: string; // CSS color for text
  text?: React.ReactNode; // optional text to display
  children?: React.ReactNode;
  className?: string;
  target?: "_self" | "_blank";
};

export default function Button({
  href,
  bg = "transparent",
  color = "inherit",
  text,
  children,
  className = "",
  target = "_self",
}: ButtonProps) {
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;
  const style: React.CSSProperties = { backgroundColor: bg, color };

  const combinedClassName = `inline-flex items-center justify-center whitespace-nowrap ${className}`.trim();

  return (
    <Link href={href} target={target} rel={rel} className={combinedClassName} style={style}>
      {text ?? children}
    </Link>
  );
}

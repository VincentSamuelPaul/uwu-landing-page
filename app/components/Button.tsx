import Link from "next/link";
import React from "react";

type ButtonProps = {
  href: string;
  bg?: string; // CSS color for background
  color?: string; // CSS color for text
  text?: string; // optional text to display
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

  return (
    <Link href={href} target={target} rel={rel} className={className} style={style}>
      {text ?? children}
    </Link>
  );
}

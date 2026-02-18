"use client";

import { useMemo, useState, useEffect } from "react";
import "./shooting-stars.css";

type ShootingStarsProps = {
  count?: number;
  local?: boolean;
};

type Star = {
  top: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
};

export default function ShootingStars({
  count = 25,
  local = false,
}: ShootingStarsProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: count }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 7 + Math.random() * 6,
      size: 100 + Math.random() * 200,
    }));
    setStars(generatedStars);
  }, [count]);

  return (
    <div className={`shooting-stars ${local ? "shooting-stars--local" : ""}`}>
      {stars.map((star, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

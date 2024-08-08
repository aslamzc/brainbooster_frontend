"use client";
import { IconStar } from "@tabler/icons-react";
import { useState } from "react";

type Props = {
  size: number;
};

const RatingComponent = ({ size }: Props) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  return (
    <div className="flex items-center gap-3 text-secondaryColor">
      {[1, 2, 3, 4, 5].map((index) => (
        <IconStar
          key={index}
          size={size}
          fill={index <= (hoveredRating || rating) ? "currentColor" : "none"}
          onMouseEnter={() => setHoveredRating(index)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default RatingComponent;

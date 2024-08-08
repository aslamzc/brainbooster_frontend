import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import React from "react";

interface StarRatingProps {
  stringValue: string;
}

const StarRating: React.FC<StarRatingProps> = ({ stringValue }) => {
  const renderRating = (stringValue: string) => {
    const value = parseFloat(stringValue);
    if (isNaN(value) || value < 0 || value > 5) {
      // Handle invalid or out-of-range input
      return null;
    }

    const filledStars = Math.floor(value);
    const hasHalfStar = value % 1 === 0.5;

    return (
      <div className="flex items-center gap-1 text-secondaryColor">
        {[...Array(filledStars)].map((_, index) => (
          <IconStarFilled key={index} />
        ))}
        {hasHalfStar && <IconStarHalfFilled />}
        {[...Array(5 - filledStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <IconStar key={index} />
        ))}
      </div>
    );
  };

  return renderRating(stringValue);
};

export default StarRating;

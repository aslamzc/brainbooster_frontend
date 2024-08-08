import { IconShare } from "@tabler/icons-react";
import React from "react";

const ShareButton: React.FC = () => {
  const handleShare = async (socialMedia: "facebook") => {
    try {
      let shareUrl;
      switch (socialMedia) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href,
          )}`;
          break;
        default:
          throw new Error("Unsupported social media platform");
      }

      window.open(shareUrl, "_blank");
    } catch (error) {
      console.error("Error sharing:", error);
      // Handle errors or fallback to another sharing method
    }
  };

  return (
    <div>
      <button
        className="flex items-center justify-between gap-1"
        onClick={() => handleShare("facebook")}
      >
        <IconShare /> <span>24</span>
      </button>
    </div>
  );
};

export default ShareButton;

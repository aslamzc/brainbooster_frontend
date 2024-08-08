"use client";
import { useState } from "react";

const FriendButton = () => {
  const [friend, setFriend] = useState(false);

  return (
    <button
      onClick={() => setFriend(!friend)}
      className={`h6 theme-transition-3 h-fit shrink-0 rounded-32px border border-neutral-40  px-6 py-3 font-semibold hover:bg-white ${
        friend ? "bg-white" : "bg-primaryColor"
      }`}
    >
      {friend ? "Friend" : "Unfriend"}
    </button>
  );
};

export default FriendButton;

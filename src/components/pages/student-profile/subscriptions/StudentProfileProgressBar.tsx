"use client";
import { useEffect, useRef, useState } from "react";

const StudentProfileProgressBar = ({ width }: { width: number }) => {
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const progressBarElement = progressBarRef.current;

    if (!progressBarElement) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          progressBarElement.style.width = `${width}%`;
          observer.disconnect(); // Disconnect the observer after the first intersection
        }
      });
    });

    observer.observe(progressBarElement);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [width]);

  const progressBarWidth = isVisible ? `${width}%` : "0%";

  return (
    <div className="w-full">
      <div className="progress-bar-container h-2 w-full rounded-md bg-neutral-30">
        <div
          ref={progressBarRef}
          className="progress-bar theme-transition-4 h-2 rounded-md bg-secondaryColor"
          style={{
            width: progressBarWidth,
            transition: "width 2s ease-in-out",
          }}
          role="progressbar"
          aria-valuenow={width}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default StudentProfileProgressBar;

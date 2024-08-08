"use client";
import ReactCounterUp from "@/components/sharedComponents/Counter";
import { IconStarFilled } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const TabProgressBar = ({
  starNo,
  width,
}: {
  starNo: number;
  width: number;
}) => {
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
    <div className="flex w-full items-center gap-5">
      <div className="flex items-center gap-1">
        <div className="text-secondaryColor">
          <IconStarFilled size={12} />
        </div>{" "}
        <span className="text-mText">{starNo}</span>
      </div>
      <div className="w-full">
        <div className="progress-bar-container h-3 w-full rounded-md bg-neutral-30">
          <div
            ref={progressBarRef}
            className="progress-bar theme-transition-4 h-3 rounded-md bg-secondaryColor"
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
      <p className="text-mText">
        <ReactCounterUp end={width} />%
      </p>
    </div>
  );
};

export default TabProgressBar;

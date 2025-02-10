"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  fade = false,
}: {
  items: ReactNode[] | String[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  fade?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const hasCloned = useRef(false); // Prevent multiple cloning
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!hasCloned.current) {
      addAnimation();
      hasCloned.current = true;
    }
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("data-cloned", "true");
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      updateDirection();
      updateSpeed();
      setStart(true);
    }
  }

  const updateDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const updateSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 overflow-hidden",
        fade &&
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </ul>
    </div>
  );
};

"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ScaledOnCenterDiv = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [isCentered, setIsCentered] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
      },
      { threshold: 0 } // Adjust this to trigger scaling earlier or later
    );

    if (divRef.current) observer.observe(divRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        "transition-transform duration-300 ease-in-out",
        isCentered ? "scale-110" : "scale-100",
        className
      )}
    >
      {children}
    </div>
  );
};

"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
  sizeOffset?: number;
};

const Parallax = ({ children, className, offset = 0.1 }: ParallaxProps) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setOffsetY(window.scrollY);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn("absolute m-0 top-0 bottom-0", className)}
      style={{
        position: "relative",
        top: `${offsetY * offset}px`,
        transform: `scale(${(offsetY * offset) / 300})`,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;

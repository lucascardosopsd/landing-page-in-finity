"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
  sizeOffset?: number;
  parentRef: React.RefObject<HTMLDivElement>;
};

const Parallax = ({
  children,
  className,
  offset = 0.1,
  sizeOffset,
  parentRef,
}: ParallaxProps) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (parentRef.current) {
      const parentTop = parentRef.current.getBoundingClientRect().top;
      setOffsetY(-parentTop);
    }
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
        ...(sizeOffset && {
          transform: `scale(${1 + (offsetY * sizeOffset) / 3000})`,
        }),
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;

"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import CursorBlinker from "./CursorBlinker";

type TextTypingProps = {
  text: string;
};

export default function TextTyping({ text }: TextTypingProps) {
  const [scope, animate] = useAnimate();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0% -40% 0%" });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { width: ["0%", "100%"] },
        { duration: 1, ease: "easeInOut" }
      );
    }
  }, [isInView]);

  return (
    <span ref={ref}>
      <motion.span
        ref={scope}
        style={{
          overflow: "hidden",
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </motion.span>
      <div className="absolute -right-1 top-0 bottom-0">
        <CursorBlinker />
      </div>
    </span>
  );
}

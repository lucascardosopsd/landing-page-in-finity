"use client";

import React from "react";

interface HighlightWordsProps {
  children: string;
  words: string[];
  globalClassName?: string;
  highlightClassName?: string;
}

export const HighlightWords: React.FC<HighlightWordsProps> = ({
  children,
  words,
  globalClassName,
  highlightClassName,
}) => {
  if (!children) return null;

  const escapedWords = words.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedWords.join("|")})\\b`, "g");

  const parts = children.split(regex);

  return (
    <p className={globalClassName}>
      {parts.map((part, index) =>
        words.includes(part) ? (
          <span key={index} className={highlightClassName}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
};

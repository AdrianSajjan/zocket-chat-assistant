import React, { useState, useEffect } from "react";

interface TypewriterProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

export function Typewriter({ text, delay = 0, speed = 20, onComplete, ...props }: TypewriterProps) {
  const [animated, setAnimated] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ms = index === 0 ? delay + speed : speed;
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setAnimated((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, ms);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      onComplete?.();
    }
  }, [index, text, speed, delay]);

  return <span {...props}>{animated}</span>;
}

import React, { Fragment, useCallback, useEffect, useState } from "react";

export interface TypewriterData {
  type?: string;
  styles?: string;
  text?: string;
  children?: TypewriterData[];
}

export interface TextFadeProps {
  text: string;
  stagger?: number;
  delay?: number;
}

export interface TypewriterProps {
  data: TypewriterData;
}

export function RecursiveDisplay({ data }: TypewriterProps) {
  const renderElement = useCallback(() => {
    const { type, styles: style, text, children } = data;
    if (text) {
      return React.createElement(type || "span", { style }, text);
    }
    if (children) {
      const ChildElements = children.map((child, idx) => <RecursiveDisplay key={idx} data={child} />);
      return React.createElement(type || "div", { style }, ChildElements);
    }
    return null;
  }, [data]);

  return <Fragment>{renderElement()}</Fragment>;
}

export function TextFade({ text, delay = 0, stagger = 100 }: TextFadeProps) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const words = text.split(" ");
    const timers: NodeJS.Timeout[] = [];

    const timer = setTimeout(() => {
      words.forEach((word, index) => {
        timers.push(
          setTimeout(() => {
            setWords((state) => [...state, word]);
          }, stagger * index)
        );
      });
    }, delay);

    return () => {
      clearTimeout(timer);
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [text, stagger, delay]);

  return (
    <Fragment>
      {words.map((word, index) => (
        <span key={String([word, index])} className="animate-in fade-in">
          {word}&nbsp;
        </span>
      ))}
    </Fragment>
  );
}

export function Typewriter({ data }: TypewriterProps) {
  return <RecursiveDisplay data={data} />;
}

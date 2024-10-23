import React, { Fragment, useCallback, useState } from "react";

//
export interface TypewriterData {
  type?: string;
  styles?: string;
  text?: string;
  children?: TypewriterData[];
}

interface TypewriterProps {
  data: TypewriterData;
}

const RecursiveDisplay: React.FC<{ data: TypewriterData }> = ({ data }) => {
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
};

export function Typewriter({ data }: TypewriterProps) {
  const [isComplete, setIsComplete] = useState<boolean>(false); // eslint-disable-line

  return <RecursiveDisplay data={data} />;
}

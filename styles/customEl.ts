import styled from "styled-components";

type StringAndArray = string | string[];

interface DivProps {
  display?: StringAndArray;
  flexDirection?: StringAndArray;
  margin?: StringAndArray;
  bg?: string | string[];
  height?: string | string[];
  width?: string | string[];
  breakpoints?: any[];
  breakpointLengthType?: string;
}

const styleKeys = {
  display: "display",
  flexDirection: "flex-direction",
  margin: "margin",
  bg: "background",
  height: "height",
  width: "width",
};

const invalidKeys = [
  "className",
  "theme",
  "breakpoints",
  "breakpointLengthType",
];

function createDefaultStyle(props: DivProps) {
  let style = "";

  for (const key in props) {
    if (invalidKeys.includes(key)) continue;

    const property = styleKeys[key];
    const value = props[key];

    const appendStyle = (value: string) =>
      (style += `${property}: ${value};\n`);

    if (Array.isArray(value)) {
      appendStyle(value[0]);
    } else {
      appendStyle(value);
    }
  }

  return style;
}

function createMediaQueries(props: DivProps) {
  const hasBreakpointDefault = props.breakpoints[0] === "default";
  let style = "";

  if (!hasBreakpointDefault) return;

  props.breakpoints.forEach((breakpoint, index: number) => {
    if (breakpoint === "default" && index === 0) return;

    style += `@media (max-width: ${breakpoint}${
      props.breakpointLengthType || "px"
    }) {\n`;

    for (const key in props) {
      if (invalidKeys.includes(key)) continue;
      const property = styleKeys[key];
      const value = props[key];

      if (Array.isArray(value) && value[index] !== undefined) {
        style += `  ${property}: ${value[index]};\n`;
      }
    }

    style += "}\n";
  });

  return style;
}

export const Div = styled.div<DivProps>`
  ${(props) => {
    const defaultStyle = createDefaultStyle(props);
    const mediaQueryStyle = props?.breakpoints ? createMediaQueries(props) : "";

    return defaultStyle + mediaQueryStyle;
  }}
`;

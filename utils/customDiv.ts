import styled from "styled-components";

const defaultBreakpoints = "auto, 960px";
const defaultBreakpointType = "max-width";
const defaultSeparator = ",";
const ignoreValues = ["---", "null"];

interface ElementProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  flexFlow?: string;
  flexWrap?: string;
  rowGap?: string;
  columnGap?: string;
  gap?: string;
  order?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  flex?: string;
  justifySelf?: string;
  alignSelf?: string;
  gridtc?: string;
  gridtw?: string;
  gridc?: string;
  gridr?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  my?: string;
  mx?: string;
  m?: string;
  margin?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  py?: string;
  px?: string;
  p?: string;
  padding?: string;
  bg?: string;
  color?: string;
  fontSize?: string;
  fs?: string;
  lineHeight?: string;
  lh?: string;
  fontFamily?: string;
  fontWeight?: string;
  textAlign?: string;
  textOverflow?: string;
  height?: string;
  minHeight?: string;
  width?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  aspectRatio?: string;
  opacity?: string;
  borderRadius?: string;
  border?: string;
  overflow?: string;
  position?: string;
  inset?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  bps?: string;
  bpType?: "min-width" | "max-width";
  stringSeparator?: string;
}

const styleKeys = {
  display: "display",
  flexDirection: "flex-direction",
  justifyContent: "justify-content",
  alignItems: "align-items",
  alignContent: "align-content",
  flexFlow: "flex-flow",
  flexWrap: "flex-wrap",
  gap: "gap",
  rowGap: "row-gap",
  columnGap: "column-gap",
  order: "order",
  flexGrow: "flex-grow",
  flexShrink: "flex-shrink",
  flexBasis: "flex-basis",
  flex: "flex",
  justifySelf: "justify-self",
  alignSelf: "align-self",
  gridtc: "grid-template-columns",
  gridtr: "grid-template-rows",
  gridc: "grid-column",
  gridr: "grid-row",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
  mx: ["margin-left", "margin-right"],
  my: ["margin-top", "margin-bottom"],
  m: "margin",
  margin: "margin",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
  px: ["padding-left", "padding-right"],
  py: ["padding-top", "padding-bottom"],
  p: "padding",
  padding: "padding",
  bg: "background",
  color: "color",
  fontSize: "font-size",
  fs: "font-size",
  lineHeight: "line-height",
  lh: "line-height",
  fontFamily: "font-family",
  fontWeight: "font-weight",
  textAlign: "text-align",
  textOverflow: "text-overflow",
  height: "height",
  minHeight: "min-height",
  width: "width",
  maxHeight: "max-height",
  minWidth: "min-width",
  maxWidth: "max-width",
  aspectRatio: "aspect-ratio",
  opacity: "opacity",
  borderRadius: "border-radius",
  border: "border",
  overflow: "overflow",
  position: "position",
  inset: "inset",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
} as const;

function splitBreakpoints(separator: string, string: string) {
  return string?.split(separator).map((bp) => bp.trim());
}

function getCSSDeclaration(props: ElementProps, key: string, index?: number) {
  const separator = props?.stringSeparator || defaultSeparator;
  const property: string = styleKeys[key];
  const value: string = props[key].split(separator)[index || 0]?.trim();
  if (!value || ignoreValues.includes(value)) return "";

  if (["mx", "my", "px", "py"].includes(key)) {
    const [sideA, sideB] = styleKeys[key];
    return `  ${sideA}: ${value};\n${sideB}: ${value};\n`;
  }

  return `  ${property}: ${value};\n`;
}

function createDefaultStyle(props: ElementProps) {
  let style = "";

  for (const key in props) {
    if (styleKeys.hasOwnProperty(key)) {
      style += getCSSDeclaration(props, key);
    }
  }

  return style;
}

function createMediaQueries(props: ElementProps) {
  if (!props?.bps && !defaultBreakpoints) return "";
  const separator = props?.stringSeparator || defaultSeparator;
  const breakpoints =
    splitBreakpoints(separator, props?.bps) ||
    splitBreakpoints(separator, defaultBreakpoints);
  const breakpointType = props?.bpType || defaultBreakpointType;
  let mediaquery = "";

  breakpoints.forEach((breakpoint, index) => {
    if (index === 0) return "";
    let declarations = "";

    for (const key in props) {
      if (styleKeys.hasOwnProperty(key)) {
        declarations += getCSSDeclaration(props, key, index);
      }
    }

    if (declarations) {
      mediaquery += `@media (${breakpointType}: ${breakpoint}) {\n${declarations}}\n`;
    }
  });

  return mediaquery;
}

const Div = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !styleKeys.hasOwnProperty(prop) && defaultValidatorFn(prop),
})<ElementProps>`
  ${(props) => {
    const defaultStyle = createDefaultStyle(props);
    const mediaQueryStyle = createMediaQueries(props);

    return defaultStyle + mediaQueryStyle;
  }}
`;

export default Div;

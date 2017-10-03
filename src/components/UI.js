import glamorous from "glamorous";

export const scale = [4, 8, 16, 24, 32, 40, 48, 64, 128];
export const colours = {
  red: "#EA282E",
  orange: "#EF6946",
  yellow: "#FDCF1A",
  green: "#4FBA49",
  blue: "#01A7EE"
};
export const H1 = glamorous.h1({
  marginTop: 0,
  marginBottom: scale[6],
  fontSize: 80
});
export const Label = glamorous.label({
  display: "block",
  marginBottom: scale[1]
});
export const Main = glamorous.div({
  margin: "0 auto",
  textAlign: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
});
export const Pre = glamorous.pre({
  textAlign: "left",
  backgroundColor: "#eee",
  padding: scale[1],
  display: "inline-block",
  margin: "0 auto"
});
export const Input = glamorous.input({
  border: "1px solid #333",
  paddingLeft: scale[2],
  paddingRight: scale[2],
  paddingTop: scale[1],
  paddingBottom: scale[1],
  marginBottom: scale[2],
  fontSize: 32
});
export const Button = glamorous.button({
  border: "none",
  padding: scale[1],
  background: colours.yellow,
  color: colours.red,
  fontFamily: `"Pixels", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  fontSize: 16,
  cursor: "pointer",
  ":hover": {
    background: colours.red,
    color: colours.yellow
  }
});
export const Icon = glamorous.img({
  width: 128
});
export const Span = glamorous.span();
export const Div = glamorous.div();
export const A = glamorous.a({ color: "black", textDecoration: "none" });

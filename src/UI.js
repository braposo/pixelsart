import glamorous from "glamorous";

export const scale = [4, 8, 16, 24, 32, 40, 48, 64, 128];
export const H1 = glamorous.h1({});
export const Label = glamorous.label({
  display: "block",
  marginBottom: scale[1]
});
export const Main = glamorous.div({
  margin: "0 auto",
  textAlign: "center"
});
export const Pre = glamorous.pre({
  textAlign: "left"
});

import React from "react";
import { H1, Label, Input, Button, Div, scale, colours } from "./UI";

const Form = ({ onSubmit, onChange, error, input }) => {
  return (
    <Div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <div>
        <H1>PixelsArt</H1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="pixelsName">What's your username?</Label>
          <Input
            id="pixelsName"
            type="text"
            onChange={onChange}
            value={input}
          />
          <div>
            <Button
              type="submit"
              css={{
                minWidth: 100,
                marginBottom: scale[4],
                color: colours.red
              }}
            >
              Go!
            </Button>
          </div>
        </form>
        {error && <small>User not found</small>}
      </div>
    </Div>
  );
};

export default Form;

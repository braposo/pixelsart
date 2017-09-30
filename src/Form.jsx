import React from "react";
import { H1, Label, Input, Button } from "./UI";

const Form = ({ onSubmit, onChange, error, input }) => {
  return (
    <div>
      <H1>PixelsArt</H1>
      <form onSubmit={onSubmit}>
        <Label htmlFor="pixelsName">Username</Label>
        <Input id="pixelsName" type="text" onChange={onChange} value={input} />
        <div>
          <Button type="submit" css={{ minWidth: 100 }}>
            Go!
          </Button>
        </div>
      </form>
      {error && <small>User not found</small>}
    </div>
  );
};

export default Form;

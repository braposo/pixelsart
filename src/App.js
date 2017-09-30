import React, { Component } from "react";
import { H1, Label, Main, Pre, Input } from "./UI";

const processData = data => {
  return {
    favs: data.favs.length,
    badges: data.badges["2017"].length,
    bio: data.bio.split(" ").length,
    wallet: data.wallet
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", data: null, error: null };
  }

  handleChange = ev => {
    this.setState({ input: ev.target.value });
  };

  storeData = data => {
    this.setState({ data });
  };

  handleError = error => {
    this.setState({ error });
  };

  clearResults = () => {
    this.setState({
      data: null,
      error: null
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.clearResults();

    fetch(`http://api.pixels.camp/users/${this.state.input}`)
      .then(resp => resp.json())
      .then(processData)
      .then(this.storeData)
      .catch(this.handleError);
  };

  render() {
    return (
      <Main>
        <H1>PixelsArt</H1>
        <form onSubmit={this.handleSubmit}>
          <Label htmlFor="pixelsName">Username</Label>
          <Input
            id="pixelsName"
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </form>
        {this.state.data && (
          <Pre>{JSON.stringify(this.state.data, null, 2)}</Pre>
        )}
        {this.state.error && <small>User not found</small>}
      </Main>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Main } from "./UI";
import Form from "./Form";
import Results from "./Results";

const processData = data => {
  const favs = data.favs.length;
  const badges = data.badges["2017"].length;
  const bio = data.bio.split(" ").length;
  const surface = 1480;
  const total = favs + badges + bio;

  const calcArea = val => Math.round(val * surface / total);

  return {
    favs: [favs, calcArea(favs)],
    badges: [badges, calcArea(badges)],
    bio: [bio, calcArea(bio)],
    wallet: data.wallet,
    name: data.name,
    avatar: data.avatar_url
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
    fetch(`https://explorer.pixelscamp.art/api/${data.wallet}`)
      .then(resp => resp.json())
      .then(stats => console.log(stats));

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

    fetch(`https://api.pixels.camp/users/${this.state.input}`)
      .then(resp => resp.json())
      .then(processData)
      .then(this.storeData)
      .catch(this.handleError);
  };

  render() {
    return (
      <Main>
        {this.state.data == null ? (
          <Form
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            error={this.state.error}
          />
        ) : (
          <Results data={this.state.data} onResetClick={this.clearResults} />
        )}
      </Main>
    );
  }
}

export default App;

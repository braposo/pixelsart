import React, { Component } from "react";

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
    this.state = { input: "", data: null };
  }

  handleChange = ev => {
    this.setState({ input: ev.target.value });
  };

  storeData = data => {
    this.setState({ data });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    fetch(`http://api.pixels.camp/users/${this.state.input}`)
      .then(resp => resp.json())
      .then(processData)
      .then(this.storeData);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </form>
        {this.state.data && (
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        )}
      </div>
    );
  }
}

export default App;

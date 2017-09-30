import React, { Component } from "react";
import { Main, Div } from "./UI";
import Form from "./Form";
import Results from "./Results";

const processStats = (stats, data) => {
  const favs = data.favs.length;
  const badges = data.badges["2017"].length;
  const bio = data.bio.split(" ").length;
  const referrals = data.referrals.length;
  const transactions = stats.numTransactions;
  const surface = 1480;
  const total = favs + badges + bio + transactions + referrals;

  const calcArea = val => Math.round(val * surface / total);

  return {
    favs: [favs, calcArea(favs)],
    badges: [badges, calcArea(badges)],
    bio: [bio, calcArea(bio)],
    referrals: [referrals, calcArea(referrals)],
    transactions: [transactions, calcArea(transactions)]
  };
};

const processData = data => {
  return fetch(`https://explore.pixelscamp.art/api/${data.wallet}`)
    .then(resp => resp.json())
    .then(stats => ({
      wallet: data.wallet,
      name: data.name,
      avatar: data.avatar_url,
      ...processStats(stats, data)
    }))
    .catch(this.handleError);
};

const Printing = () => (
  <Div
    css={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}
  >
    Generating your poster...
  </Div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: null,
      error: null,
      printing: false,
      path: null
    };
  }

  componentDidMount() {
    const path = window.location.pathname.substr(1);
    if (path.length > 0) {
      this.setState({ printing: true, path });
      fetch(`https://api.pixels.camp/users/${path}`)
        .then(resp => resp.json())
        .then(processData)
        .then(this.storeData)
        .catch(this.handleError);
    }
  }

  handleChange = ev => {
    this.setState({ input: ev.target.value });
  };

  storeData = data => {
    this.setState({ data, printing: false });
  };

  handleError = error => {
    this.setState({ error, printing: false });
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
    this.setState({ printing: true });
    window.history.pushState(null, null, this.state.input);

    fetch(`https://api.pixels.camp/users/${this.state.input}`)
      .then(resp => resp.json())
      .then(processData)
      .then(this.storeData)
      .catch(this.handleError);
  };

  render() {
    return (
      <Main>
        {this.state.data != null ? (
          <Results data={this.state.data} onResetClick={this.clearResults} />
        ) : this.state.printing === true ? (
          <Printing />
        ) : (
          <Form
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            error={this.state.error}
            printing={this.state.printing}
          />
        )}
      </Main>
    );
  }
}

export default App;

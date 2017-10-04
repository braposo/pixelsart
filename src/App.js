import React, { Component } from "react";
import { Main, Div } from "components/UI";
import Form from "components/Form";
import Results from "components/Results";
import { processData } from "utils";

const Printing = () => (
  <Div
    css={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textTransform: "uppercase"
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
      this.fetchData(path);
    }

    window.addEventListener("popstate", this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handlePopState);
  }

  handleChange = ev => {
    this.setState({ input: ev.target.value });
  };

  handlePopState() {
    const path = window.location.pathname.substr(1);
    this.clearResults();
    if (path.length > 0) {
      this.fetchData(path);
    }
  }

  storeData = data => {
    this.setState({ data, printing: false });
    document.title = `PixelsArt by ${data.username} - Pixels Camp 2017`;
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

    window.history.pushState(null, null, this.state.input);

    this.fetchData(this.state.input);
  };

  fetchData = path => {
    this.setState({ printing: true, path });
    fetch(`https://api.pixels.camp/users/${path}`)
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

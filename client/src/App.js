import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    boards: null
  };
  componentDidMount() {
    fetch("/api/boards").then(res => res.json()).then(boards => {
      this.setState({ boards });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to 4chan</h2>
        </div>
        <p className="App-intro">
          {this.state.boards && JSON.stringify(this.state.boards)}
        </p>
      </div>
    );
  }
}

export default App;

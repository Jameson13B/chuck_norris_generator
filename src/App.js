import React, { Component } from "react";
import chuck_norris from "./img/chuck_norris.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to Chuck Norris Saying Generator!
        <img src={chuck_norris} alt="chuck-norris-cartoon" className="img" />
      </div>
    );
  }
}

export default App;

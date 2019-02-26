import React, { Component } from "react";
import chuck_norris from "./img/chuck_norris.jpg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      custFirst: "",
      custLast: "",
      filter: []
    };
  }

  componentDidMount() {
    let url = "http://api.icndb.com/jokes/random/";
    if (this.state.custFirst !== "") {
      url = `http://api.icndb.com/jokes/random/?firstName=${
        this.state.custFirst
      }&lastName=${this.state.custLast}`;
    }
    axios
      .get(url)
      .then(res => {
        this.setState({
          joke: res.data.value.joke.replace(/&quot;/g, '"')
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleNew = () => {
    let url = "http://api.icndb.com/jokes/random/";
    if (this.state.custFirst !== "") {
      url = `http://api.icndb.com/jokes/random/?firstName=${
        this.state.custFirst
      }&lastName=${this.state.custLast}`;
    }
    axios
      .get(url)
      .then(res => {
        this.setState({
          joke: res.data.value.joke.replace(/&quot;/g, '"')
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Welcome to Chuck Norris Saying Generator!</h1>
        <div className="joke">
          {this.state.joke ? <div>{this.state.joke}</div> : <h2>Loading...</h2>}
        </div>
        <img src={chuck_norris} alt="chuck-norris-cartoon" className="img" />
        <div className="new-btn" onClick={this.handleNew}>
          New
        </div>
        <div className="customize-btn">Customize</div>
      </div>
    );
  }
}

export default App;

// Todo:
// Customize Name
// Filter Catergories
// Add signature

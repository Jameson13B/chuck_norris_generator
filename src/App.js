import React, { Component } from "react";
import Signature from "./Signature";
import CustModal from "./CustModal";
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
      settings: false
    };
  }

  componentDidMount() {
    let url = "https://api.icndb.com/jokes/random/";
    if (this.state.custFirst !== "") {
      url = `https://api.icndb.com/jokes/random/?firstName=${
        this.state.custFirst
      }&lastName=${this.state.custLast}`;
    }
    this.handleAxios(url);
  }

  handleAxios = url => {
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

  handleNew = () => {
    let url = "https://api.icndb.com/jokes/random/";
    if (this.state.custFirst !== "") {
      url = `https://api.icndb.com/jokes/random/?firstName=${
        this.state.custFirst
      }&lastName=${this.state.custLast}`;
    }
    this.handleAxios(url);
  };

  handleSaveCust = e => {
    e.preventDefault();
    this.setState({
      custFirst: e.target.childNodes[0].value || "",
      custLast: e.target.childNodes[1].value || "",
      settings: false
    });
    setTimeout(this.handleNew, 500);
  };
  handleTempCust = (custFirst, custLast) => {
    this.setState({
      custFirst: custFirst,
      custLast: custLast,
      settings: false
    });
    setTimeout(this.handleNew, 500);
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Welcome to Chuck Norris Saying Generator!</h1>
        <div className="joke">
          {this.state.joke ? (
            <div data-testid="joke-content">{this.state.joke}</div>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <img src={chuck_norris} alt="chuck-norris-cartoon" className="img" />
        <div className="new-btn" onClick={this.handleNew} data-testid="new-btn">
          New
        </div>
        <div
          className="customize-btn"
          onClick={() => {
            this.setState({ settings: true });
          }}
          data-testid="custom-btn"
        >
          Customize
        </div>
        {/* Next line will be used to display modal for customizing */}
        {this.state.settings ? (
          <CustModal
            handleModalClose={() => this.setState({ settings: false })}
            handleSaveCust={this.handleSaveCust}
            handleTempCust={this.handleTempCust}
            custFirst={this.state.custFirst}
            custLast={this.state.custLast}
          />
        ) : null}
        <Signature />
      </div>
    );
  }
}

export default App;

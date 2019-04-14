import React, { Component } from "react";
import "./CustModal.css";

class CustModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custFirst: this.props.custFirst || "",
      custLast: this.props.custLast || ""
    };
  }
  handleInputChange = e => {
    e.preventDefault();
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div id="CustModal" className="modal" data-testid="custom-modal">
        <div className="modal-content">
          <span className="close" onClick={this.props.handleModalClose}>
            &times;
          </span>
          <h1 className="title">Chuck Norris Generator</h1>
          <p>
            This is a Chuck Norris joke/saying generator. You can customize the
            name in the sayings using the form below. There is also a couple
            template characters you can choose from. Save empty first and last
            name to restore default. Chuck Norris can slam a revolving door.
          </p>
          <form className="form" onSubmit={this.props.handleSaveCust}>
            <input
              name="custFirst"
              placeholder="First Name"
              value={this.state.custFirst}
              onChange={this.handleInputChange}
            />
            <input
              name="custLast"
              placeholder="Last Name"
              value={this.state.custLast}
              onChange={this.handleInputChange}
            />
            <input type="submit" value="Save" className="button" />
          </form>
          <div className="characters">
            <div style={{ fontWeight: "bold" }}>Characters:</div>
            <div
              className="charBtn"
              onClick={() => this.props.handleTempCust("Kanye", "West")}
            >
              Kanye West
            </div>
            <div
              className="charBtn"
              onClick={() => this.props.handleTempCust("Elon", "Musk")}
            >
              Elon Musk
            </div>
            <div
              className="charBtn"
              onClick={() => this.props.handleTempCust("Genghis", "Khan")}
            >
              Genghis Khan
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustModal;

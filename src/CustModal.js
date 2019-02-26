import React from "react";

const CustModal = props => {
  return (
    <div id="CustModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.handleAlgClose}>
          &times;
        </span>
        <h1 className="title">Chuck Norris Generator</h1>
        <p>
          This is a Chuck Norris joke/saying generator. Chuck Norris can slam a
          revolving door. Chuck Norris doesn't get laid. He lays people on the
          ground. Someone once videotaped Chuck Norris getting pissed off. It
          was called Walker: Texas Chain Saw Massacre Chuck Norris originally
          appeared in the "Street Fighter II" video game, but was removed by
          Beta Testers because every button caused him to do a roundhouse kick.
          When asked bout this "glitch," Norris replied, "That's no glitch.",
          Chuck Norris is my Homeboy.
        </p>
        <a
          href="https://chucknorris.jamesonb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chuck Norris Generator
        </a>
      </div>
    </div>
  );
};

export default CustModal;

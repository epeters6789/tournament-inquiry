import React from "react";
import logo from "../images/CopperValley.jpg";
import "../App.css";

export default class FormHeader extends React.Component{
  render(){
    return(
      <div className="app">
        <h1 className="logo">
          <img src={logo} alt="logo" />
        </h1>
        <h1 className="header">
          Tournament Inquiry Form
        </h1>
        <p className="text">
          The following form can be filled out to provide a cost estimate of
          scheduling an event at the Golf Club at Copper Valley.  Please make
          your way through the interactive form in order for us to better
          fulfill your event needs.   The interactive part of this form only
          becomes available once the dates for your event have been chosen.
          In order to submit the form all entries must be filled out.
        </p>
      </div>
    );
  };
}

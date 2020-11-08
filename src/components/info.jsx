import React from "react";

import Dates from './dates'
import "../App.css";

export default class Info extends React.Component{

  // Inialize state parameters for component
  state = {name: 'Name', email: 'E-mail', phoneNumber: 'Phone Number'}

  // Handle change of name input
  handleName = (name) => {
    this.setState({name: name.target.value});
    this.props.handleName(name.target.value);
  }

  // Handle change of email input
  handleEmail = (email) => {
    this.setState({email: email.target.value});
    this.props.handleEmail(email.target.value);
  }

  // Handle change of phone number input
  handlePhoneNumber = (phoneNumber) => {
    this.setState({phoneNumber: phoneNumber.target.value})
    this.props.handlePhoneNumber(phoneNumber.target.value);
  }

  // Handle change of dates and call parent function
  handleDates = (dates) => {
    this.props.handleDates(dates);
  }

  // Render method for general info
  render(){
    return(

      <div className="app">
        <h1 className="subHeader">
          General Information:
        </h1>
        <p className="text"> Please fill out you name, email, and phone number
        so that we are able to contact you with a respose.  In addition to
        contact information please choose the start and end dates of the event
        by clicking on the drop down calendars.</p>
        <div className="info">
          <div className="infoChild1">
          <div className="infoChild2">
            <input className="infoChild3" type="text" value={this.state.name}
                   onChange={this.handleName}>
            </input>
          </div>
          <div className="infoChild2">
            <input className="infoChild3" type="text" name="E-mail"
                   value={this.state.email} onChange={this.handleEmail}>
            </input>
          </div>
          <div className="infoChild2">
            <input className="infoChild3" type="text" name="Phone Number"
                   value={this.state.phoneNumber}
                   onChange={this.handlePhoneNumber}>
            </input>
          </div>
          </div>
          <div className="infoChild1">
            <Dates handleDates={this.handleDates}/>
          </div>
        </div>
      </div>
    )
  };
}

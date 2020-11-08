import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import "../App.css";

export default class Lodge extends React.Component{

  // Get day of the week for each date number
  convertDate = (date) => {
    let day = '';
    if (date === 0){
      day = 'Sunday ';
    }else if(date === 1){
      day = 'Monday '
    }else if(date === 2){
      day = 'Tuesday '
    }else if(date === 3){
      day = 'Wednesday '
    }else if(date === 4){
      day = 'Thursday '
    }else if(date === 5){
      day = 'Friday '
    }else if(date === 6){
      day = 'Saturday ';
    }
    return day + (this.props.date.getMonth()+1).toString() + "/" +
     this.props.date.getDate().toString() + ":";
  }

  // Handle change in options for twin/twin bungalows
  handleOption1 = (lodge) => {
    this.props.handleLodging(this.props.id, 'option1', lodge);
  }

  // Handle change in options for twin/king bungalows
  handleOption2 = (lodge) => {
    this.props.handleLodging(this.props.id, 'option2', lodge);
  }

  // Handle change in options for king/king bungalows
  handleOption3 = (lodge) => {
    this.props.handleLodging(this.props.id, 'option3', lodge);
  }

  // Handle change in options for twin bunaglow
  handleOption4 = (lodge) => {
    this.props.handleLodging(this.props.id, 'option4', lodge);
  }

  // Handle change in options for king bungalow
  handleOption5 = (lodge) => {
    this.props.handleLodging(this.props.id, 'option5', lodge);
  }

  // Render method for general info
  render(){
    const options = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return(
      <div className="lodge" >
        <p className="lodgeChild">
          {this.convertDate(this.props.date.getDay())}
        </p>
        <Dropdown
          className="lodgeChild"
          options={options}
          onChange={this.handleOption1}
          placeholder="Twin/Twin" />
        <Dropdown
            className="lodgeChild"
            options={options}
            onChange={this.handleOption2}
            placeholder="Twin/King" />
        <Dropdown
            className="lodgeChild"
            options={options}
            onChange={this.handleOption3}
            placeholder="King/King" />
        <Dropdown
            className="lodgeChild2"
            options={options}
            onChange={this.handleOption4}
            placeholder="Twin" />
        <Dropdown
            className="lodgeChild2"
            options={options}
            onChange={this.handleOption5}
            placeholder="King" />
      </div>
    )
  };
}

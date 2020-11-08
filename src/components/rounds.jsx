import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import "../App.css";

export default class Rounds extends React.Component{

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

  // Handle change on number of rounds for each dates in event
  handleRounds = (rounds) => {
    this.props.handleRounds(this.props.id, rounds.value);
  }

  // Render method for rounds
  render(){
    const options = [0, 1, 2]
    return(
      <div className="rounds" >
        <p className="roundsChild">
          {this.convertDate(this.props.date.getDay())}
        </p>
        <Dropdown
          className="roundsChild"
          options={options}
          onChange={this.handleRounds}
          value={options[0]}
          placeholder="Number of Rounds" />
      </div>
    )
  };
}

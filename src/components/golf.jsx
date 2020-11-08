import React from "react";

import Rounds from './rounds'
import {computeRoundCost} from '../computeRoundCost'
import "../App.css";

export default class Golf extends React.Component{

  // Initialize state parameters
  state = {flag: false, rounds: [], numPeople: 0}

  // Compute cost of golfing rounds
  computeCost = () => {
    let cost = computeRoundCost(this.props.dates.length, this.props.dates,
                                this.state.rounds, this.state.numPeople);
    this.props.handleGolf(cost);
  }

  // Handle update of number of rounds for each date of event
  handleRounds = (id, round) => {

    // If first time create rounds array with same length as dates
    if (!this.state.flag){
      let rounds = Array(this.props.dates.length).fill(0);
      rounds[id] = round;
      this.setState({flag: true});
      this.setState({rounds: rounds}, this.computeCost);
      this.props.handleRounds(rounds);

    // If after first time overwrite rounds array with new inputs
    }else{
      let rounds = this.state.rounds;
      rounds[id] = round;
      this.setState({rounds: rounds}, this.computeCost);
      this.props.handleRounds(rounds);
    }

  }

  // Handle change in number of people participating golfing event
  handleGolfers = (numPeople) => {
    this.setState({numPeople: numPeople.target.value}, this.computeCost);
    this.props.handleGolfers(numPeople.target.value);
  }

  // Render method for golf info
  render(){
    let key = 0;
    let id = 0;
    return(
      <div className="app">
        <h1 className="subHeader">
          Golf:
        </h1>
        <div>
          <p className='text'>
            After selecting the days from the drop down
            calendar above please fill out the number of people who would like
            to play as well as the number of rounds you would like to play for
            each day.  Note, that each tournament must include at a minimum 12
            people.
          </p>
          <div className="golfPeople">
            Number Of People Golfing:
            <input type="text" name="Number of People"
                   value={this.state.numPeople} onChange={this.handleGolfers}>
            </input>
          </div>
        </div>
        <ul className="golf">
          {this.props.dates.map(date =>
                               (<Rounds key={key++} id={id++} date={date}
                                        handleRounds={this.handleRounds}/>))}
        </ul>
      </div>
    )
  };
}

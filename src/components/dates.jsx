import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../App.css";

export default class Dates extends React.Component{

  // Initialize state parameters for component
  state = {startDate: new Date(), endDate: new Date()};

  // Handle change of start date and execute handle dates afterwards
  handleStart = (date) => {
    this.setState({startDate: date}, this.handleDates);
  }

  // Handle change of end date and execute handle dates afterwards
  handleEnd = (date) => {
    this.setState({endDate: date}, this.handleDates);
  }

  // Handle dates by creating array of dates between start and end
  handleDates = () => {

    // Create copy of start date
    var date = new Date(this.state.startDate.getTime());
    date.setMilliseconds(0);

    // Create empty array of dates
    var dates = [];

    // If start is before end create date array
    if(this.state.endDate.getTime() >= date.getTime()){

      // Append dates to date array from start to end
      while(date.getTime() <= this.state.endDate.getTime()){

        // Append next day to array
        dates.push(new Date(date.getTime()));

        // Increment date
        date.setDate(date.getDate() + 1);
      }

      // After date array has been set call parent function
      this.props.handleDates(dates);
    }

    // Invalid event dates if start is after end
    else{
      console.log("End date must be >= start date");
    }
  }

  // Render method for date drop down calendars
  render(){
    return(
      <div>
        <h1 className="dates">
            {'Start: '}
            <DatePicker
              className='calendar'
              selected={this.state.startDate}
              value={this.state.startDate}
              onChange={this.handleStart}/>
        </h1>
        <h1 className="dates">
            {'End: '}
            <DatePicker
              className='calendar'
              selected={this.state.endDate}
              value={this.state.endDate}
              onChange={this.handleEnd}/>
        </h1>
      </div>
    )
  };
}

import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import "../App.css";

export default class Meal extends React.Component{

  // Get day of the week for each date number
  convertDate = (date) => {
    let day = '';
    if (date === 0){
      day = 'Sunday';
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
      day = 'Saturday';
    }
    return day + (this.props.date.getMonth()+1).toString() + "/" +
     this.props.date.getDate().toString() + ":";
  }

  // Handle breakfast for each date in event
  handleBreakfast = (meal) => {
    this.props.handleMeals(this.props.id, 'breakfast', meal);
  }

  // Handle lunch for each date in event
  handleLunch = (meal) => {
    this.props.handleMeals(this.props.id, 'lunch', meal);
  }

  // Handle dinner for each date in event
  handleDinner = (meal) => {
    this.props.handleMeals(this.props.id, 'dinner', meal);
  }

  // Render method for general info
  render(){
    const breakfastOptions = ['None',
                              'Copper Continental',
                              'Copper Continental Plus',
                              'Breakfast Burrito',
                              'Vine18 Breakfast',
                              'Pancake Breakfast',
                              'NY Steak and Eggs'];
    const lunchOptions = ['None',
                          'Turkey Wrap (Boxed)',
                          'Ham and Swiss Wrap (Boxed)',
                          'Roast Beef Sandwhich (Boxed)',
                          'BBQ Pulled Pork Sandwhich (Boxed)',
                          'Phily Cheessteak Sandwhich (Boxed)',
                          'Fried Chicken Sandwich (Boxed)',
                          'BBQ Pulled Pork (Plate)',
                          'Brisket (Plate)',
                          'Smoked Sausage (Plate)',
                          'Chicken Breast (Plate)',
                          'Ground Beef Tacos (Plate)',
                          'Chicken Tacos (Plate)'];
    const dinnerOptions = ['None',
                           'Napa Duet Dinner',
                           'Provence',
                           'Burgundy',
                           'Champagne',
                           'Jalisco',
                           'Little Italy'];
    return(
      <div className="meal" >
        <p className="mealChild">
          {this.convertDate(this.props.date.getDay())}
        </p>
        <Dropdown
          className="mealChild"
          options={breakfastOptions}
          onChange={this.handleBreakfast}
          placeholder="Breakfast" />
        <Dropdown
            className="mealChild"
            options={lunchOptions}
            onChange={this.handleLunch}
            placeholder="Lunch" />
        <Dropdown
            className="mealChild"
            options={dinnerOptions}
            onChange={this.handleDinner}
            placeholder="Dinner" />
      </div>
    )
  };
}

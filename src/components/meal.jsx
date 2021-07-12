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
                              'Copper Continental Plus',
                              'Breakfast Burrito',
                              'Vine18 Breakfast Buffet',
                              'Vine18 Breakfast Plated'];
    const lunchOptions = ['None',
                          'Turkey Wrap (Boxed)',
                          'Ham and Swiss Wrap (Boxed)',
                          'Phily Cheessteak Sandwhich (Boxed)',
                          'Fried Chicken Sandwich (Boxed)',
                          'BBQ Pulled Pork (Plated)',
                          'Chicken Breast (Plated)',
                          'Smoked Hot Sausage (Plated)',
                          'Seared Salmon (Plated)',
                          'Grilled Chicken Breast (Plated)'];
    const dinnerOptions = ['None',
                           'Napa Duet Dinner',
                           'Provence (Stuffed Chicken Breast)',
                           'Provence (Beef Bourguignon)',
                           'Provence (Seared Pacific Salmon)',
                           'Champagne (Filet)',
                           'Champagne (Seared Sea Scallops)',
                           'Vegetarian',
                           'Chicken Strips (Kids)',
                           'Cheese Slider (Kids)',
                           'Macaroni and Cheese (Kids)'];
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

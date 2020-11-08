import React from "react";
import Popup from 'reactjs-popup';

import breakfast from '../images/breakfast.png';
import lunch from '../images/lunch.png';
import dinner from '../images/dinner.png';
import Meal from './meal'
import convertBreakfast from '../convertBreakfast';
import convertLunch from '../convertLunch';
import convertDinner from '../convertDinner'
import "../App.css";

export default class Meals extends React.Component{

  // Initialize state of Meals component
  state = {flag: false, breakfast: [], lunch: [], dinner: [], numPeople: 0}

  // Compute cost of all meals upon selection update
  computeCost = () => {
    let cost = 0;

    // Loop over days of event
    for(var i=0; i< this.props.dates.length; i++){
      cost += this.state.numPeople*convertBreakfast(this.state.breakfast[i]);
      cost += this.state.numPeople*convertLunch(this.state.lunch[i]);
      cost += this.state.numPeople*convertDinner(this.state.dinner[i]);
    }
    this.props.handleMeals(cost);
  }

  // Handle meal selctions for all days of event
  handleMeals = (id, type, meal) => {

    // If this is the first meal update create arrays
    if (!this.state.flag){
      let breakfast = Array(this.props.dates.length).fill('None');
      let lunch = Array(this.props.dates.length).fill('None');
      let dinner = Array(this.props.dates.length).fill('None');

      // Update all arrays for breakfast selection
      if(type === 'breakfast'){
        breakfast[id] = meal.value;
        this.setState({breakfast: breakfast}, this.computeCost);
        this.setState({lunch: lunch});
        this.setState({dinner: dinner});

      // Update all arrays for lunch selection
      }else if (type === 'lunch'){
        lunch[id] = meal.value;
        this.setState({breakfast: breakfast});
        this.setState({lunch: lunch}, this.computeCost);
        this.setState({dinner: dinner});

      // Update all arrays for dinner selection
      }else if (type === 'dinner'){
        dinner[id] = meal.value;
        this.setState({breakfast: breakfast});
        this.setState({lunch: lunch});
        this.setState({dinner: dinner}, this.computeCost);
      }

    // Handle parent events
    this.props.handleBreakfast(breakfast);
    this.props.handleLunch(lunch);
    this.props.handleDinner(dinner);

    // After first selction change flag to true
    this.setState({flag: true});

    // If after first meal selection only need to update
    }else{

      // Update breakfast array
      if (type === 'breakfast'){
        let breakfast = this.state.breakfast;
        breakfast[id] = meal.value;
        this.setState({breakfast: breakfast}, this.computeCost);
        this.props.handleBreakfast(breakfast);

      // Update lunch array
      }else if(type === 'lunch'){
        let lunch = this.state.lunch;
        lunch[id] = meal.value;
        this.setState({lunch: lunch}, this.computeCost);
        this.props.handleLunch(lunch);

      // Update dinner array
      }else if(type === 'dinner'){
        let dinner = this.state.dinner;
        dinner[id] = meal.value;
        this.setState({dinner: dinner}, this.computeCost);
        this.props.handleDinner(dinner);
      }
    }
  }

  // Handle change in numbder of people participating in event
  handlePeople = (numPeople) => {
    this.setState({numPeople: numPeople.target.value}, this.computeCost);
    this.props.handleDiners(numPeople.target.value);
  }

  // Render method for meals component
  render(){
    let key = 0;
    let id = 0;
    return(
      <div className="app">
        <h1 className="subHeader">
          Meals:
        </h1>
        <p className='text'> For the days selected above please indicate the
        which meal you would like as well as the choices for each meal.  We do
        require your group to have either a food and beverage component or
        reservations in our bungalows. Please note that if you do not have a
        coordinated food service prior to your arrival, the likelihood
        that we would be able to accommodate a large party in our dining
        room as a walk-in would be extremely limited.  To see
        the choices available please look at our attached menus.
        </p>
        <div className="mealPeople">
          Number Of People Eating:
          <input type="text" name="Number of People Eating"
                 value={this.state.numPeople} onChange={this.handlePeople}>
          </input>
        </div>
        <ul className="meals">
          {this.props.dates.map(date =>
                               (<Meal key={key++} id={id++} date={date}
                                      handleMeals={this.handleMeals} />))}
        </ul>
        <div className="menuParent">
          <Popup trigger={<button> Breakfast Menu</button>}
                 modal position="center">
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <img className="menu" src={breakfast} alt="" />
            </div>
          )}
          </Popup>
          <Popup trigger={<button> Lunch Menu </button>} modal position="center">
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <img className="menu" src={lunch} alt="" />
            </div>
          )}
          </Popup>
          <Popup trigger={<button> Dinner Menu </button>} modal position="center">
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <img className="menu" src={dinner} alt="" />
            </div>
          )}
          </Popup>
        </div>
      </div>
    )
  };
}

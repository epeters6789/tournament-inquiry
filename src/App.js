import React from "react";

import FormHeader from './components/formHeader'
import Info from './components/info'
import Golf from './components/golf'
import Lodging from './components/lodging'
import Meals from './components/meals'
import Comments from './components/comments'
import Cost from './components/cost'
import Submit from './components/submit'

export default class App extends React.Component{

  // Initialize state parameters
  state = {dates: [], name: '', phoneNumber: '', email: '',
           rounds: [], numGolfers: 0, twinTwin: [], kingKing: [],
           twinKing: [], twin: [], king: [], numDiners: 0,
           breakfast: [], lunch: [], dinner: [], comments: '',
           cost: {golf: 0, lodging: 0, meals: 0}};

  // Handle update of dates representing event
  handleDates = (dates) => {
    this.setState({dates: dates});
  }

  // Handle update of name representing development
  handleName = (name) => {
    this.setState({name: name});
  }

  // Handle update of email representing development
  handleEmail = (email) => {
    this.setState({email: email});
  }

  // Handle update of phoneNumber representing development
  handlePhoneNumber = (phoneNumber) => {
    this.setState({phoneNumber: phoneNumber});
  }

  // Handle update of golf information representing event
  handleGolf = (cost) => {
    var newCost = {golf: cost, lodging: this.state.cost['lodging'],
                   meals: this.state.cost['meals']};
    this.setState({cost: newCost});
  }

  // Handle update of rounds representing event
  handleRounds = (rounds) => {
    this.setState({rounds: rounds});
  }

  // Handle update of number of golfers representing event
  handleGolfers = (numGolfers) => {
    this.setState({numGolfers: numGolfers});
  }

  // Handle update of lodging information representing event
  handleLodging = (cost) => {
    var newCost = {golf: this.state.cost['golf'], lodging: cost,
                   meals: this.state.cost['meals']};
    this.setState({cost: newCost});
  }

  // Handle update of lodging option 1 twin/twin representing event
  handleLodgingOption1 = (option1) => {
    this.setState({twinTwin: option1});
  }

  // Handle update of lodging option 2 twin/king representing event
  handleLodgingOption2 = (option2) => {
    this.setState({twinKing: option2});
  }

  // Handle update of lodging option 3 king/king representing event
  handleLodgingOption3 = (option3) => {
    this.setState({kingKing: option3});
  }

  // Handle update of lodging option 4 twin representing event
  handleLodgingOption4 = (option4) => {
    this.setState({twin: option4});
  }

  // Handle update of lodging option 5 king representing event
  handleLodgingOption5 = (option5) => {
    this.setState({king: option5});
  }

  // Handle update of lodging information representing event
  handleMeals = (cost) => {
    var newCost = {golf: this.state.cost['golf'],
                   lodging: this.state.cost['lodging'],
                   meals: cost};
    this.setState({cost: newCost});
  }

  // Handle update of number of diners representing event
  handleDiners = (numDiners) => {
    this.setState({numDiners: numDiners});
  }

  // Handle update of breakfast meals representing event
  handleBreakfast = (breakfast) => {
    this.setState({breakfast: breakfast});
  }

  // Handle update of lunch meals representing event
  handleLunch = (lunch) => {
    this.setState({lunch: lunch});
  }

  // Handle update of dinner meals representing event
  handleDinner = (dinner) => {
    this.setState({dinner: dinner});
  }

  // Handle update of comments representing event
  handleComments = (comments) => {
    this.setState({comments: comments});
  }

  // Render method for tournament form
  render(){
    return(
      <React.Fragment>
        <FormHeader />
        <Info
          handleDates={this.handleDates} handleName={this.handleName}
          handleEmail={this.handleEmail}
          handlePhoneNumber={this.handlePhoneNumber}
        />
        <Golf
          dates={this.state.dates} handleGolf={this.handleGolf}
          handleRounds={this.handleRounds} handleGolfers={this.handleGolfers}
        />
        <Lodging
          numPeople={this.state.numPeople} dates={this.state.dates}
          handleLodging={this.handleLodging}
          handleLodgingOption1={this.handleLodgingOption1}
          handleLodgingOption2={this.handleLodgingOption2}
          handleLodgingOption3={this.handleLodgingOption3}
          handleLodgingOption4={this.handleLodgingOption4}
          handleLodgingOption5={this.handleLodgingOption5}
        />
        <Meals
          numPeople={this.state.numPeople} dates={this.state.dates}
          handleMeals={this.handleMeals} handleDiners={this.handleDiners}
          handleBreakfast={this.handleBreakfast} handleLunch={this.handleLunch}
          handleDinner={this.handleDinner}
        />
        <Comments
          handleComments={this.handleComments}
        />
        <Cost
          cost={this.state.cost}
        />
        <Submit
          name={this.state.name} phoneNumber={this.state.phoneNumber}
          email={this.state.email} numGolfers={this.state.numGolfers}
          rounds={this.state.rounds} twinTwin={this.state.twinTwin}
          twinKing={this.state.twinKing} kingKing={this.state.kingKing}
          twin={this.state.twin} king={this.state.king}
          numDiners={this.state.numDiners} breakfast={this.state.breakfast}
          lunch={this.state.lunch} dinner={this.state.dinner}
          comments={this.state.comments} dates={this.state.dates}
          cost={this.state.cost}
        />
      </React.Fragment>
    );

  //End render
  }

// End App
}

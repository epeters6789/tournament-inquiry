import React from "react";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import "../App.css";

export default class Submit extends React.Component{

  // Initialize state for Submit component
  state = {message: "", pass: true};

  // Handle submitting event request form by email
  handleClick = () => {

    let pass = true;

    // Intitialize email js user
    init("user_UBWDYg34AUfKqRPWuVkFv");

    // Convert dates to strings for email template
    let newDates = [];
    for(var idx=0; idx< this.props.dates.length; idx++){
      newDates.push(this.props.dates[idx].toDateString());
    }

    // Check to see if everything is filled out
    this.setState({pass: true, message: "Message Sent"})
    if (this.props.name === ""){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please enter name before submitting"});
    }else if(this.props.email === ""){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please enter email before submitting"});
    }else if(this.props.phoneNumber === ""){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please enter phone number before submitting"});
    }else if(this.props.dates.length === 0){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please choose dates before submitting"});
    }else if(this.props.numGolfers < 12){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please choose a number of golfers >= 12 " +
                               "before submitting"});
    }else if(this.props.rounds.length === 0){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please choose number of rounds to be played " +
                              "before submitting"});
    }else if(this.props.twinTwin.length === 0 &&
             this.props.twinKing.length === 0 &&
             this.props.kingKing.length === 0 &&
             this.props.twin.length === 0 &&
             this.props.king.length === 0){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please choose lodging before submitting "});
    }else if(this.props.numDiners === 0){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please choose number of people eating " +
                              "before submitting"});
    }else if(this.props.breakfast.length === 0 && this.props.lunch.length === 0
          && this.props.dinner.length === 0){
      pass = false;
      this.setState({pass: false});
      this.setState({message: "Please choose meals before submitting"});
    }

    // Create email template with event parameters
    var emailJSTemplateParams = {
        to_name: 'Austin',
        from_name: 'CopperValleyTournamentForm',
        name: this.props.name,
        email: this.props.email,
        phoneNumber: this.props.phoneNumber,
        numGolfers: this.props.numGolfers,
        rounds: this.props.rounds,
        twinTwin: this.props.twinTwin,
        twinKing: this.props.twinKing,
        kingKing: this.props.kingKing,
        twin: this.props.twin,
        king: this.props.king,
        numDiners: this.props.numDiners,
        breakfast: this.props.breakfast,
        lunch: this.props.lunch,
        dinner: this.props.dinner,
        comments: this.props.comments,
        dates: newDates,
        golfCost: Math.round(this.props.cost['golf']),
        lodgingCost: Math.round(this.props.cost['lodging']),
        mealsCost: Math.round(this.props.cost['meals']),
        totalCost: Math.round(this.props.cost['golf'] +
                   this.props.cost['lodging'] +
                   this.props.cost['meals'])
    };

    // Send email using email js
    if (pass){
      emailjs.send('service_y7ra6wg', 'template_zi4eic5', emailJSTemplateParams)
          .then(function(response) {
             console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
             console.log('FAILED...', error);
          });
    }
  }

  render(){
    return(
      <div
        className='submit'>
          <div className='submitChild'>
            <button className='submitChild2' onClick={this.handleClick}>
              Submit
            </button>
            <div className='submit'>
                   <p className='sumbitChild'>
                   {this.state.message}</p>
            </div>
          </div>
      </div>
    )
  };
}

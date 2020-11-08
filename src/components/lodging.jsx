import React from "react";

import {computeLodgingCost} from '../computeLodgingCost'
import Lodge from './lodge'
import "../App.css";

export default class Lodging extends React.Component{

  state = {flag: false, option1: [], option2: [], option3: [], option4: [],
           option5: []}

  // After changing lodging options recompute cost of lodging for event
  computeCost = () => {
    let cost = computeLodgingCost(this.props.dates.length, this.props.dates,
                                  this.state.option1, this.state.option2,
                                  this.state.option3, this.state.option4,
                                  this.state.option5);
    this.props.handleLodging(cost);
  }

  handleLodging = (id, type, lodge) => {

    // If first time create lodging arrays
    if (!this.state.flag){
      let option1 = Array(this.props.dates.length).fill(0);
      let option2 = Array(this.props.dates.length).fill(0);
      let option3 = Array(this.props.dates.length).fill(0);
      let option4 = Array(this.props.dates.length).fill(0);
      let option5 = Array(this.props.dates.length).fill(0);

      // If change to option 1 twin/twin
      if(type === 'option1'){
        option1[id] = lodge.value;
        this.setState({option1: option1}, this.computeCost);
        this.setState({option2: option2});
        this.setState({option3: option3});
        this.setState({option4: option4});
        this.setState({option5: option5});
        this.props.handleLodgingOption1(option1);

      // If change to option 2 twin/king
      }else if (type === 'option2'){
        option2[id] = lodge.value;
        this.setState({option1: option1});
        this.setState({option2: option2}, this.computeCost);
        this.setState({option3: option3});
        this.setState({option4: option4});
        this.setState({option5: option5});
        this.props.handleLodgingOption2(option2);

      // If change to option 3 king/king
      }else if (type === 'option3'){
        option3[id] = lodge.value;
        this.setState({option1: option1});
        this.setState({option2: option2});
        this.setState({option3: option3}, this.computeCost);
        this.setState({option4: option4});
        this.setState({option5: option5});
        this.props.handleLodgingOption3(option3);

      // If change to option 4 twin
      }else if (type === 'option4'){
        option4[id] = lodge.value;
        this.setState({option1: option1});
        this.setState({option2: option2});
        this.setState({option3: option3});
        this.setState({option4: option4}, this.computeCost);
        this.setState({option5: option5});
        this.props.handleLodgingOption3(option3);

      // If change to option 5 king
      }else if (type === 'option5'){
        option5[id] = lodge.value;
        this.setState({option1: option1});
        this.setState({option2: option2});
        this.setState({option3: option3});
        this.setState({option4: option4});
        this.setState({option5: option5}, this.computeCost);
        this.props.handleLodgingOption5(option5);
      }

    // After settting first time change flag
    this.setState({flag: true});

    // If changing second time
    }else{

      // Alter option 1 twin/twin
      if (type === 'option1'){
        let option1 = this.state.option1;
        option1[id] = lodge.value;
        this.setState({option1: option1}, this.computeCost);
        this.props.handleLodgingOption1(option1);

      // Alter option 2 twin/king
      }else if(type === 'option2'){
        let option2 = this.state.option2;
        option2[id] = lodge.value;
        this.setState({option2: option2}, this.computeCost);
        this.props.handleLodgingOption2(option2);

      // Alter option 3 king/king
      }else if(type === 'option3'){
        let option3 = this.state.option3;
        option3[id] = lodge.value;
        this.setState({option3: option3}, this.computeCost);
        this.props.handleLodgingOption3(option3);

      // Alter option 4 twin
      }else if(type === 'option4'){
        let option4 = this.state.option4;
        option4[id] = lodge.value;
        this.setState({option4: option4}, this.computeCost);
        this.props.handleLodgingOption4(option4);

      // Alter option 5 king
      }else if(type === 'option5'){
        let option5 = this.state.option5;
        option5[id] = lodge.value;
        this.setState({option5: option5}, this.computeCost);
        this.props.handleLodgingOption5(option5);
      }
    }
  }

  // Render method for lodging choices
  render(){
    let key = 0;
    let id = 0;
    return(
      <div className="app">
        <h1 className="subHeader">
          Lodging:
        </h1>
        <p className='text'>
          For the days selected above please indicate which
          nights you will need lodging and how many bungalows will be required.
          We have 5 Rooming configurations.  The 2 Bedroom Suite Bed
          arrangements can be configured in
          the following way: King & King, King & 2-Twins, or 2-Twins & 2-Twins.
          The 1 Bedroom suite bed arrangements are only: King or 2-Twins.
        </p>
        <ul className="lodging">
          {this.props.dates.map(date =>
                               (<Lodge key={key++} id={id++} date={date}
                                       handleLodging={this.handleLodging} />))}
        </ul>
      </div>
    )
  };
}

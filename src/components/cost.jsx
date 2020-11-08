import React from "react";

import "../App.css";

export default class Cost extends React.Component{

  render(){
    return(
      <div className="cost">
        <div className="costChild">
          <p className="costChild2">
            Estimated Cost of Golf: ${Math.round(this.props.cost['golf'])}
          </p>
          <p className="costChild2">
            Estimated Cost of Lodging: ${Math.round(this.props.cost['lodging'])}
          </p>
          <p className="costChild2">
            Estimated Cost of Meals: ${Math.round(this.props.cost['meals'])}
          </p>
          <p className="costChild3">
            Estimated Total Cost: ${Math.round(this.props.cost['golf'] +
                                    this.props.cost['lodging'] +
                                    this.props.cost['meals'])}
          </p>
        </div>
      </div>
    )
  };
}

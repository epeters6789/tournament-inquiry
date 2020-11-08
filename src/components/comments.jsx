import React from "react";

import "../App.css";

export default class Comments extends React.Component{

  // Initialize state variables for comments component
  state = {comment: ""};

  // Handle change in comment
  handleChange = comment => {
    this.setState({comment: comment.target.value});
    this.props.handleComments(comment.target.value);
  }

  // Render method for comments component
  render(){
    return(
      <div className='app'>
        <h1 className="subHeader">
          Comments
        </h1>
        <div className="comments">
          <p className ="text">
            Are there any additional comments that you would like to add?
          </p>
          <textarea className='commentsChild' name='body'
                    onChange={this.handleChange} value={this.state.comment}
          />
        </div>
      </div>
    );
  };
}

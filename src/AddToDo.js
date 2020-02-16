import React, { Component } from "react";

// we automatically get all the props in class component
class AddToDo extends Component {

  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state); 
    //class component so we call the props by using this.props
    this.props.addTodo(this.state) // we are passing the state to the addTodo function
    
    this.setState({ // we are clearing the form on submission so we donot have to delete text
        content: ''
    }) 
    //              // reflected on the tag in inpit --> value={this.state.content}
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo: </label>
          <input type="text" onChange={this.handleChange} value={this.state.content}>
            
          </input>
        </form>
      </div>
    );
  }
}

export default AddToDo;



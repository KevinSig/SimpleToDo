import React, { Component } from 'react';
import Todos from './Todos'
import AddToDo from './AddToDo'

class App extends Component{
  
  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some snacks'}
    ]
  }

  addTodo = (newToDo) =>{
    newToDo.id = Math.random(); // this is confusing, how are we assigning id??
    let todos = [...this.state.todos,newToDo]; //we are dumping the old array 
    //                                        // into a new array and adding a new item

    this.setState({
      todos : todos //
    })
  }
  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo=>{ //todos is an array
      return todo.id !== id
 
    })
    this.setState({
      todos  //could also write as todo : todo 
             //since the key and the value are the same we can just shorten to todo 
    })
  }

  render(){
  return (
    
    <div className="todo-App container ">
      <h1 className = 'center blue-text'>Todo's</h1>

      <Todos todos = {this.state.todos} deleteToDo={this.deleteToDo}/>
      <AddToDo addTodo ={this.addTodo}/>

    </div>
    );
  }
}

export default App;

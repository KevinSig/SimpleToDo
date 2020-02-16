import React from "react";

//because this is a functional compoent (ui) we have deconstruct the prop
const Todos = ({ todos, deleteToDo }) => {
  const todolist = todos.length ? (
    todos.map(todo => {
      //below is JSX because that is what will be returned to the last return
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick = {()=>{deleteToDo(todo.id)}}> {todo.content} </span>
        </div>
      );
    })
  ) : (
    <p className="center"> No Todo's left </p>
  );
  return <div className="todos collection">{todolist}</div>;
};

export default Todos;


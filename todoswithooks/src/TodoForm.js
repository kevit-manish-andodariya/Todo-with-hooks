import React, { useRef, useMemo, useReducer, useContext } from "react";
import { todoReducer } from "./Components/Reducer";
import { todoCotext } from "./TodosContext";

const TodoForm = () => {
    const {state,dispatch} = useContext(todoCotext)
    const todoInputRef = useRef(null);
  // add task function
    const handleAddTask = () => {
      const text = todoInputRef.current.value;
      if (text.trim() !== "") {
        const newTodo = {
          id: new Date().getTime(),
          text,
        };
        dispatch({ type: "ADD", payload: newTodo });
        todoInputRef.current.value = "";
      }
    };
  return (
    <div>
       <h1>Todo App</h1>
      <div>
        <input type="text" ref={todoInputRef} />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  )
}

export default TodoForm

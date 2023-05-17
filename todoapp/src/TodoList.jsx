import React, { useReducer } from "react";
import "./TodoList.css";
import reducerFunction from "./reducer";

function TodoList() {
  const [state, dispatch] = useReducer(reducerFunction, { listOfToDos: [] });

  console.log(state);
  return (
    <div className="task-list-container">
      <div className="task-wrapper">
        <div>task label</div>
        <button
          onClick={() => dispatch({ type: "deleteTask", value: "task label" })}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;

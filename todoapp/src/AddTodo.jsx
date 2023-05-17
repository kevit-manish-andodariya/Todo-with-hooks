import React, { useReducer, useState } from "react";
import reducerFunction from "./reducer";

function AddTodo() {
  const [state, dispatch] = useReducer(reducerFunction, { listOfToDos: [] });
  const [task, setTask] = useState("");

  console.log(state);
  return (
    <div className="add-form-container">
      <h2> Add Task</h2>
      <div className="add-todo-form">
        <input
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e?.target?.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "addTask", value: task });
            setTask("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;

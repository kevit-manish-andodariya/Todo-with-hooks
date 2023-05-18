import React, { createContext, useReducer, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import reducerFunction from "./reducer";

export const ListContext = createContext({ state: {}, dispatch: () => {} });

function App() {
  const [state, dispatch] = useReducer(reducerFunction, { listOfToDos: [] });
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (inputRef.current.value) {
      dispatch({
        type: "addTask",
        value: { name: inputRef?.current?.value, completed: false },
      });
      inputRef.current.value = null;
    } else {
    }
  };

  return (
    <div className="app-root-container">
      <h1>React TODO App</h1>
      <div className="add-form-container">
        <h2> Add Task</h2>
        <form className="add-todo-form" onSubmit={(e) => e.preventDefault()}>
          <input required ref={inputRef} placeholder="Add Task" />

          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
      <ListContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </ListContext.Provider>
    </div>
  );
}

export default App;

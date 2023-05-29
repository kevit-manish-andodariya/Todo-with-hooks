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
      <h1>TODO App</h1>
      <div className="add-form-container">
        <form className="add-todo-form" onSubmit={(e) => e.preventDefault()}>
          <input required ref={inputRef} placeholder="Add Task" />

          <button className="addBtn" type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
      <div className="filter-container">
        <button className="filterBtn selectedFilterBtn">All</button>
        <button className="filterBtn">To do</button>
        <button className="filterBtn">Completed</button>
      </div>
      <ListContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </ListContext.Provider>
    </div>
  );
}

export default App;

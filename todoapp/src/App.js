import React, { createContext, useReducer } from "react";
import "./App.css";
import TodoList from "./TodoList";
import reducerFunction from "./reducer";
import AddTodoForm from "./AddTodoForm";

export const ListContext = createContext({ state: {}, dispatch: () => {} });

function App() {
  const [state, dispatch] = useReducer(reducerFunction, {
    listOfToDos: [],
    filter: "all",
  });

  return (
    <div className="app-root-container">
      <h1>TODO App</h1>

      <ListContext.Provider value={{ state, dispatch }}>
        <AddTodoForm />

        <div className="filter-container">
          <button
            className={`filterBtn ${
              state?.filter === "all" ? "selectedFilterBtn" : ""
            }`}
            onClick={() => dispatch({ type: "filterTodo", value: "all" })}
          >
            All
          </button>
          <button
            className={`filterBtn ${
              state?.filter === "todo" ? "selectedFilterBtn" : ""
            }`}
            onClick={() => dispatch({ type: "filterTodo", value: "todo" })}
          >
            To do
          </button>
          <button
            className={`filterBtn ${
              state?.filter === "completed" ? "selectedFilterBtn" : ""
            }`}
            onClick={() => dispatch({ type: "filterTodo", value: "completed" })}
          >
            Completed
          </button>
        </div>
        <TodoList />
      </ListContext.Provider>
    </div>
  );
}

export default App;

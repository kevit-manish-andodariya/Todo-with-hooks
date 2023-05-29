import React, { createContext, useReducer } from "react";
import "./App.css";
import TodoList from "./TodoList";
import reducerFunction from "./reducer";
import AddTodoForm from "./AddTodoForm";

/* This line of code is creating a new context object called `ListContext` using the `createContext`
function from the React library. The context object is being exported so that it can be used in
other parts of the application. */
export const ListContext = createContext({ state: {}, dispatch: () => {} });

/**
 * The function returns a React component that renders a TODO app with a list of TODOs, a filter, and
 * the ability to add new TODOs.
 * @returns The `App` component is being returned, which contains the main structure of the TODO app.
 * It includes a header with the title, a `ListContext.Provider` that provides the state and dispatch
 * functions to its children components, an `AddTodoForm` component, a filter container with three
 * buttons for filtering the list of todos, and a `TodoList` component that displays the list of todos
 * based
 */
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

import { useState, useReducer } from "react";
import "./App.css";
import TodoContext from "./store/store";
import Todo from "./components/Todo";

const initialState = {
  count: 0,
};

const todoReducer = (state: any, action: any) => {
  return state;
};

function App() {
  const [todo, disaptch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={todo}>
      <Todo />
    </TodoContext.Provider>
  );
}

export default App;

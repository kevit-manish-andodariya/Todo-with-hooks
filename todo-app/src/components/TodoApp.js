import { useMemo, useReducer, useState } from "react";
import TodoContext, { todoReducer, initialState } from "../store/context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [filterType, setFilterType] = useState("");

  //returns list of todos based on filterType
  const filteredList = useMemo(() => {
    switch (filterType) {
      case true:
        return state.todos.filter((todo) => todo.completed === true);
      case false:
        return state.todos.filter((todo) => todo.completed === false);
      default:
        return state.todos;
    }
  }, [state.todos, filterType]);

  return (
    <TodoContext.Provider value={dispatch}>
      <h1 className="header">Todo App</h1>
      <TodoForm />
      <div className="filter">
        <h3>Filter</h3>
        <button onClick={() => setFilterType("")}>All</button>
        <button onClick={() => setFilterType(false)}>Pending</button>
        <button onClick={() => setFilterType(true)}>completed</button>
      </div>
      <TodoList todos={filteredList} />
    </TodoContext.Provider>
  );
};

export default TodoApp;

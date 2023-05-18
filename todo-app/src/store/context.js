import { createContext } from "react";

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        todos: [...state.todos, action.payload],
      };
    case "CHECK":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const TodoContext = createContext();

export default TodoContext;
export { todoReducer, initialState };

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

export const initialTodoValue = {
  todos: [
    {
      completed: false,
      id: 0,
      text: "Todo",
    },
  ],
  addTodo: (text: string) => {},
  toggleTodo: (id: number) => {},
  deleteTodo: (id: number) => {},
  setFilter: (filter: string) => {},
};

const TodoContext = createContext(initialTodoValue);

export default TodoContext;

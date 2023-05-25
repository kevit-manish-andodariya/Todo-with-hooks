import { useReducer } from "react";
import TodoContext, { todoReducer, initialState } from "../store/context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={dispatch}>
      <TodoForm />
      <TodoList todos={state.todos} />
    </TodoContext.Provider>
  );
};

export default TodoApp;

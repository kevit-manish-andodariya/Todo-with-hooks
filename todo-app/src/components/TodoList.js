import { useContext, useCallback } from "react";
import TodoContext from "../store/context";

const TodoList = ({ todos }) => {
  const dispatch = useContext(TodoContext);

  const handleTodoToggle = useCallback(
    (id) => {
      dispatch({ type: "CHECK", payload: id });
    },
    [dispatch]
  );

  const handleTodoDelete = useCallback(
    (id) => {
      dispatch({ type: "DELETE", payload: id });
    },
    [dispatch]
  );

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleTodoToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

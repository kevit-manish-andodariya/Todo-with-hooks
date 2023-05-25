import { useContext } from "react";
import TodoContext from "../store/store";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

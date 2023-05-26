import { useContext } from "react";
import TodoContext from "../../store/store";
import Button from "../../components/Button/Button";

/* This is a functional component called `TodoList` that is using the `useContext` hook to access the
`todos`, `toggleTodo`, and `deleteTodo` values from the `TodoContext` object. It then returns a list
of todos with buttons to toggle their completion status and delete them. The `style` property is
used to add a line-through decoration to the todo text if it is completed. */
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
          <Button
            className={todo.completed ? "secondary" : "success"}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.completed ? "Undo" : "Complete"}
          </Button>
          <Button className="danger" onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

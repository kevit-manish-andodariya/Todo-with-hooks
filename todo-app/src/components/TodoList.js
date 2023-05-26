import { useContext, useCallback } from "react";
import TodoContext from "../store/context";

const TodoList = ({ todos }) => {
  const dispatch = useContext(TodoContext);

  //toggles completed state of todo
  const handleTodoToggle = useCallback(
    (id) => {
      dispatch({ type: "CHECK", payload: id });
    },
    [dispatch]
  );

  //handle delete for todo
  const handleTodoDelete = useCallback(
    (id) => {
      dispatch({ type: "DELETE", payload: id });
    },
    [dispatch]
  );

  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div
            onClick={() => handleTodoToggle(todo.id)}
            style={{
              backgroundColor: todo.completed ? "rgba(50,200,50,0.8)" : "",
            }}
          >
            <span>{todo.text}</span>
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

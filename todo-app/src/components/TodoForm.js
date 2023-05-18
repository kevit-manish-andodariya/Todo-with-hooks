import { useContext, useRef } from "react";

import TodoContext from "../store/context";

const TodoForm = () => {
  const dispatch = useContext(TodoContext);
  const newTodo = useRef("");

  const handleInputChange = (event) => {
    newTodo.current = event.target.value;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      dispatch({
        type: "ADD",
        payload: { id: Date.now(), text: newTodo.current, completed: false },
      });
      newTodo.current = "";
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={newTodo.current} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

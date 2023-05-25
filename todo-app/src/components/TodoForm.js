import { useContext, useState } from "react";

import TodoContext from "../store/context";

const TodoForm = () => {
  const dispatch = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      dispatch({
        type: "ADD",
        payload: { id: Date.now(), text: newTodo, completed: false },
      });
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

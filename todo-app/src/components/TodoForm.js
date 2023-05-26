import { useContext, useRef } from "react";

import TodoContext from "../store/context";

const TodoForm = () => {
  const dispatch = useContext(TodoContext);
  const newTodo = useRef();

  //handles change in input feild
  const handleInputChange = (event) => {
    newTodo.current.value = event.target.value;
  };

  //handles addding new todo and clearing input feild
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.current.value.trim()) {
      dispatch({
        type: "ADD",
        payload: {
          id: Date.now(),
          text: newTodo.current.value.trim(),
          completed: false,
        },
      });
      newTodo.current.value = "";
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" ref={newTodo} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

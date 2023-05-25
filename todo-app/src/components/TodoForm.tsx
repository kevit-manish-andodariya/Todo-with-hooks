import { useContext, useRef } from "react";
import TodoContext from "../store/store";

const TodoForm = () => {
  const inputRef = useRef<any>(null);
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

import { useContext } from "react";
import TodoContext from "../store/store";

const TodoForm = ({ inputRef }: any) => {
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      addTodo(inputRef.current.value);
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

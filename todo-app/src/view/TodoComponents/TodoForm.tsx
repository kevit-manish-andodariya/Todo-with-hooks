import { FormEvent, useContext, useRef } from "react";
import TodoContext from "../../store/store";
import Button from "../../components/Button/Button";

/**
 * This is a TodoForm component in TypeScript React that allows users to add new todos.
 * @returns A functional component called `TodoForm` that renders a form with an input field and a
 * button. The input field is assigned a reference using `useRef` hook and the `addTodo` function is
 * obtained from the `TodoContext` using `useContext` hook. When the form is submitted, the
 * `handleSubmit` function is called which prevents the default form submission behavior, checks if the
 * input
 */
const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoForm;

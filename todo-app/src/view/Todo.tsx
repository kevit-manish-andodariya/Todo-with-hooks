import FilterButtons from "./TodoComponents/FilterButtons";
import TodoForm from "./TodoComponents/TodoForm";
import TodoList from "./TodoComponents/TodoList";

/**
 * The Todo function returns a JSX element that renders a Todo App with a form, list, and filter
 * buttons.
 * @returns A functional component named `Todo` is being returned. It renders a heading with the text
 * "Todo App", followed by three child components: `TodoForm`, `TodoList`, and `FilterButtons`. The
 * `<>` and `</>` tags are used to wrap the child components, indicating that they are siblings and not
 * nested within each other.
 */
const Todo = () => {
  return (
    <>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      <FilterButtons />
    </>
  );
};

export default Todo;

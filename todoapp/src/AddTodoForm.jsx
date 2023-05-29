import React, { useContext, useMemo, useRef } from "react";
import { ListContext } from "./App";

/**
 * This is a React component that adds a new task to a list if the input field is not empty.
 * @returns The `AddTodoForm` component is being returned, which is a form that allows the user to
 * input a new task and add it to a list. The form includes an input field and a button to submit the
 * task. When the button is clicked, the `handleSubmit` function is called, which adds the new task to
 * the list using the `dispatch` function from the `ListContext`.
 */

function AddTodoForm(props) {
  const inputRef = useRef(null);

  const context = useContext(ListContext);

  const { state, dispatch } = useMemo(() => context, [context]);

  /**
   * This function adds a new task to a list if the input field is not empty.
   */
  const handleSubmit = () => {
    if (inputRef.current.value) {
      dispatch({
        type: "addTask",
        value: {
          id: state?.listOfToDos?.length + 1,
          name: inputRef?.current?.value,
          completed: false,
        },
      });
      inputRef.current.value = null;
    } else {
    }
  };

  return (
    <div className="add-form-container">
      <form className="add-todo-form" onSubmit={(e) => e.preventDefault()}>
        <input required ref={inputRef} placeholder="Add Task" />

        <button className="addBtn" type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;

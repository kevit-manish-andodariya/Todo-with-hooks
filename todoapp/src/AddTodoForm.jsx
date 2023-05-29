import React, { useContext, useMemo, useRef } from "react";
import { ListContext } from "./App";

function AddTodoForm(props) {
  const inputRef = useRef(null);

  const context = useContext(ListContext);

  const { dispatch } = useMemo(() => context, [context]);

  const handleSubmit = () => {
    if (inputRef.current.value) {
      dispatch({
        type: "addTask",
        value: { name: inputRef?.current?.value, completed: false },
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

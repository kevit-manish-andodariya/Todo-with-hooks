import React, { useContext, useMemo, useState } from "react";
import { todoCotext } from "./TodosContext";

const TodoList = () => {
  const { state, dispatch } = useContext(todoCotext);
  const [showTdo, setShowTdo] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);
  const deleteCompleted = (id) => {
    dispatch({ type: "DELETE",  });
  };
  const memoizedTodoList = useMemo(() => {
    return (
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: "COMPLETE", id:todo.id })}>
              Mark as complete
            </button>
            {/* <button onClick={() => handleRemove(todo.id)}>Remove</button> */}
          </li>
        ))}
      </ul>
    );
  }, [state.todos]);
  const completeTaskListArray = useMemo(() => {
    return (
      <ul className="comppleted-tasks">
        {state.completedTask.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch({ type: "UNDO", id: item.id })}>
              Move to todo task
            </button>
            <button onClick={() => dispatch({ type: "DELETE",id:item.id })}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }, [state.completedTask]);
 

  return (
    <div>
      <div className="buttons-for-filters">
        <button
          onClick={() => {
            setShowCompleted(true);
            setShowTdo(true);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setShowCompleted(false);
            setShowTdo(true);
          }}
        >
          Task to Do
        </button>
        <button
          onClick={() => {
            setShowTdo(false);
            setShowCompleted(true);
          }}
        >
          Completed
        </button>
      </div>
      {showTdo && (
        <>
          <h2>{state.todos?.length > 0 && "Todo Tasks"}</h2>
          <div className="todos-tasks">{memoizedTodoList}</div>
        </>
      )}
      {showCompleted && (
        <>
          {" "}
          <h2>{state.completedTask?.length > 0 && "Completed"}</h2>
          <div className="completed-task">{completeTaskListArray}</div>{" "}
        </>
      )}
    </div>
  );
};

export default TodoList;

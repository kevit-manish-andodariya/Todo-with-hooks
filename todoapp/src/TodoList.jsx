import React, { memo, useContext, useMemo } from "react";
import "./TodoList.css";
import { ListContext } from "./App";

function TodoList() {
  const context = useContext(ListContext);

  const { state, dispatch } = useMemo(() => context, [context]);

  return (
    <div className="task-list-container">
      {state?.listOfToDos?.length > 0 &&
        state?.listOfToDos?.map((task, index) => (
          <div className="task-wrapper" key={index}>
            <div>{task?.name}</div>
            <button
              className={task?.completed ? "incompleteBtn" : "completeBtn"}
              onClick={() => dispatch({ type: "toggleComplete", index })}
            >
              {task?.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <button
              className="deleteBtn"
              onClick={() => dispatch({ type: "deleteTask", index })}
            >
              delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default memo(TodoList);

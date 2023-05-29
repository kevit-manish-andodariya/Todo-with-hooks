import React, { memo, useContext, useMemo } from "react";
import "./TodoList.css";
import { ListContext } from "./App";

function TodoList() {
  const context = useContext(ListContext);

  const { state, dispatch } = useMemo(() => context, [context]);

  const list = state?.filteredList ? state?.filteredList : state?.listOfToDos;

  return (
    <div className="task-list-container">
      {list?.length > 0 &&
        list?.map((task, index) => (
          <div
            className={`task-wrapper ${
              task?.completed ? "completed-task " : ""
            } `}
            key={index}
          >
            <span>{task?.name}</span>
            <div>
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
          </div>
        ))}
    </div>
  );
}

export default memo(TodoList);

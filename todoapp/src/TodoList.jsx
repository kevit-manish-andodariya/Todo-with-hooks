import React, { memo, useContext, useMemo } from "react";
import "./TodoList.css";
import { ListContext } from "./App";

/**
 * This is a React functional component that renders a list of tasks with options to mark them as
 * complete or incomplete and delete them.
 * @returns The `TodoList` component is returning a list of tasks (to-dos) with their names, completion
 * status, and buttons to mark them as complete/incomplete or delete them. The list is obtained from
 * the `state` object using `useContext` and `useMemo` hooks. The `dispatch` function is used to update
 * the state when a task is marked as complete/incomplete or
 */
function TodoList() {
  const context = useContext(ListContext);

  const { state, dispatch } = useMemo(() => context, [context]);

  const list =
    state?.filter === "completed"
      ? state?.listOfToDos?.filter((e) => e?.completed)
      : state?.filter === "todo"
      ? state?.listOfToDos?.filter((e) => !e?.completed)
      : state?.listOfToDos;

  return (
    <div className="task-list-container">
      {list?.length > 0 &&
        list?.map((task) => (
          <div
            className={`task-wrapper ${
              task?.completed ? "completed-task " : ""
            } `}
            key={`${task?.id}-${task?.name}`}
          >
            <span>{task?.name}</span>
            <div>
              <button
                className={task?.completed ? "incompleteBtn" : "completeBtn"}
                onClick={() =>
                  dispatch({ type: "toggleComplete", id: task?.id })
                }
              >
                {task?.completed ? "Mark as Incomplete" : "Mark as Complete"}
              </button>
              <button
                className="deleteBtn"
                onClick={() => dispatch({ type: "deleteTask", id: task?.id })}
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

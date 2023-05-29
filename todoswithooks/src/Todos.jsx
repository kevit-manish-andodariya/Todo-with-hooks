import React, { useRef, useMemo, useReducer } from "react";
import { todoReducer } from "./Components/Reducer";
import './Todos.css'

const initialState = {
  todos: [],
  completedTask: [],
};

const Todos = () => {
  const todoInputRef = useRef(null);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleCompleted = (id) => {
    const completedTaskList = state.todos.filter((task) => task.id === id);
    const todos = state.todos.filter((todo) => todo.id !== id);
    dispatch({ type: "COMPLETE", payload: { todos, completedTaskList } });
  };
  const handleAddTask = () => {
    const text = todoInputRef.current.value;
    if (text.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text,
      };
      dispatch({ type: "ADD", payload: newTodo });
      todoInputRef.current.value = "";
    }
  };
  // const handleRemove = (id) => {
  //   dispatch({ type: "REMOVE", payload: id });
  // };
  const deleteCompleted = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const moveToTodoTask = (id) => {
    const todos = state.completedTask.filter((task) => task.id === id);
    const completedTaskList = state.completedTask.filter(
      (todo) => todo.id !== id
    );
    dispatch({ type: "UNDO", payload: { todos, completedTaskList } });
  };

  const memoizedTodoList = useMemo(() => {
    return (
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleCompleted(todo.id)}>
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
      <ul className="comppleted-tasks" >
        {state.completedTask.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => moveToTodoTask(item.id)}>
              Move to todo task
            </button>
            <button onClick={() => deleteCompleted(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }, [state.completedTask]);

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" ref={todoInputRef} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <h2>{state.todos?.length>0 && 'Todo Tasks'}</h2>
      <div  className="todos-tasks">{memoizedTodoList}</div>
        <h2>{state.completedTask?.length>0 &&  'Completed'}</h2>
      <div className="completed-task">
        {completeTaskListArray}
      </div>
    </div>
  );
};

export default Todos;

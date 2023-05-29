import React, { useRef, useMemo, useReducer } from 'react';


const initialState = {
  todos: [],
  completedTask:[],
};
// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'COMPLETE':
      console.log(action.payload);
      return {
        ...state,
        todos:[...action.payload.todos],
        completedTask: [...state.completedTask,...action.payload.completedTaskList]
      }  
    default:
      return state;
  }
}

const Todos = () => {
  const todoInputRef = useRef(null);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleCompleted = (id) => {
    const completedTaskList = state.todos.filter((task)=> task.id === id)
   const todos =state.todos.filter((todo) => todo.id !== id)
    dispatch({type:'COMPLETE', payload:{todos,completedTaskList}})
    
     
  }
  const memoizedTodoList = useMemo(() => {
    return (
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>handleCompleted(todo.id)}>Mark as complete</button>                                                                                          
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  }, [state.todos]);
  const completeTaskListArray = useMemo(() => {
    return (
      <ul>
        {state.completedTask.map((item) => (

          <li key={item.id}>
            {console.log(item)}
            {item.text}
          </li>
        ))}
      </ul>
    );
  }, [state.completedTask]);
  const handleAddTask = () => {
    const text = todoInputRef.current.value;
    if (text.trim() !== '') {
      const newTodo = {
        id:new Date().getTime(),
        text,
      };
      dispatch({ type: 'ADD', payload: newTodo });
      todoInputRef.current.value = '';
    }
  };
  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" ref={todoInputRef} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
      {memoizedTodoList}
      </div>
      <div className="completed-task">
        <h2>Completed</h2>
        {completeTaskListArray}
      </div>
    </div>
  );
}

export default Todos;

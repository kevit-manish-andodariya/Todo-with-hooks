export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "COMPLETE":
      const completedTaskList = state.todos.filter((task) => task.id === action.id);
      const todos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos,
        completedTask:[...state.completedTask,...completedTaskList],
      };
    case "DELETE":
      return {
        ...state,
        completedTask: state.completedTask.filter(
          (todo) => todo.id !== action.id
        ),  
      };
    case "UNDO": 
    const todoCompleted = state.completedTask.filter((task) => task.id === action?.id);
    const todocompletedTaskList = state.completedTask.filter(
      (todo) => todo.id !== action?.id
    );
      return {
        ...state,
        todos:[...state.todos,...todoCompleted],
        completedTask:todocompletedTaskList
      };
    
    default:
      return state;
  }
};

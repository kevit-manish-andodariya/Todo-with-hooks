export const todoReducer = (state, action) => {
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
        return {
          ...state,
          todos:[...action.payload.todos],
          completedTask: [...state.completedTask,...action.payload.completedTaskList]
        }  
      case "DELETE":
        return {
            ...state,
            completedTask:state.completedTask.filter((todo) => todo.id !== action.payload)
        }  
      case 'UNDO':{
        return {
            ...state,
            todos:[...state.todos,...action.payload.todos,],
          completedTask: [...action.payload.completedTaskList]

        }
      }  
      default:
        return state;
    }
}
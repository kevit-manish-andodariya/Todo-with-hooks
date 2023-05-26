import { Todo, TodoAction } from "../../models/todo";

/**
 * This is a TypeScript function that takes in a state and an action, and returns a new state based on
 * the action type.
 * @param {Todo} state - The current state of the todo list, which is an object with two properties:
 * "todos" (an array of todo items) and "filter" (a string representing the current filter applied to
 * the todo list).
 * @param {TodoAction} action - The `action` parameter is an object that describes the type of action
 * being performed and any additional data (payload) associated with it. It is used in the `switch`
 * statement to determine which action to perform on the state.
 * @returns The `todoReducer` function returns a new state object based on the action type and payload
 * provided. If the action type is "ADD_TODO", a new state object is returned with the new todo item
 * added to the `todos` array. If the action type is "TOGGLE_TODO", a new state object is returned with
 * the completed status of the todo item with the matching id toggled. If
 */
const todoReducer = (state: Todo, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;

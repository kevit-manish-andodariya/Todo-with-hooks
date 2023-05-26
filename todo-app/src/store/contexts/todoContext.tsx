import { useCallback, useMemo, useReducer } from "react";
import TodoContext from "../store";
import todoReducer from "../reducers/todoReducer";
import { ProviderProps, Todo } from "../../models/todo";

const initialState: Todo = {
  todos: [],
  filter: "all",
};

/**
 * This is a TodoContextProvider component that uses useReducer and useCallback hooks to manage state
 * and provide functions for adding, toggling, deleting, and filtering todos.
 * @param {ProviderProps}  - - `children`: The child components that will be wrapped by the
 * `TodoContextProvider` and have access to the context values.
 * @returns The TodoContextProvider component is being returned.
 */
const TodoContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Function to add a new todo item
  const addTodo = useCallback(
    (text: string) => {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text, completed: false },
      });
    },
    [dispatch]
  );

  // Function to toggle the completion status of a todo item
  const toggleTodo = useCallback(
    (id: number) => {
      dispatch({ type: "TOGGLE_TODO", payload: id });
    },
    [dispatch]
  );

  // Function to delete a todo item
  const deleteTodo = useCallback(
    (id: number) => {
      dispatch({ type: "DELETE_TODO", payload: id });
    },
    [dispatch]
  );

  // Function to set the filter for displaying todos
  const setFilter = useCallback(
    (filter: string) => {
      dispatch({ type: "SET_FILTER", payload: filter });
    },
    [dispatch]
  );

  // Memoized computation of filtered todos based on the current filter value
  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case "todo":
        return state.todos.filter((todo) => !todo.completed);
      case "completed":
        return state.todos.filter((todo) => todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

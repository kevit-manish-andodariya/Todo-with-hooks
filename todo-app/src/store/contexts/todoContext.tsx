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
 * @param {Props}  - - `children`: The child components that will be wrapped by the
 * `TodoContextProvider` and have access to the context values.
 * @returns The TodoContextProvider component is being returned.
 */
const TodoContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = useCallback(
    (text: string) => {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text, completed: false },
      });
    },
    [dispatch]
  );

  const toggleTodo = useCallback(
    (id: number) => {
      dispatch({ type: "TOGGLE_TODO", payload: id });
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (id: number) => {
      dispatch({ type: "DELETE_TODO", payload: id });
    },
    [dispatch]
  );

  const setFilter = useCallback(
    (filter: string) => {
      dispatch({ type: "SET_FILTER", payload: filter });
    },
    [dispatch]
  );

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

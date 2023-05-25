import { ReactNode, useCallback, useMemo, useReducer } from "react";
import TodoContext from "../store";
import todoReducer, { Todo } from "../reducers/todoReducer";

interface Props {
  children: ReactNode;
}

const initialState: Todo = {
  todos: [],
  filter: "all",
};

const TodoContextProvider = ({ children }: Props) => {
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

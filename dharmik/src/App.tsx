import { useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import TodoContext from "./store/store";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import FilterButtons from "./components/FilterButtons";

interface Todo {
  todos: {
    completed: boolean;
    id: number;
    text: string;
  }[];
  filter: string;
}

const initialState: Todo = {
  todos: [],
  filter: "all",
};

function todoReducer(state: Todo, action: any) {
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
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<any>(null);

  const addTodo = useCallback(
    (text: string) => {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text, completed: false },
      });
      inputRef.current.value = "";
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
      <h1>Todo App</h1>
      <TodoForm inputRef={inputRef} />
      <TodoList />
      <FilterButtons />
    </TodoContext.Provider>
  );
}

export default App;

import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import FilterButtons from "./components/FilterButtons";
import TodoContextProvider from "./store/contexts/todoContext";

function App() {
  return (
    <TodoContextProvider>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      <FilterButtons />
    </TodoContextProvider>
  );
}

export default App;

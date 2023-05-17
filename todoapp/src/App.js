import AddTodo from "./AddTodo";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="app-root-container">
      <h1>React TODO App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

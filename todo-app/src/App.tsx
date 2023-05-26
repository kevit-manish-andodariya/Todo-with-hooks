import "./App.css";
import TodoContextProvider from "./store/contexts/todoContext";
import Todo from "./view/Todo";

function App() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}

export default App;

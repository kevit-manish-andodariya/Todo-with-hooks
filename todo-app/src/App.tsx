import "./App.css";
import TodoContextProvider from "./store/contexts/todoContext";
import Todo from "./view/Todo";

/**
 * Returns a JSX element that wraps a Todo component inside a TodoContextProvider.
 * @return {JSX.Element} The wrapped Todo component.
 */
const App = () => {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
};

export default App;

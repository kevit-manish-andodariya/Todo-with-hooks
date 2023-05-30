import "./App.css";
import Todos from "./Todos";
import {useReducer} from 'react'
import { todoCotext } from "./TodosContext";
import { todoReducer } from "./Components/Reducer";




function App() {
  const initialState = {
    todos: [],
    completedTask: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <todoCotext.Provider value={{state,dispatch}}>
        <Todos />
      </todoCotext.Provider>
    </div>
  );
}

export default App;

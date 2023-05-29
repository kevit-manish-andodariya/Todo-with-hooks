import './App.css';
import { useReducer, createContext } from "react"
import Todolist from "./component/todolist"
import TodoForm from "./component/todoForm"

export const TodoListContext = createContext( { state: {}, dispatch: () => { } } );

export function reducerFunc ( state, action )
{
  switch ( action?.type )
  {
    
    case "add":
      return { listOfToDos: [ ...state.listOfToDos, action?.payload ] };
    case "delete":
      return {
        listOfToDos: state?.listOfToDos?.filter(
          ( e, index ) => index !== action?.i
        ),
      };
    case "complete":
      return {
        listOfToDos: state?.listOfToDos?.map( ( e, index ) =>
        {
          if ( index === action?.i )
          {
            return { ...e, isComplete: !e?.isComplete };
          }
          return e;
        } ),
      };
    default:
      return state
  }
}


function App ()
{

  const [ state, dispatch ] = useReducer( reducerFunc, { listOfToDos: [] } );

  return (
    <div className="App">


      <h1>TODO</h1>
      <TodoForm dispatch={ dispatch } />
      <TodoListContext.Provider value={ { state, dispatch } }>
        <Todolist />
      </TodoListContext.Provider>
    </div>
  );
}

export default App;

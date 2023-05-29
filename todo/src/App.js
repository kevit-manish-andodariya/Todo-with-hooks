import './App.css';
import { useReducer, createContext } from "react"
import Todolist from "./component/todolist"
import TodoForm from "./component/todoForm"

// context..
export const TodoListContext = createContext( { state: {}, dispatch: () => { } } );

// reducer function which store state and update state..
export function reducerFunc ( state, action )
{
  switch ( action?.type )
  {
    
    case "add":
      return { ...state, listOfToDos: [ ...state.listOfToDos, action?.payload ] };
    case "delete":
      return {
        ...state,
        listOfToDos: state?.listOfToDos?.filter(
          ( e, index ) => index !== action?.i
        ),
      };
    case "complete":
      return {
        ...state,
        listOfToDos: state?.listOfToDos?.map( ( e, index ) =>
        {
          if ( index === action?.i )
          {
            return { ...e, isComplete: !e?.isComplete };
          }
          return e;
        } ),
      };
    case "filter":
      return { ...state, filter: action.payload }


    default:
      return state
  }
}


function App ()
{
  const [ state, dispatch ] = useReducer( reducerFunc, { listOfToDos: [], filter: "all" } );
  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoListContext.Provider value={ { state, dispatch } }>
        <TodoForm />      
        <Todolist />
      </TodoListContext.Provider>
      <br />
      <div>
        <button onClick={ () => dispatch( { type: "filter", payload: "all" } ) }>All</button>
        <button onClick={ () => dispatch( { type: "filter", payload: "todo" } ) }>Todo</button>
        <button onClick={ () => dispatch( { type: "filter", payload: "completed" } ) }>Completed</button>
      </div>

    </div>
  );
}

export default App;

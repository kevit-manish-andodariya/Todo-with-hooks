import './App.css';
import { useReducer, useRef, createContext } from "react"
import Todolist from "./component/todolist"


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
  const inputref = useRef( null )
  const saveToDo = () =>
  {
    if ( !inputref.current.value )
    {
      alert( "Please add a text" );
      return;
    }
    dispatch( { type: "add", payload: { name: inputref.current.value, isComplete: false } } )
    inputref.current.value = ""
  }
  return (
    <div className="App">


      <h1>TODO</h1>
      <input placeholder="Task Name" ref={ inputref } />&nbsp;
      <button onClick={ saveToDo }>Add Todo</button>


      <TodoListContext.Provider value={ { state, dispatch } }>
        <Todolist />
      </TodoListContext.Provider>
    </div>
  );
}

export default App;

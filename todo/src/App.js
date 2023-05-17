import './App.css';
import { useRef, useState } from "react"

function App ()
{
  const [ text, setText ] = useState( '' )
  const [ tasks, setTasks ] = useState( [] )
  const inputref = useRef( {} )
  const savetodo = () =>
  {
    if ( !text || !setText )
    {
      alert( "Please add a text" );
      return;
    }
    setTasks( [ ...tasks, text ] );
    setText( '' );
  }
  return (
    <div className="App">
      <h1>TODO</h1>
      <input placeholder="Task Name" onChange={ ( e ) => setText( e.target.value ) } value={ text } ref={ inputref } />&nbsp;
      <button onClick={ () => savetodo() }>Add Todo</button>
      { tasks.map( ( stask, i ) => <h2 key={ i }>{ stask }</h2> ) }
    </div>
  );
}

export default App;

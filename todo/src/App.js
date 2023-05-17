import './App.css';

function App ()
{
  const savetodo = () =>
  {
    alert()
  }
  return (
    <div className="App">
      <h1>TODO</h1>
      <input name="todo" />&nbsp;
      <button onClick={ () => savetodo() }>Add Todo</button>

    </div>
  );
}

export default App;

import React, { createRef } from 'react'
const todoForm = ( props ) =>
{
    const inputref = createRef( null )
    const { dispatch } = props

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
        <div>
            <input placeholder="Task Name" ref={ inputref } />&nbsp;
            <button onClick={ saveToDo }>Add Todo</button>
        </div>
    )
}
export default todoForm
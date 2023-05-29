import React, { createRef, useContext, useMemo } from 'react'
import { TodoListContext } from "../App";

export default function TodoForm ()
{
    const inputref = createRef( null )
    const context = useContext( TodoListContext );
    const { state, dispatch } = useMemo( () => context, [ context ] );

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

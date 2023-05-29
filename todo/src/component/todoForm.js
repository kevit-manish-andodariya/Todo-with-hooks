import React, { forwardRef } from 'react'

const TodoForm = forwardRef( ( props, ref ) =>
{
    const { inputref, saveToDo } = props
    return (
        <div>
            <input placeholder="Task Name" ref={ inputref } />&nbsp;
            <button onClick={ saveToDo }>Add Todo</button>
        </div>
    )
} )
export default TodoForm
import React, { useContext, useMemo } from "react";
import { TodoListContext } from "../App";

export default function Todolist ()
{
    const context = useContext( TodoListContext );
    const { state, dispatch } = useMemo( () => context, [ context ] );
    return (
        <>
            {
                state?.listOfToDos?.map( ( stask, i ) => (
                    <div key={ i }>
                        <h2 key={ i }>{ stask.name }</h2>
                        { stask?.isComplete ? "Completed" : "Incomplete" }
                        <button
                            onClick={ () => dispatch( { type: "complete", i } ) }
                        >
                            change status
                        </button>
                        <button
                            onClick={ () => dispatch( { type: "delete", i } ) }
                        >
                            delete
                        </button>
                    </div> ) )
            }
        </>
    )
}

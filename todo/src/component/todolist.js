import React, { useContext, useMemo } from "react";
import { TodoListContext } from "../App";

export default function Todolist ()
{
    const context = useContext( TodoListContext );
    const { state, dispatch } = useMemo( () => context, [ context ] );

    const listOfToDos =
        state?.filter === "completed"
            ? state?.listOfToDos?.filter( ( e ) => e?.isComplete )
            : state?.filter === "todo"
                ? state?.listOfToDos?.filter( ( e ) => !e?.isComplete )
                : state?.listOfToDos;

    return (
        <>
            {
                listOfToDos?.map( ( stask, i ) => (
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

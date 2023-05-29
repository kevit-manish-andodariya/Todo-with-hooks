/**
 * This is a reducer function that handles different actions to update the state of a to-do list app.
 * @param state - The current state of the application, which is an object containing a list of to-do
 * items and a filter value.
 * @param action - The `action` parameter is an object that describes the action being performed. It
 * typically has a `type` property that indicates the type of action being performed, and may also have
 * additional properties such as `value` or `index` that provide additional information about the
 * action. The reducer function uses the
 * @returns The function `reducerFunction` returns an object with a `listOfToDos` property and possibly
 * a `filteredList` property, depending on the action type. The `listOfToDos` property is updated based
 * on the action type, either by adding a new task, deleting a task, or toggling the completion status
 * of a task. The `filteredList` property is updated based
 */
export default function reducerFunction(state, action) {
  switch (action?.type) {
    case "addTask":
      return { ...state, listOfToDos: [...state.listOfToDos, action?.value] };
    case "deleteTask":
      return {
        ...state,
        listOfToDos: state?.listOfToDos?.filter((e) => e?.id !== action?.id),
      };
    case "toggleComplete":
      return {
        ...state,
        listOfToDos: state?.listOfToDos?.map((e) => {
          if (e?.id === action?.id) {
            return { ...e, completed: !e?.completed };
          }
          return e;
        }),
      };
    case "filterTodo":
      return {
        ...state,
        filter: action.value,
      };

    default:
      return "Something went wrong";
  }
}

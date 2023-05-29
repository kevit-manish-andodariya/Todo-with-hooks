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
        listOfToDos: state?.listOfToDos?.filter(
          (e, index) => index !== action?.index
        ),
      };
    case "toggleComplete":
      return {
        listOfToDos: state?.listOfToDos?.map((e, i) => {
          if (i === action?.index) {
            return { ...e, completed: !e?.completed };
          }
          return e;
        }),
      };
    case "filterTodo":
      if (action?.value === "completed") {
        return {
          ...state,
          filter: action.value,
          filteredList: state?.listOfToDos?.filter((e) => e?.completed),
        };
      } else if (action?.value === "todo") {
        return {
          ...state,
          filter: action.value,
          filteredList: state?.listOfToDos?.filter((e) => !e?.completed),
        };
      } else {
        return {
          ...state,
          filter: action.value,
          filteredList: state?.listOfToDos,
        };
      }

    default:
      return "Something went wrong";
  }
}

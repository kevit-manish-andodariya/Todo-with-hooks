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

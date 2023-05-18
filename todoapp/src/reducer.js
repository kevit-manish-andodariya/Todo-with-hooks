export default function reducerFunction(state, action) {
  switch (action?.type) {
    case "addTask":
      return { listOfToDos: [...state.listOfToDos, action?.value] };
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
    default:
      return "Something went wrong";
  }
}

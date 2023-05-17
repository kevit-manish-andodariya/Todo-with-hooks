export default function reducerFunction(state, action) {
  switch (action?.type) {
    case "addTask":
      return { listOfToDos: [...state.listOfToDos, action?.value] };
    case "deleteTask":
      return {
        listOfToDos: state?.listOfToDos?.filter(
          (task) => task !== action?.value
        ),
      };
    default:
      return "Something went wrong";
  }
}

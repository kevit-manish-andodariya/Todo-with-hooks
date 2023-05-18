import { useContext } from "react";
import TodoContext from "../store/store";

const FilterButtons = () => {
  const { setFilter } = useContext(TodoContext);

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("todo")}>Todo</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default FilterButtons;

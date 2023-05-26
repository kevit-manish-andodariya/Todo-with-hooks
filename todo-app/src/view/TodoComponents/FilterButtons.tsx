import { useContext } from "react";
import TodoContext from "../../store/store";

/**
 * This is a functional component that renders three filter buttons and sets the filter state based on
 * the button clicked.
 * @returns The `FilterButtons` component is being returned, which renders three buttons with different
 * filter options. When a button is clicked, it calls the `setFilter` function from the `TodoContext`
 * to update the filter state.
 */
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

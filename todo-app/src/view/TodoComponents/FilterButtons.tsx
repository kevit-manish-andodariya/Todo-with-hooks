import { useContext } from "react";
import TodoContext from "../../store/store";
import Button from "../../components/Button/Button";

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
    <div className="filter-buttons">
      <Button onClick={() => setFilter("all")}>All</Button>
      <Button className="secondary" onClick={() => setFilter("todo")}>
        Todo
      </Button>
      <Button className="success" onClick={() => setFilter("completed")}>
        Completed
      </Button>
    </div>
  );
};

export default FilterButtons;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setPriority } from "../features/todoSlice";

// TaskList component for displaying and managing the list of tasks
const TaskList = () => {
  const todos = useSelector((state) => state.todos); // Access the todos state from Redux store
  const dispatch = useDispatch();

  return (
    <ul>
      {/* Map through the todos array and render each task */}
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>
            {/* Display task text and city */}
            <span>{todo.text}</span>
            <span> - {todo.city}</span>
            {/* Display weather information if available */}
            {todo.weather && todo.temperature && (
              <span>
                {" "}
                ({todo.weather}, {todo.temperature}°C)
              </span>
            )}
          </div>
          {/* Dropdown to set task priority */}
          <select
            value={todo.priority}
            onChange={(e) =>
              dispatch(setPriority({ id: todo.id, priority: e.target.value }))
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {/* Button to delete the task */}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

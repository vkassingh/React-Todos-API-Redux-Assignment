import { createSlice } from "@reduxjs/toolkit";

// Create a slice for managing todos.
const todoSlice = createSlice({
  // The name of the slice, used to identify it in the Redux store.
  name: "todos",

  // The initial state of the slice, which is an empty array in this case.
  initialState: [],

  // Define the reducers, which are functions that handle state updates.
  reducers: {
    // Reducer to add a new todo to the state.
    addTodo: (state, action) => {
      // Push the new todo (provided in the action payload) into the state array.
      state.push(action.payload);
    },

    // Reducer to delete a todo from the state.
    deleteTodo: (state, action) => {
      // Return a new array that excludes the todo with the specified ID (provided in the action payload).
      return state.filter((todo) => todo.id !== action.payload);
    },

    // Reducer to set the priority of a specific todo.
    setPriority: (state, action) => {
      // Destructure the `id` and `priority` from the action payload.
      const { id, priority } = action.payload;

      // Find the todo in the state array that matches the given ID.
      const todo = state.find((todo) => todo.id === id);

      // If the todo is found, update its priority.
      if (todo) {
        todo.priority = priority;
      }
    },
  },
});

// Export the action creators for the reducers, so they can be dispatched in components.
export const { addTodo, deleteTodo, setPriority } = todoSlice.actions;

export default todoSlice.reducer;

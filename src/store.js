// Import the `configureStore` function from Redux Toolkit.
// This function simplifies the creation of a Redux store with good defaults.
import { configureStore } from "@reduxjs/toolkit";

// Import the `todoReducer` from the `todoSlice` file.
// This reducer handles state management for the "todos" feature.
import todoReducer from "./features/todoSlice";

// Import the `authReducer` from the `authSlice` file.
// This reducer handles state management for the "auth" feature (e.g., user authentication).
import authReducer from "./features/authSlice";

// Create the Redux store using `configureStore`.
const store = configureStore({
  // Define the `reducer` object, which combines all the reducers for the application.
  reducer: {
    // The `todos` key maps to the `todoReducer`, managing the state for todos.
    todos: todoReducer,

    // The `auth` key maps to the `authReducer`, managing the state for authentication.
    auth: authReducer,
  },
});

// Export the configured store as the default export.
// This store will be used in the `Provider` component to make the state available to the entire app.
export default store;

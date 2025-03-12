import "./styles.css";
import React from "react";

// Import the `useSelector` hook from React Redux to access the Redux store state.
import { useSelector } from "react-redux";
import TaskInput from "./components/TaskInput";

import TaskList from "./components/TaskList";
import Login from "./components/Login";

const App = () => {
  // Use the `useSelector` hook to access the `isAuthenticated` value from the Redux store.
  // This determines whether the user is logged in or not.
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {/* Conditional rendering based on the user's authentication status. */}
      {isAuthenticated ? (
        // If the user is authenticated, render the `TaskInput` and `TaskList` components.
        <>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        // If the user is not authenticated, render the `Login` component.
        <Login />
      )}
    </div>
  );
};

export default App;

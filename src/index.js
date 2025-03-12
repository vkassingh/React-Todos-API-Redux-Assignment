import React from "react";

// Import `ReactDOM` for rendering
import ReactDOM from "react-dom/client";

// Import the `Provider` component from React Redux to connect the Redux store to the React app.
import { Provider } from "react-redux";

// Import the main `App` component, which is the root component of the application.
import App from "./App";

// Import the Redux store, which holds the global state of the application.
import store from "./store";
import "./styles.css";

// Create a root for the React application using `ReactDOM.createRoot`.
// This is the entry point for rendering the app.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application inside the root.
root.render(
  // Wrap the entire app with the `Provider` component and pass the Redux store as a prop.
  // This makes the Redux store available to all components in the app.
  <Provider store={store}>
    {/* Render the `App` component, which is the root component of the application. */}
    <App />
  </Provider>
);

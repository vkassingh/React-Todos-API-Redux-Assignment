// Import the `createSlice` function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for authentication-related state and actions
const authSlice = createSlice({
  // Name of the slice, used to identify it in the Redux store
  name: "auth",

  // Initial state for the slice
  initialState: { isAuthenticated: false }, // By default, the user is not authenticated

  // Reducers define how the state can be updated
  reducers: {
    // `login` action: sets `isAuthenticated` to `true`
    login: (state) => {
      state.isAuthenticated = true;
    },
    // `logout` action: sets `isAuthenticated` to `false`
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// Export the action creators (`login` and `logout`) for use in components
export const { login, logout } = authSlice.actions;

// Export the reducer function to be used in the Redux store
export default authSlice.reducer;

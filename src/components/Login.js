import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";

// Login component for handling user login
const Login = () => {
  const dispatch = useDispatch();

  // Function to handle login action
  const handleLogin = () => {
    dispatch(login()); // Dispatch the login action from authSlice
  };

  return (
    <div>
      {/* Login button that triggers handleLogin on click */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

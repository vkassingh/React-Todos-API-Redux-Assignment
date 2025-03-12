import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import getWeather from "../services/weatherApi";

// TaskInput component for adding new tasks with weather information
const TaskInput = () => {
  const [task, setTask] = useState(""); // State for task input
  const [city, setCity] = useState(""); // State for city input
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = async () => {
    if (task.trim() && city.trim()) {
      try {
        // Fetch weather data for the specified city
        const weatherData = await getWeather(city);
        console.log("Weather Data:", weatherData); // Debug: Log the API response

        // Dispatch the addTodo action with the new task and weather data
        dispatch(
          addTodo({
            id: Date.now(), // Unique ID for the task
            text: task,
            priority: "Medium", // Default priority
            city: city,
            weather: weatherData.weather[0].description,
            temperature: weatherData.main.temp, // Ensure this matches the API response
          })
        );

        // Clear input fields after adding the task
        setTask("");
        setCity("");
      } catch (error) {
        // Handle errors in fetching weather data
        alert("Failed to fetch weather data. Please try again.");
      }
    } else {
      // Alert if either task or city input is empty
      alert("Please enter both a task and a city.");
    }
  };

  return (
    <div>
      {/* Input field for task */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      {/* Input field for city */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      {/* Button to add the task */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

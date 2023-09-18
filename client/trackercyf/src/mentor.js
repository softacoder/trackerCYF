// User stories we use when creating code.
// As a mentor, I want to see the list of the homework
// As a mentor, I want to add modules with tasks to the list of homework

// version 1. this code is a duplicate of the version1 in trainee.js.
// It will be necessary to add permission to add and delete modules and tasks. this version has tickbox, modules, tasks, submit button
import React, { useState } from "react";

function Mentor() {
  // State variables for the TaskTracker component
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [currentModule, setCurrentModule] = useState("Module 1");
  const [currentTask, setCurrentTask] = useState("Task 1");

  const handleCheckboxChange = () => {
    setTaskCompleted(!taskCompleted);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Task Completed:", taskCompleted);
    console.log("Feedback:", feedback);

    setFeedback("");
    // Update the current module and task based on your application's logic
    // setCurrentModule(newModule);
    // setCurrentTask(newTask);
  };

  return (
    <div>
      <h2>Mentor Dashboard</h2>
      <p>
        Welcome to the Mentor Dashboard. Here, you can oversee trainee progress
        and provide guidance.
      </p>

      <div>
        <h3>Task Tracker</h3>
        <p>Module: {currentModule}</p>
        <p>Task: {currentTask}</p>
        <label>
          <input
            type="checkbox"
            checked={taskCompleted}
            onChange={handleCheckboxChange}
          />
          Task Completed
        </label>
        <br />
        <textarea
          placeholder="Provide feedback..."
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Other mentor-specific content */}
    </div>
  );
}

export default Mentor;

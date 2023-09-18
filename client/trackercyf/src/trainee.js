// User stories we can use when we code.
// As a trainee, I want to see what  homework I have in my list of homework
// As a trainee, I want to submit my finished tasks

// Version1. this version has tickbox, modules, tasks, submit button

import React, { useState } from "react";

function Trainee() {
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
      <h2>Trainee Dashboard</h2>
      <p>
        Welcome to the Trainee Dashboard. Here, you can track your tasks and
        progress.
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

      {/* Other trainee-specific content */}
    </div>
  );
}

export default Trainee;

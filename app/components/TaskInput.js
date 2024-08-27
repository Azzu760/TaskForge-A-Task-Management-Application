import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const TaskInput = ({ addTaskToProject }) => {
  const [taskContent, setTaskContent] = useState("");

  const handleAddTask = () => {
    if (taskContent.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        content: taskContent,
        dateModified: new Date().toLocaleString(),
      };
      addTaskToProject(newTask);
      setTaskContent(""); // Clear input field after adding task
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="flex items-center bg-white p-2 rounded-md shadow-md">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        onKeyDown={handleKeyDown}
        className="outline-none flex-grow p-2 text-gray-700"
      />
      <button
        onClick={handleAddTask}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
      >
        <FaPlus className="mr-1" />
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;

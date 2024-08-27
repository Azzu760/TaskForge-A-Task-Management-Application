import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

// Define a mapping of stages to colors
const stageColors = {
  TODO: "bg-blue-100",
  InProgress: "bg-yellow-100",
  Done: "bg-green-100",
  Default: "bg-gray-200",
};

const TaskContainer = ({ title, tasks, onDropTask, onDeleteTask, stage }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      onDropTask(item, stage); // Pass the current stage to moveTask in ProjectPage
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  // Get the color for the current stage or default to gray
  const containerColor = stageColors[stage] || stageColors.Default;

  return (
    <div
      ref={drop}
      className={`flex-1 min-w-[200px] p-4 rounded-md ${
        isOver ? "bg-opacity-80" : "bg-opacity-100"
      } ${containerColor}`}
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks available</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={() => onDeleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskContainer;

import React from "react";
import { useDrag } from "react-dnd";
import { Card, CardContent } from "@mui/material";
import { FaGripVertical, FaTrash } from "react-icons/fa";

// Array of color schemes with background and text colors
const colorSchemes = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33A0",
  "#33FFF4",
  "#C733FF",
  "#FF9633",
  "#33FF9A",
  "#FF5733",
];

// Mapping for task colors
const taskColors = new Map();

// Calculate luminance to determine text color
const getLuminance = (color) => {
  const r = parseInt(color.slice(1, 3), 16) / 255;
  const g = parseInt(color.slice(3, 5), 16) / 255;
  const b = parseInt(color.slice(5, 7), 16) / 255;
  const a = [r, g, b].map((val) =>
    val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4
  );
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const getTextColor = (backgroundColor) => {
  return getLuminance(backgroundColor) > 0.5 ? "#000000" : "#FFFFFF";
};

const getTaskColor = (taskId) => {
  if (!taskColors.has(taskId)) {
    const colorIndex = taskColors.size % colorSchemes.length;
    taskColors.set(taskId, colorSchemes[colorIndex]);
  }
  return taskColors.get(taskId);
};

const TaskCard = ({ task, deleteTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { ...task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const cardColor = getTaskColor(task.id);
  const textColor = getTextColor(cardColor);

  return (
    <Card
      ref={drag}
      className={`mb-2 cursor-move shadow-md ${isDragging ? "opacity-50" : ""}`}
      style={{ backgroundColor: cardColor, color: textColor }}
    >
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center">
          <FaGripVertical className="mr-2" style={{ color: textColor }} />
          <span className="font-semibold" style={{ color: textColor }}>
            {task.content}
          </span>
        </div>
        <button
          onClick={deleteTask}
          className="text-red-500 hover:text-red-700"
          style={{ color: textColor }}
        >
          <FaTrash />
        </button>
      </CardContent>
      <div className="text-xs p-2" style={{ color: textColor }}>
        Last modified: {task.dateModified}
      </div>
    </Card>
  );
};

export default TaskCard;

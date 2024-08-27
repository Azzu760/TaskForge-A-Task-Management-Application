"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import TaskContainer from "../../components/TaskContainer";
import TaskInput from "../../components/TaskInput";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaSearch } from "react-icons/fa";

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [projects, setProjects] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [projectTasks, setProjectTasks] = useState({
    TODO: [],
    InProgress: [],
    Done: [],
  });

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || {};
    setProjects(savedProjects);
    if (savedProjects[id]) {
      setProjectTasks(savedProjects[id]);
    } else {
      router.push("/board");
    }
  }, [id, router]);

  const addTaskToProject = (task) => {
    const updatedTasks = { ...projectTasks };
    updatedTasks["TODO"] = [...(updatedTasks["TODO"] || []), task];
    const updatedProjects = { ...projects, [id]: updatedTasks };
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    setProjectTasks(updatedTasks);
  };

  const deleteTaskFromProject = (taskId) => {
    const updatedTasks = { ...projectTasks };
    Object.keys(updatedTasks).forEach((key) => {
      updatedTasks[key] = updatedTasks[key].filter(
        (task) => task.id !== taskId
      );
    });
    const updatedProjects = { ...projects, [id]: updatedTasks };
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    setProjectTasks(updatedTasks);
  };

  const moveTask = (task, toStage) => {
    const fromStage = Object.keys(projectTasks).find((stage) =>
      projectTasks[stage].some((t) => t.id === task.id)
    );

    if (!fromStage) return; // Task not found in any stage

    const updatedTasks = { ...projectTasks };

    // Remove the task from the source stage
    updatedTasks[fromStage] = updatedTasks[fromStage].filter(
      (t) => t.id !== task.id
    );

    // Add the task to the destination stage with updated info
    const updatedTask = { ...task, dateModified: new Date().toLocaleString() };
    updatedTasks[toStage] = [...(updatedTasks[toStage] || []), updatedTask];

    // Update the projects state and localStorage
    const updatedProjects = { ...projects, [id]: updatedTasks };
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    setProjectTasks(updatedTasks);
  };

  const filteredTasks = (stage) =>
    (projectTasks[stage] || []).filter((task) =>
      task.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Task count for each stage
  const getTaskCount = (stage) => (projectTasks[stage] || []).length;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4 md:mb-0">
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </h1>
          <div className="flex items-center bg-white p-2 rounded-md shadow-md w-full md:w-auto">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="ml-2 outline-none flex-grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <TaskInput addTaskToProject={addTaskToProject} />
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 overflow-x-auto">
          <TaskContainer
            title={`TODO (${getTaskCount("TODO")})`}
            tasks={filteredTasks("TODO")}
            onDropTask={(task) => moveTask(task, "TODO", "InProgress")}
            onDeleteTask={deleteTaskFromProject}
            stage="TODO"
          />
          <TaskContainer
            title={`InProgress (${getTaskCount("InProgress")})`}
            tasks={filteredTasks("InProgress")}
            onDropTask={(task) => moveTask(task, "InProgress", "Done")}
            onDeleteTask={deleteTaskFromProject}
            stage="InProgress"
          />
          <TaskContainer
            title={`Done (${getTaskCount("Done")})`}
            tasks={filteredTasks("Done")}
            onDropTask={(task) => moveTask(task, "Done", "TODO")}
            onDeleteTask={deleteTaskFromProject}
            stage="Done"
          />
        </div>
      </div>
    </DndProvider>
  );
}

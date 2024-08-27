"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreateProject from "./CreateProject";
import ProjectList from "./ProjectList";

export default function Home() {
  const [projects, setProjects] = useState({});
  const router = useRouter();

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || {};
    setProjects(savedProjects);
  }, []);

  const handleCreateProject = (projectName) => {
    const newId = projectName.toLowerCase().replace(/\s+/g, "-");
    const newProject = { [newId]: [] };

    const updatedProjects = { ...projects, ...newProject };
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    router.push(`/board/${newId}`);
  };

  const handleProjectSelect = (projectId) => {
    router.push(`/board/${projectId}`);
  };

  const handleDeleteProject = (projectName) => {
    const updatedProjects = { ...projects };
    delete updatedProjects[projectName.toLowerCase().replace(/\s+/g, "-")];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="mb-4">
        <CreateProject
          onCreate={handleCreateProject}
          onDelete={handleDeleteProject}
          projects={projects}
        />
      </div>
      <ProjectList projects={projects} onSelect={handleProjectSelect} />
    </div>
  );
}

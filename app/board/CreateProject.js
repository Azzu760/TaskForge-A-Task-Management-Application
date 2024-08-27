"use client";
import React, { useState } from "react";
import {
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateProject = ({ onCreate, onDelete, projects }) => {
  const [projectName, setProjectName] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim()) {
      onCreate(projectName);
      setProjectName("");
    }
  };

  const handleOpenDeleteDialog = (projectName) => {
    setProjectToDelete(projectName);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleDelete = () => {
    onDelete(projectToDelete);
    handleCloseDeleteDialog();
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create a New Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <TextField
          variant="outlined"
          label="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mb-4"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Create Project
        </Button>
      </form>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Existing Projects</h3>
        {Object.keys(projects).length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <ul>
            {Object.keys(projects).map((projectName) => (
              <li
                key={projectName}
                className="flex items-center justify-between mb-2"
              >
                <span>
                  {projectName.charAt(0).toUpperCase() + projectName.slice(1)}
                </span>
                <IconButton
                  color="error"
                  onClick={() => handleOpenDeleteDialog(projectName)}
                >
                  <DeleteIcon />
                </IconButton>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to delete the project "{projectToDelete}"?
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateProject;

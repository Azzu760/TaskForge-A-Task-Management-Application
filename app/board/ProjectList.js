import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectList = ({ projects, onSelect }) => {
  return (
    <div className="flex flex-col items-center">
      {Object.keys(projects).length === 0 ? (
        <p>No projects found. Create a new one!</p>
      ) : (
        <div className="flex flex-col w-full max-w-md mx-auto">
          {Object.keys(projects).map((projectId) => (
            <Button
              key={projectId}
              variant="outlined"
              color="primary"
              onClick={() => onSelect(projectId)}
              className="mb-2 flex items-center"
              endIcon={<ArrowForwardIcon />}
            >
              {projectId.charAt(0).toUpperCase() + projectId.slice(1)}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;

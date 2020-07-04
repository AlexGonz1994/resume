import React from "react";
import { Card } from "reactstrap";
import ProjectData from "./projectdata";

const Project = () => {
  return (
    <div>
      {ProjectData.map((project) => {
        console.log(project);
        return (
          <Card className="cards" key={project.id}>
            <div>
              {project.name}: <br />
              <a href={project.netlifyLink}>Netlify Website</a>
              <br />
              <a href={project.githubLink}>Github Repo</a>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Project;

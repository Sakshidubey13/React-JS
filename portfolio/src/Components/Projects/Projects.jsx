import React from "react";

function Projects() {
  return (
    <div className="container projects">
      <h2>Projects</h2>

      <div className="card p-3 m-3">
        <h4>TextUtils App</h4>
        <p>
          A React app that converts text to uppercase, lowercase and
          counts words.
        </p>

        <button className="btn btn-success">GitHub Code</button>
      </div>

      <div className="card p-3 m-3">
        <h4>Portfolio Website</h4>
        <p>
          Personal portfolio website made using HTML CSS and JavaScript.
        </p>

        <button className="btn btn-success">GitHub Code</button>
      </div>

    </div>
  );
}

export default Projects;
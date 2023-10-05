// Resume.js

import React from 'react';


function Resume() {
  const { name, title, skills, experience } = resumeData;

  return (
    <div className="resume">
      <h1>{name}</h1>
      <h2>{title}</h2>

      <h3>Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Experience:</h3>
      <ul>
        {experience.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> at {job.company} ({job.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;

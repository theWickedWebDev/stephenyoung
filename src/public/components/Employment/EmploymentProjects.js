// Dependencies
import React from 'react';

// Components
import Details from 'components/Details';
import List from 'components/List';

// Styling
import './EmploymentProjects';

// Main
const EmploymentProjects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return projects.map((project, index) => (
    <div className="EmploymentProjects">
      <Details summary={project.title} key={index}>
        <List
          items={project.content}
          renderer={(content) => (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          )}
        />
      </Details>
    </div>
  ));
}

export default EmploymentProjects;

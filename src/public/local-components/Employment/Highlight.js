// Dependencies
import React from 'react';

// Components
import { Tag, List } from '@thewickedwebdev/components';

import {
  EmployerLogo,
  EmployerName,
  EmploymentRoles,
  EmploymentProjects,
} from 'components/Employment';

// Styling
import './Highlight.scss';

// Main
const Highlight = (props) => {
  const {
    image, name, address, href, roles, focus, description, projects,
  } = props;

  return (
    <div className="HighlightComponent">
      <EmployerLogo
        src={image.src}
        className="HighlightComponent__Logo"
      />
      <EmployerName
        href={href}
        name={name}
        address={address}
        className="HighlightComponent__EmployerName"
      />
      <EmploymentRoles roles={roles} />
      <br/>
      <List
        inline
        items={focus}
        className="HighlightComponent__focusList"
        renderer={item => (
          <Tag className="small" style={{margin: '3px'}}>{item}</Tag>
        )}
      />
      <br/>
      <p
        className="HighlightComponent__Description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <br/>
      <EmploymentProjects projects={projects} />
    </div>
  );
}

export default Highlight;

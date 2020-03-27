// Dependencies
import React from 'react';

// Components
import {
  EmployerLogo,
  EmployerName,
  EmploymentRoles,
  EmploymentProjects,
} from 'components/Employment';

import { TagList } from 'components/Tag';

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
      <TagList
        className="HighlightComponent__focusList"
        small
        tags={focus}
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

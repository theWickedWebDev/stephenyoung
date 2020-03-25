import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TechIcons = () => [
  <noscript key="noscript">
    <ul className="icon-list icon-list-light icon-list-small">
      <li className="icon-list-item">
        <em title="Javascript">Javascript</em>
      </li>
      <li className="icon-list-item">
        <em title="Javascript">Node</em>
      </li>
      <li className="icon-list-item">
        <em title="Javascript">React</em>
      </li>
      <li className="icon-list-item">
        <em title="Javascript">HTML5</em>
      </li>
      <li className="icon-list-item">
        <em title="Javascript">CSS3</em>
      </li>
    </ul>
  </noscript>,
  <ul key="tech-icons" className="icon-list icon-list-light">
    <li className="icon-list-item">
      <FontAwesomeIcon icon={[ 'fab', 'node-js' ]}/>
    </li>
    <li className="icon-list-item">
      <FontAwesomeIcon icon={[ 'fab', 'node' ]}/>
    </li>
    <li className="icon-list-item">
      <FontAwesomeIcon icon={[ 'fab', 'react' ]}/>
    </li>
    <li className="icon-list-item">
      <FontAwesomeIcon icon={[ 'fab', 'html5' ]}/>
    </li>
    <li className="icon-list-item">
      <FontAwesomeIcon icon={[ 'fab', 'css3-alt' ]}/>
    </li>
  </ul>
];

export default TechIcons;

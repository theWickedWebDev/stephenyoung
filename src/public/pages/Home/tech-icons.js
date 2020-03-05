import React from 'react';

const TechIcons = () => {
  return [
    <noscript>
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
    <ul className="icon-list icon-list-light">
      <li className="icon-list-item">
        <em className="fab fa-node-js" title="Javascript" />
      </li>
      <li className="icon-list-item">
        <em className="fab fa-node" title="Node JS"/>
      </li>
      <li className="icon-list-item">
        <em className="fab fa-react" title="React JS" />
      </li>
      <li className="icon-list-item">
        <em className="fab fa-html5" title="HTML5" />
      </li>
      <li className="icon-list-item">
        <em className="fab fa-css3-alt" title="CSS3" />
      </li>
    </ul>
  ];
};

export default TechIcons;

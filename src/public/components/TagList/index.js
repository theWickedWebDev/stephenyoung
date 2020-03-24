import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TagList = props => (
  <ul className="tag-list">
    { props.list.map((item, index) => (
      <li
        className="tag-list-item"
        key={index + '-tag'}
      >
        <span>{ item.name }</span>
        { item.favorite &&
          <FontAwesomeIcon icon="heart" className="tag-list-icon"/>
        }
      </li>
    ))}
  </ul>
);

export default TagList;

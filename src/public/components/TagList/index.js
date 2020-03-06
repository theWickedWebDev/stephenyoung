import React from 'react';

const TagList = props => (
  <ul className="tag-list">
    { props.list.map((item, index) => (
      <li
        className="tag-list-item"
        key={index + '-tag'}
      >
        <span>{ item.name }</span>
        { item.favorite &&
          <em className="fas fa-heart tag-list-icon"></em>
        }
      </li>
    ))}
  </ul>
);

export default TagList;

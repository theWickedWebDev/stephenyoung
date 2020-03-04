import React from 'react';

const TagList = props => (
  <ul className="tag-list">
    { props.list.map((item, index) => (
      <li
        className={
          `tag-list-item ${item.favorite ? 'favorite' : ''}`
        }
        data-aos={
          `${item.favorite ? 'zoom-out' : ''}`
        }
        key={index}
      >
        { item.name }
        { item.favorite &&
          <em className="fas fa-heart tag-list-icon"></em>
        }
      </li>
    ))}
  </ul>
);

export default TagList;

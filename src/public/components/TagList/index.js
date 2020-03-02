import React from 'react';
import './styles.scss';

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
          <i className="fas fa-heart tag-list-icon"></i>
        }
      </li>
    ))}
  </ul>
);

export default TagList;
import React from 'react';

const List = ({ items, renderer, inline, className, itemClassName }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className={`ListComponent ${className}`}>
      { items.map((item, index) => (
        <li
          style={{ display: inline ? 'inline-block' : 'block' }}
          className={`ListComponent__item ${itemClassName}`} key={index}
        >
          { renderer(item) }
        </li>
      ))}
    </ul>
  );
}

export default List;

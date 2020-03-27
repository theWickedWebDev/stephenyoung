// Dependencies
import React from 'react';

// Components
import List from 'components/List';
import Tag from 'components/Tag';

// Styling
import './TagList.scss';

// Main
const TagList = ({ tags, small, className }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <List
      inline
      className={`TagList ${className} ${small}`}
      itemClassName="TagList__Tag"
      items={tags}
      renderer={({ tag, icon }) => (
        <Tag icon={icon} small={small}>{ tag }</Tag>
      )}
    />
  );
};

export default TagList;

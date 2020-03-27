// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styling
import './Tag.scss';

const Tag = ({ children, icon, small, className, style }) => {
  const classes = ["Tag"];
  if (className) classes.push(className);
  if (small) classes.push('Small');

  return (
    <span className={classes.join(' ')} style={style}>
      { icon && <FontAwesomeIcon icon={icon} className="Tag__Icon"/> }
      { children }
    </span>
  );
}

export default Tag;

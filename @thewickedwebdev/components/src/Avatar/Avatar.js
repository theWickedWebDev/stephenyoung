// @flow
// Dependencies
import * as React from 'react';

// Types
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { AvatarType } from '../flow-types';

// Styling
import './Avatar.scss';

// Main
const Avatar = (props : AvatarType) => {
  const DEFAULT_SHAPE = 'circle';
  const DEFAULT_TYPE = 'secondary';
  const DEFAULT_SIZE = 50;
  const MAX_FONT_SIZE = 36;

  const {
    type = DEFAULT_TYPE,
    shape = DEFAULT_SHAPE,
    size = DEFAULT_SIZE,
    image,
    icon,
    className,
    children,
    bgColor,
    color,
  } = props;

  const classes = ["Avatar", type, shape];
  if (className) classes.push(className);
  if (icon) classes.push('icon');

  let style = {
    height: size + 'px',
    width: size + 'px',
  };

  if (bgColor) style = { ...style, backgroundColor: bgColor };
  if (color) style = { ...style, color };

  if (image) {
    classes.push('image');
    style = {
      ...style,
      backgroundImage: `url(${image})`,
    };
  }

  let fontSize = Math.floor(size / 2);

  let childStyle = {
    lineHeight: size + 'px',
    fontSize: fontSize > MAX_FONT_SIZE
      ? MAX_FONT_SIZE + 'px'
      : fontSize + 'px',
  };

  return (
    <span
      style={style}
      className={classes.join(' ')}
    >
      { icon
        ? <span className="Avatar_Icon Avatar_child" style={childStyle}>
            <FontAwesomeIcon icon={icon}/>
          </span>
        : <span className="Avatar_child" style={childStyle}>
            { children }
          </span>
      }
    </span>
  )
};

export default Avatar;

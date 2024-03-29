// @flow
import React from 'react';

// Types
import type { ListType } from '../flow-types';

// Main
const List = (props: ListType) => {
  const {
    items,
    renderer,
    inline,
    className,
    itemClassName,
  } = props;

  if (!items || items.length === 0) return null;

  const classNames = ['ListComponent'];
  if (className) classNames.push(className);

  const itemClassNames = ['ListComponent__item'];
  if (itemClassName) itemClassNames.push(itemClassName);

  return (
    <ul className={classNames.join(' ')}>
      { items.map((item, index) => (
        <li
          style={{ display: inline ? 'inline-block' : 'block' }}
          className={itemClassNames.join(' ')} key={index}
        >
          { renderer(item, index) }
        </li>
      ))}
    </ul>
  );
}

export default List;

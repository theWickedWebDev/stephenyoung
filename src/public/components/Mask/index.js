import React from 'react';

import './styles.scss';

const BackgroundMask = ({children, onClick, open }) => {
  if (!open) return null;
  
  return (
    <div className="BackgroundMask" onClick={onClick}>
      { children }
    </div>
  );
}

export default BackgroundMask;

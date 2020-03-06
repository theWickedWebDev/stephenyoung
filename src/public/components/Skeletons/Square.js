import React from 'react';

const Square = ({ size = "300px" }) => (
  <div
    className="skeletons__component-square skeletons__component"
    style={{height: size, width: size}}
  />
);

export default Square;

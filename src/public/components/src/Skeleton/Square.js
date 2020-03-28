// @flow
// Dependencies
import React from 'react';

// Types
import type { SkeletonType } from '../flow-types';

// Main
const Square = ({ size = '300px' } : SkeletonType) => (
  <div
    className="Skeleton Skeleton__square"
    style={{
      height: size,
      width: size,
      display: 'block',
      backgroundColor: '#f4f4f4',
    }}
  />
);

export default Square;

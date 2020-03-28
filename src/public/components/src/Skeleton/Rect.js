// @flow
// Dependencies
import React from 'react';

// Types
import type { SkeletonType } from '../flow-types';

// Main
const RectSkeleton = ({ width = '300px', height = '200px' } : SkeletonType) => (
  <div
    className="Skeleton Skeleton__rect"
    style={{
      height: height,
      width: width,
      display: 'block',
      backgroundColor: '#f4f4f4',
    }}
  />
);

export default RectSkeleton;

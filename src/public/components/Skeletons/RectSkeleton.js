import React from 'react';

const RectSkeleton = ({ width = '300px', height = '200px' }) => {
    return <div
        className="skeletons__component-rect skeletons__component"
        style={{ height: height, width: width }}
    />;
}
;

export default RectSkeleton;

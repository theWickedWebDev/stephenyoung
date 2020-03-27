import React from 'react';

const Square = ({ size = '300px' }) => {
    return <div
        className="skeletons__component-square skeletons__component"
        style={{ height: size, width: size }}
    />;
}
;

export default Square;

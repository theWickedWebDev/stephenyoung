import React from 'react';

const NoMatch = (props) => {
    return (
        <div>
            <h3>
        404 - Sorry! We couldn't find <code>{props.location.pathname}</code> page
            </h3>
        </div>
    );
};

export default NoMatch;

import React from 'react'

const NoMatch = (props) => {
  return (
    <div>
      <h3>
        404 - No match for <code>{props.location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch;

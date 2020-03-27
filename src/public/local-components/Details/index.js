import React from 'react';

const Details = ({ summary, children}) => (
  <details className="DetailsComponent">
    <summary className="DetailsComponent__summary">
      { summary }
    </summary>
    { children }
  </details>
);

export default Details;

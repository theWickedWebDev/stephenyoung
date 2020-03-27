import React from 'react';
import { withRouter } from 'react-router-dom';

import Meta from 'components/Meta';

const Page = props => {
  const { meta, className, location, robots, keywords } = props;

  return (
    <div className={`PageComponent ${className}`}>
      <Meta
        robots={robots || 'index'}
        keywords={keywords || "HTML,CSS,XML,JavaScript"}
        title={meta.title}
        description={meta.description}
        canonical={`${WEBSITE_URL}${location.pathname}`}
      />
      { props.children }
    </div>
  )
}

export default withRouter(Page);

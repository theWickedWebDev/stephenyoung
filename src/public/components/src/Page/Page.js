// @flow
// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
import type { Location } from 'react-router';

// Components
import Meta from '../Meta/index.js';

// Types
import type { PageType } from '../flow-types';

// Main
const Page = (props : PageType) => {
  const {
    meta: {
      title = 'Title',
      description = 'Page Description',
      domain = 'https://www.thewickedweb.dev',
    },
    className,
    location,
    robots = 'index',
    keywords = '',
  } = props;

  const classes = ['PageComponent'];
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')}>
      <Meta
        robots={robots}
        keywords={keywords}
        title={title}
        description={description}
        canonical={`${domain}${location.pathname}`}
      />
      { props.children }
    </div>
  )
}

export default withRouter(Page);

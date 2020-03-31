// @flow
// Dependencies
import React from 'react';
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
      canonical = 'https://www.thewickedweb.dev',
    },
    className,
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
        canonical={canonical}
      />
      { props.children }
    </div>
  )
}

export default Page;

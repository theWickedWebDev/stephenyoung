// Dependencies
import React from 'react';

// Components
import { Page } from '@thewickedwebdev/components';
import Header from 'components/Header';

// Main
const NoMatch = (props) => (
  <Page
    className="About__Page"
    meta={{ title: 'Uh oh! 404', robots: 'noindex' }}
  >
    <Header
      title="404 - Sorry!"
      subtitle={`We couldn't find ${props.location.pathname}</code> page`}
      avatar={`${S3_URL}/images/avatar/avatar-2.svg`}
      style={{ backgroundColor: '#444444' }}
    />
  </Page>
);

export default NoMatch;

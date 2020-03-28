import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Page } from '@thewickedwebdev/components';

export default {
  title: 'Page',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['Page.test.js'],
    layout: {
      description: require('./README.md').default,
      html: `
      <div/>
      `,
    }
  },
};

export const standard = () => (
  <Page
    meta={{
      title: 'Storybook Page Title!',
      description: "This is the Story for my Page component",
      domain: 'https://www.thewickedweb.dev/',
    }}
  >
    <p>Some cool content here</p>
  </Page>
);

standard.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import { Page } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Page
            meta={{
              title: 'Storybook Page Title!',
              description: "This is the Story for my Page component",
              domain: 'https://www.thewickedweb.dev/',
            }}
          >
            <p>Some cool content here</p>
          </Page>
        );
      }
      `
    }
  }
}

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Section } from '@thewickedwebdev/components';

export default {
  title: 'Section',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['Section.test.js'],
    layout: {
      description: require('./README.md').default,
      html: `
      //
      `,
    }
  },
};

export const standard = () => (
  <Section/>
);

standard.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import { Section } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Section/>
        );
      }
      `
    }
  }
}

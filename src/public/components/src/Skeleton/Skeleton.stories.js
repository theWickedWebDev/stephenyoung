import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Skeleton } from '@thewickedwebdev/components';

export default {
  title: 'Skeleton',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['Skeleton.test.js'],
    layout: {
      description: require('./README.md').default,
      html: `
        <div
          class="Skeleton Skeleton__square"
          style="height: 100px; width: 100px;">
        </div>
      `,
    }
  },
};

export const standard = () => (
  <div>
    <Skeleton.Square size="100px"/>
    <br/>
    <Skeleton.Rect height="100px" width="200px"/>
  </div>
);

standard.story = {
  parameters: {
    layout: {
      source: `
  import React from 'react';
  import { Skeleton } from '@thewickedwebdev/components';

  const Example = () => {

    return [
      <Skeleton.Square size="100px"/>,
      <Skeleton.Rect height="100px" width="200px"/>
    ];
  }
      `
    }
  }
}

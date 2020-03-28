import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Lazy } from '@thewickedwebdev/components';

export default {
  title: 'Lazy',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['Lazy.test.js'],
    layout: {
      description: require('./README.md').default,
    }
  },
};

export const standard = () => (
  <div>
    <a href="/?path=/story/image--standard">
      See {`<Image/>`}
    </a>
  </div>
);

standard.story = {
  parameters: {
    layout: {
      source: `
  import React from 'react';
  import { Lazy, Skeleton } from '@thewickedwebdev/components';

  const Example = () => {
    const skel = <Skeleton.Square size={50}/>;

    return (
      <Lazy offset={50} skeleton={skel}>
        <p>This will not be rendered until visible</p>
        <p>It will also never be server-side rendered</p>
      </Lazy>
    );
  }
      `
    }
  }
}

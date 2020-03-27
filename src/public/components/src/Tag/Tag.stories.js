import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Tag } from '@thewickedwebdev/components';

export default {
  title: 'Tag',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['Tag.test.js'],
    layout: {
      description: require('./README.md').default,
      html: `
      <span class="Tag">Hello</span>

      <span class="Tag">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="heart"
          class="svg-inline--fa fa-heart fa-w-16 Tag__Icon"
          ...truncated...
        >
          <path>...truncated...</path>
        </svg>
        Hello
      </span>
      `,
    }
  },
};

export const standard = () => (
  <Tag>👽</Tag>
);

standard.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import { Tag } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Tag>👽</Tag>
        );
      }
      `
    }
  }
}

export const small = () => (
  <Tag small>👽</Tag>
);

small.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import { Tag } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Tag small>👽</Tag>
        );
      }
      `
    }
  }
}

export const withIcon = () => (
  <Tag icon="book">Game of Thrones</Tag>
);

withIcon.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import { Tag } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Tag icon="book">Game of Thrones</Tag>
        );
      }
      `
    }
  }
}

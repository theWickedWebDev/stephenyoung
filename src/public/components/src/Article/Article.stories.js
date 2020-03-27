import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Article } from '@thewickedwebdev/components';

export default {
  title: 'Article',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['Article.test.js'],
    layout: {
      description: require('./README.md').default,
      html: `
      <article class="article__component">
        <div class="article__component-content">
          <h2 class="article__component-h2">
            Do or do not. There is no try.
          </h2>
          <p>Some cool content here</p>
        </div>
      </article>
      `,
    }
  },
};

export const standard = () => (
  <Article title="Do or do not. There is no try.">
    <p>Some cool content here</p>
  </Article>
);

standard.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import { Article } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Article title="Do or do not. There is no try.">
            <p>Some cool content here</p>
          </Article>
        );
      }
      `
    }
  }
}

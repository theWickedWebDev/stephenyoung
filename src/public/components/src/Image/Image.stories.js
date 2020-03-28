import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Image } from '@thewickedwebdev/components';

export default {
  title: 'Image',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['Image.test.js'],
    layout: {
      description: require('./README.md').default,
      html: `
  <img
    src="https://cdn.thewickedweb.dev/images/logo/logo.jpg"
    class="navbar__component-logo"
    alt="Logo for TheWickedWebDev"
    title="Logo for TheWickedWebDev"
    srcset="
      https://cdn.thewickedweb.dev/images/logo/logo@2x.jpg 2x,
      https://cdn.thewickedweb.dev/images/logo/logo@3x.jpg 3x
    "
  />
      `,
    }
  },
};

export const standard = () => (
  <div>
    <Image
      src="https://cdn.thewickedweb.dev/images/logo/logo.jpg"
      className="navbar__component-logo"
      alt="Logo for TheWickedWebDev"
      title="Logo for TheWickedWebDev"
      srcSet={`
        https://cdn.thewickedweb.dev/images/logo/logo@2x.jpg 2x,
        https://cdn.thewickedweb.dev/images/logo/logo@3x.jpg 3x
      `}
    />
    <h4>Simulating Lazy loading on a slower connection</h4>
    <div className="transition-children" style={{height: '176px', width: '600px'}}>
      <Image
        width="600px"
        height="176px"
        src="https://cdn.thewickedweb.dev/images/storybook/lazy-image-example-4.jpg"
        lazy={false}
      />
      <br/>
      <Image
        width="600px"
        height="176px"
        src="https://cdn.thewickedweb.dev/images/storybook/lazy-image-example-4-rendered.jpg"
        lazy={false}
      />
    </div>
  </div>
);

standard.story = {
  parameters: {
    layout: {
      source: `
  import React from 'react';
  import { Image } from '@thewickedwebdev/components';

  const Example = () => {

    return (
      <Image
        src="https://cdn.thewickedweb.dev/images/logo/logo.jpg"
        className="navbar__component-logo"
        alt="Logo for TheWickedWebDev"
        title="Logo for TheWickedWebDev"
        srcSet={\`
          https://cdn.thewickedweb.dev/images/logo/logo@2x.jpg 2x,
          https://cdn.thewickedweb.dev/images/logo/logo@3x.jpg 3x
        \`}
      />
    );
  }
      `
    }
  }
}

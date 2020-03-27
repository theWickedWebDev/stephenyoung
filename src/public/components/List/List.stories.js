import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import Tag from 'components/Tag';
import List from './List';

export default {
  title: 'List',
  decorators: [
    withA11y,
  ],
  parameters: {
    jest: ['List.test.js'],
    layout: {
      description: require('./README.md').default,
      html: `
      <ul class="ListComponent">
        <li class="ListComponent__item">
          <p>Item 1</p>
        </li>
        <li class="ListComponent__item">
          <p>Item 1</p>
        </li>
        <li class="ListComponent__item">
          <p>Item 1</p>
        </li>
      </ul>
      `,
    }
  },
};

export const standard = () => (
  <List
    items={['Item 1', 'Item 2', 'Item 3']}
    renderer={item => (<p>{item}</p>)}
  />
);

standard.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import List from 'components/List';

      const Example = () => {
        const items = ['Item 1', 'Item 2', 'Item 3'];
        const renderer = item => (<p>{item}</p>);

        return (
          <List
            items={items}
            renderer={renderer}
          />
        );
      }
      `
    }
  }
}

export const inline = () => (
  <List
    inline
    items={['Item 1', 'Item 2', 'Item 3']}
    renderer={item => (<p style={{margin: '5px'}}>{item}</p>)}
  />
);

inline.story = {
  parameters: {
    layout: {
      source: `
      import React from 'react';
      import List from 'components/List';

      const Example = () => {
        const items = ['Item 1', 'Item 2', 'Item 3'];
        const renderer = item => (<p style={{margin: '5px'}}>{item}</p>);

        return (
          <List
            inline
            items={items}
            renderer={renderer}
          />
        );
      }
      `,
    }
  }
}

export const withTags = () => (
  <List
    inline
    items={[
      { tag: 'Javascript', icon: 'heart' },
      { tag: 'Node', icon: 'heart' },
      { tag: 'React', icon: 'heart' },
      { tag: 'Elastic Search' },
      { tag: 'AWS' },
      { tag: 'GraphQl', icon: 'heart' },
      { tag: 'Keycloak' }
    ]}
    renderer={({ tag, icon }) => (
      <Tag icon={icon} style={{margin: '4px'}}>{ tag }</Tag>
    )}
  />
);

withTags.story = {
  parameters: {
    layout: {
      codeDescription:
        'Demonstrates using a <code>List</code> with <code>Tag</code>',
      source: `
        import React from 'react';
        import List from 'components/List';
        import Tag from 'components/Tag';

        const Sample = () => {
          const items = [
            { tag: 'Javascript', icon: 'heart' },
            { tag: 'Node', icon: 'heart' },
            { tag: 'React', icon: 'heart' },
            { tag: 'Elastic Search' },
            { tag: 'AWS' },
            { tag: 'GraphQl', icon: 'heart' },
            { tag: 'Keycloak' }
          ];

          const tagStyle = { margin: '4px' };
          const renderer = (item) => (
            <Tag icon={item.icon} style={tagStyle}>
              { item.tag }
            </Tag>
          );

          return (
            <List
              inline
              items={items}
              renderer={renderer}
            />
          );
        }
      `,
    }
  }
}

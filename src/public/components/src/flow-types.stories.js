// dependencies
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Flow',
  decorators: [
    withA11y,
  ],
};

export const types = () => (
  <div className="LayoutDecorator__description">
    <h4 id="ListType">List</h4>
    <pre>
      <code>{`import type { ListType } from '@thewickedwebdev/components'`}</code>
    </pre>
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Required</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>items</td>
          <td>Yes</td>
          <td>?string[]</td>
        </tr>

        <tr>
          <td>renderer</td>
          <td>Yes</td>
          <td>any => any</td>
        </tr>

        <tr>
          <td>inline?</td>
          <td></td>
          <td>boolean</td>
        </tr>

        <tr>
          <td>className?</td>
          <td></td>
          <td>string</td>
        </tr>

        <tr>
          <td>itemClassName?</td>
          <td></td>
          <td>string</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <h4 id="MetaType">Meta</h4>
    <pre>
      <code>{`import type { MetaType } from '@thewickedwebdev/components'`}</code>
    </pre>
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Required</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title?</td>
          <td></td>
          <td>string</td>
        </tr>
      <tr>
        <td>description?</td>
        <td></td>
        <td>string</td>
      </tr>
      <tr>
        <td>domain?</td>
        <td></td>
        <td>string</td>
      </tr>
      <tr>
        <td>canonical?</td>
        <td></td>
        <td>string</td>
      </tr>
      </tbody>
    </table>
  </div>
);

types.story = {
  parameters: {
    layout: {
      description: `Here are a few of the Flow Types that are used. This
      Story will most likely not be updated regularly. I will eventually
      generate this automatically`,
      renderTitle: 'Types',
      forceTitle: 'Flow Types',
    },
  },
};

// Dependencies
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import StoryRouter from 'storybook-react-router';
import { withInfo } from '@storybook/addon-info';

// Local
import results from './test-results.json';
import layout from './layout';

import '../src/public/fort-awesome';

addDecorator(StoryRouter());
addDecorator(withInfo());
addDecorator(withTests({ results }));
addDecorator(layout());

const loaderFn = () => [
  require('../@thewickedwebdev/components/stories/Typeography.story.js'),
  require('../@thewickedwebdev/components/stories/Layout.story.js'),
  require('../@thewickedwebdev/components/stories/General.story.js'),
  require('../@thewickedwebdev/components/stories/Types.story.js'),
];

configure(loaderFn, module);

// Dependencies
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { withInfo } from '@storybook/addon-info';

// Local
import layout from './layout';

import './fort-awesome';

addDecorator(StoryRouter());
addDecorator(withInfo());
addDecorator(layout());

const loaderFn = () => [
  require('./stories/Typeography.story.js'),
  require('./stories/Layout.story.js'),
  require('./stories/General.story.js'),
  require('./stories/Types.story.js'),
];

configure(loaderFn, module);

// Dependencies
import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import StoryRouter from 'storybook-react-router';
import { withInfo } from '@storybook/addon-info';

// Local
import results from './test-results.json';
import layout from './layout';
import '@thewickedwebdev/components/dist/bundle.css';

addDecorator(StoryRouter());
addDecorator(withInfo());
addDecorator(withTests({ results }));
addDecorator(layout());

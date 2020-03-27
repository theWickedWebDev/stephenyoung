import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from './test-results.json';
const withInfo = require('@storybook/addon-info').withInfo;
import layout from './layout';
import '@thewickedwebdev/components/dist/bundle.css';

addDecorator(withInfo());
addDecorator(withTests({ results }));
addDecorator(layout());

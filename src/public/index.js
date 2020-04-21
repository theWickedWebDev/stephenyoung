import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import App from './App';

const Main = () => (<Router><App /></Router>);

loadableReady(() => ReactDOM.hydrate(
    <Main />, document.getElementById('root')
));

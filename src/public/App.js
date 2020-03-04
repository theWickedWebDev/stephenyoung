import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.min.js';

import './translations';

import DefaultLayout from 'layouts/default';
import Home from 'pages/Home';
import About from 'pages/About';
import Work from 'pages/Work';
import NoMatch from 'pages/404';

import './css-reset.css';
import './styleguide.scss';

const App = () => (
  <DefaultLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="*" component={NoMatch}/>
    </Switch>
  </DefaultLayout>
)

export default App

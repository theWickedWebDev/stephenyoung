import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.min.js';

import './translations';

import DefaultLayout from 'layouts/default';
import ScrollToTop from 'components/ScrollToTop';
import Home from 'pages/Home';
import About from 'pages/About';
import OtherExperience from 'pages/OtherExperience';
import NoMatch from 'pages/404';
import './css-reset.css';
import './styleguide.scss';

const App = () => (
  <DefaultLayout>
    <ScrollToTop/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about-this-site/" component={About} />
      <Route path="/other-experience/" component={OtherExperience} />
      <Route path="*" component={NoMatch}/>
    </Switch>
  </DefaultLayout>
)

export default App

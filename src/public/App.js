import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
// import loadable from '@loadable/component'

import './fort-awesome';
import './css-reset.css';
import './styleguide.scss';

import DefaultLayout from 'layouts/default';
import ScrollToTop from 'components/ScrollToTop';

// const Home = loadable(() => import('pages/Home'));
// const About = loadable(() => import('pages/About'));
// const OtherExperience = loadable(() => import('pages/OtherExperience'));
// const NoMatch = loadable(() => import('pages/NoMatch'));

import Home from 'pages/Home';
import About from 'pages/About';
import OtherExperience from 'pages/OtherExperience';
import NoMatch from 'pages/404';

const routes = [
  {path: '/', Component: Home },
  {path: '/about-this-site/', Component: About },
  {path: '/other-experience/', Component: OtherExperience },
  {path: '*', Component: NoMatch },
];

const App = () => (
  <Switch>
    { routes.map(({ path, Component }, key) => (
      <Route
        key={key}
        exact
        path={path}
        render={ props => (
          <DefaultLayout>
            <ScrollToTop/>
            <Component {...props}/>
          </DefaultLayout>
        )}
      />
    ))}
  </Switch>
)

export default App

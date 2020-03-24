import React from 'react'
import Loadable from 'react-loadable';
import { Link, Route, Switch } from 'react-router-dom';


import './fort-awesome';
import './translations';
import './css-reset.css';
import './styleguide.scss';

import DefaultLayout from 'layouts/default';
import ScrollToTop from 'components/ScrollToTop';

const Loading = () => (<div>Loading...</div>);

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */'pages/Home'),
  loading() {
    return <Loading/>;
  },
});

const About = Loadable({
  loader: () => import('pages/About'),
  loading() {
    return <Loading/>;
  },
});

const OtherExperience = Loadable({
  loader: () => import('pages/OtherExperience'),
  loading() {
    return <Loading/>;
  },
});

const NoMatch = Loadable({
  loader: () => import('pages/404'),
  loading() {
    return <Loading/>;
  },
});

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

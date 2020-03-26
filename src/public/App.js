import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import './fort-awesome';
import './css-reset.css';
import './styleguide.scss';
import './fonts.css';

import DefaultLayout from 'layouts/default';
import ScrollToTop from 'components/ScrollToTop';

const Home = loadable(() => import(/* webpackChunkName: "home" */'pages/Home'));
const About = loadable(() => import(/* webpackChunkName: "about" */'pages/About'));
const OtherExperience = loadable(() => import(/* webpackChunkName: "other-experience" */'pages/OtherExperience'));
const NoMatch = loadable(() => import(/* webpackChunkName: "404" */'pages/404'));

const routes = [
    { path: '/',
      exact: true,
      render: (props) => (
        <DefaultLayout>
          <ScrollToTop/>
          <Home {...props}/>
        </DefaultLayout>
      )
    },
    { path: '/about-this-site/',
      exact: true,
      render: (props) => (
        <DefaultLayout>
          <ScrollToTop/>
          <About {...props}/>
        </DefaultLayout>
      )
    },
    { path: '/other-experience/',
      exact: false,
      render: (props) => (
        <DefaultLayout>
            <ScrollToTop/>
            <OtherExperience {...props}/>
        </DefaultLayout>
      )
    },

    { path: '*',
      exact: false,
      render: (props) => (
        <DefaultLayout>
            <ScrollToTop/>
            <NoMatch {...props}/>
        </DefaultLayout>
      )
    },
];

const App = () => (
  <Switch>
    { routes.map((props, key) => <Route key={key} {...props}/>) }
  </Switch>
);

export default App;

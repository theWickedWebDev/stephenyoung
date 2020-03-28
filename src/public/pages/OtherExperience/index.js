// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Internal Components
const OtherExperience = loadable(() => import(
  /* webpackChunkName: "other-experience-list" */'./OtherExperience.js'
));

const MedicalExperience = loadable(() => import(
  /* webpackChunkName: "other-experience-medical" */'./MedicalExperience.js'
));

const routes = [
  { path: '/other-experience/medical/',
    exact: true,
    render: (props) => (<MedicalExperience {...props}/>)
  },
  { path: '/other-experience/',
    exact: true,
    render: (props) => (<OtherExperience {...props}/>)
  },
];

// <OtherExperience/> Page
const OtherExperiencePage = () => (
  <Switch>
    { routes.map((props, key) => <Route key={key} {...props}/>) }
  </Switch>
);

export default OtherExperiencePage;

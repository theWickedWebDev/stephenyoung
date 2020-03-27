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

// <OtherExperience/> Page
const OtherExperiencePage = () => (
  <Switch>
    <Route
      path="/other-experience/medical"
      component={MedicalExperience}
    />
    <Route path="*" component={OtherExperience}/>
  </Switch>
);

export default OtherExperiencePage;

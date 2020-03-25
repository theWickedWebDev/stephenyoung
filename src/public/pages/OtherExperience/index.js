// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Internal Components
const OtherExperienceList = loadable(() => import(
  /* webpackChunkName: "other-experience-list" */'./List.js'
));

const MedicalExperience = loadable(() => import(
  /* webpackChunkName: "other-experience-medical" */'./MedicalExperience.js'
));

// <OtherExperience/> Page
const OtherExperiencePage = () => {
  return (
    <Switch>
      <Route
        path="/other-experience/medical"
        component={MedicalExperience}
      />
      <Route path="*" component={OtherExperienceList}/>
    </Switch>
  );
};

export default OtherExperiencePage;

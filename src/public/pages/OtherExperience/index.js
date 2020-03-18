

// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom';

// Internal Components
import OtherExperienceList from './List.js';
import MedicalExperience from './MedicalExperience';

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

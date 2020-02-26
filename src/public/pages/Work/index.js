import React from 'react'
import { Link, Route } from 'react-router-dom';

import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';

const Works = ({ match }) => (
  <div>
    <Header
      title="Personal Coding Projects"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    />
    <Section title="Work">
      <ul>
        <li>
          <Link to={`${match.url}/this-website`}>This Website</Link>
        </li>
        <li>
          <Link to={`${match.url}/maker-blog`}>Maker Blog</Link>
        </li>
        <li>
          <Link to={`${match.url}/coin-collecting`}>Coin Collecting App</Link>
        </li>
        <li>
          <Link to={`${match.url}/risk-game`}>Risk Game</Link>
        </li>
        <li>
          <Link to={`${match.url}/risk-game`}>The Time War (Game)</Link>
        </li>
        <li>
          <Link to={`${match.url}/risk-game`}>Sun & Moon (CSS Animation)</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Work} />

      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a project.</h3>}
      />
    </Section>
  </div>
)

const Work = ({ match }) => (
  <Article title={match.params.topicId}>
  <h3>{match.params.topicId}</h3>
  view some of my code for this site... snippets

  </Article>
)

export default Works;

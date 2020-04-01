// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

// Components
import { List, Section, Article, Page, Tag } from '@thewickedwebdev/components';

import Header from 'components/Header';
import Link from 'components/Link';
import References from 'components/References';
import Highlight, { EmploymentRole } from 'components/Employment';

// Styling
import './Home.scss';

// Data
import {
  copy,
  techIcons,
  skills,
  highlight,
  additionalExperience,
} from './content';

// Main
const Home = (props) => (
  <Page
    className="Homepage__Page"
    meta={{
      canonical: WEBSITE_URL,
      title: copy.title,
      description: copy.description,
    }}
  >
    <Header
      title={copy.title}
      subtitle={copy.subtitle}
      intro={copy.description}
      avatar={`${S3_URL}/images/avatar/avatar-2.svg`}
    />
    <List
      inline
      key="icon-list"
      className="IconList"
      itemClassName="IconList__item"
      items={techIcons}
      renderer={({ icon }) => (<FontAwesomeIcon icon={icon}/>)}
    />
    <Section className="container-fh">
      <Article title={copy.skills.title}>
        <List
          inline
          items={skills}
          renderer={item => (
            <Tag icon={item.icon} style={{margin: '3px'}}>{item.tag}</Tag>
          )}
        />
      </Article>
      <Article title={copy.highlight.title}>
        <Highlight
          image={{ src: highlight.logo }}
          href={highlight.href}
          name={highlight.name}
          address={highlight.address}
          roles={highlight.roles}
          focus={highlight.focus}
          description={highlight.description}
          projects={highlight.projects}
        />
      </Article>
      <Article title={copy.additionalExperience.title}>
        <List
          items={additionalExperience}
          renderer={role => (
            <div>
              <EmploymentRole {...role}/>
              <p>{role.description}</p>
              <br/>
            </div>
          )}
        />
      </Article>
      <Article title={copy.references.title}>
        <References/>
      </Article>
    </Section>
  </Page>
);

export default withRouter(Home);

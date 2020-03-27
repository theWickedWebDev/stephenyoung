// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import {
  List, Section, Article, TagList, Page,
} from '@thewickedwebdev/components';

import Header from 'components/Header';
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
const Home = () => (
  <Page
    className="Homepage__Page"
    meta={{ title: copy.title, description: copy.description }}
  >
    <Header
      title={copy.title}
      subtitle={copy.subtitle}
      intro={copy.description}
      avatar={`${S3_URL}/images/avatar/avatar-2.svg`}
    />
    <TechIcons items={techIcons}/>
    <Section>
      <Article title={copy.skills.title}>
        { skills.map(({ content }, i) => (
          <TagList tags={content}/>
        ))}
      </Article>
      <Article title={copy.highlight.title}>
        <Highlight
          image={{ src: highlight.logo }}
          href={highlight.href}
          name={highlight.name}
          address={highlight.address}
          roles={highlight.roles}
          focus={highlight.focus.map(f => ({ tag: f }))}
          description={highlight.description}
          projects={highlight.projects}
        />
      </Article>
      <Article title={copy.additionalExperience.title}>
        {additionalExperience.map((role, i) => (
          <div>
            <EmploymentRole {...role}/>
            <p>{role.description}</p>
            <br/>
          </div>
        ))}
      </Article>
      <Article title={copy.references.title}>
        <References/>
      </Article>
      <br/>
    </Section>
  </Page>
);

const TechIcons = ({ items }) => [
  <noscript key="noscript">
    <List
      inline
      className="icon-list icon-list-light icon-list-small"
      itemClassName="icon-list-item"
      items={items}
      renderer={({ name }) => (<em title={name}>{name}</em>)}
    />
  </noscript>,
  <List
    inline
    key="icon-list"
    className="icon-list icon-list-light"
    itemClassName="icon-list-item"
    items={items}
    renderer={({ icon }) => (<FontAwesomeIcon icon={icon}/>)}
  />
];

export default Home;

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
      canonical: WEBSITE_URL + props.location.pathname,
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
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        padding: "80px",
      }}
    >
      <p style={{ fontSize: '20px' }}>
        www.thewickedweb.dev is a great portfolio piece on its own
      </p>
      <br/>
      <p>
        I created my own&nbsp;
          <Link href="/storybook" title="Component Library">
            component library
          </Link> which takes advantage of Storybook, it is&nbsp;
          <Link href="/coverage/" title="Jest Test Coverage">
            fully tested
          </Link> with Jest/Enzyme
          and&nbsp;
          <Link href="/about-this-site/" title="About this site">
            performant!
          </Link>
      </p>
      <br/>
      <p style={{ fontSize: '20px' }}>
        How I Code Split and Server Side Rendered my performant
        Resume React Application
      </p>
      <br/>
      <Link
        href="https://blog.thewickedweb.dev/do-it-yourself/how-i-code-split-server-side-rendered-made-performant-my-resume-react-application/296/"
        title="How I Code Split and Server Side Rendered my performant Resume React Application"
      >
        <button className="btn-link-full">Learn More</button>
      </Link>
    </div>
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

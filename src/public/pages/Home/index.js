

// Dependencies
import React from 'react';

// Components
import Meta from 'components/Meta';
import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';
import Gallery from 'components/Gallery';

// Internal Components
import Skills from './skills';
import EmploymentHighlight from './employment-highlight';
import AdditionalExperience from './additional-experience';
import References from './references';
import TechIcons from './tech-icons';

// <Home/> Component
const Home = () => {
  /* eslint-disable max-len */
  const copy = {
      meta: {
          title: 'Seasoned Javascript Geek - Stephen Young',
          description: 'I’m an experienced web developer, woodworker and green-thumbed creative with a passion for creating beautiful websites, projects and lawns. I work quickly, efficiently and if I don\'t know something, I learn it. I am extremely motivated and thrive on working hard.'
      },
      title: 'Seasoned Javascript Geek',
      subtitle: 'Breaking things since 2000',
      description: 'I’m an experienced web developer, woodworker and green-thumbed creative with a passion for creating beautiful websites, projects and lawns. I work quickly, efficiently and if I don\'t know something, I learn it. I am extremely motivated and thrive on working hard.',
      introduction: [ '' ],
      conclusion: {
          title: 'Conclusion',
          content: []
      }
  };
  /* eslint-enable max-len */

  return (
    <div className="homepage__page">
      <Header
        title={copy.title}
        subtitle={copy.subtitle}
        intro={copy.description}
        avatar={`${S3_URL}/images/avatar/avatar-2.svg`}
      />
      <Meta
        robots="index"
        keywords="HTML,CSS,XML,JavaScript"
        title={copy.meta.title}
        description={copy.meta.description}
        canonical="https://www.thewickedweb.dev/"
      />
      <TechIcons/>
      <Section>
        <Skills/>
        <EmploymentHighlight/>
        <AdditionalExperience/>
        <References/>
        <Gallery/>
      </Section>
    </div>
  );
};

export default Home;

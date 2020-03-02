// Dependencies
import React from 'react'
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

// Components
import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';
import Gallery from 'components/Gallery';

// Internal Components
import Skills from './skills';
import EmploymentHighlight from './employment-highlight';
import AdditionalExperience from './additional-experience';
import References from './references';

// <Home/> Component
const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('homepage:meta:title')}</title>
        <link rel="canonical" href="https://www.thewickedweb.dev/" />
        <meta name="description" content={t('homepage:meta:description').substring(0, 160)} />
      </Helmet>
      <Header
        title={t('homepage:title')}
        intro={t('homepage:description')}
        withAvatar={true}
      />

        <ul className="icon-list icon-list-light">
          <li className="icon-list-item"><i className="fab fa-node-js"/></li>
          <li className="icon-list-item"><i className="fab fa-react"/></li>
          <li className="icon-list-item"><i className="fab fa-html5"/></li>
          <li className="icon-list-item"><i className="fab fa-css3-alt"/></li>
          <li className="icon-list-item"><i className="fab fa-node"/></li>
        </ul>
      <Section>
        <Skills/>
        <EmploymentHighlight/>
        <AdditionalExperience/>
        <References/>
        <Article title={t('gallery:title')}><Gallery/></Article>
      </Section>
    </div>
  );
};

export default Home;

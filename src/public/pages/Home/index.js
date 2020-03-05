// Dependencies
import React from 'react'
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  return (
    <div className="homepage__page">
      <Header
        title={t('homepage:title')}
        subtitle={t('homepage:subtitle')}
        intro={t('homepage:description')}
        avatar={`${S3_URL}${S3_IMAGES_PATH}${S3_AVATAR_PATH}/avatar-2.svg`}
      />
      <Meta
        robots="index"
        keywords="HTML,CSS,XML,JavaScript"
        title={t('homepage:meta:title')}
        description={t('homepage:meta:description')}
        canonical="https://www.thewickedweb.dev/"
      />
      <TechIcons/>
      <Section>
        <Skills/>
        <EmploymentHighlight/>
        <AdditionalExperience/>
        <References/>
        <Article title={t('gallery:title')}>
          <h3>{t('gallery:copy')}</h3>
          <Gallery/>
        </Article>
      </Section>
    </div>
  );
};

export default Home;

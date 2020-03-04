// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import Meta from 'components/Meta';
import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';

// <Home/> Component
const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Header
        title={t('about:title')}
        intro={t('about:description')}
        avatar={`${S3_URL}${S3_IMAGES_PATH}${S3_AVATAR_PATH}/avatar-2.svg`}
      />
      <Meta
        robots="index"
        keywords="HTML,CSS,XML,JavaScript"
        title={t('about:meta:title')}
        description={t('about:meta:description')}
        canonical="https://www.thewickedweb.dev/about/"
      />
      <Section>
        <Article title={t('about:techHeader')}>
          <ul className="test-list">
            <li><i className="fab fa-node" /> Node, Express</li>
            <li><i className="fab fa-react" /> React, Webpack, SCSS</li>
            <li><i className="fab fa-aws" /> EC2, Load Balancer, S3, CloudFront</li>
            <li><i className="fab fa-expeditedssl" /> SSL HTTPS</li>
          </ul>
        </Article>

        <Article title={t('about:clientHeader')}>

          <h3>Accessibility</h3>
          <ul>
            <li>Font size, color, screen reader, alt, title</li>
            <li>Localization</li>
          </ul>

          <h3>Site Performance</h3>
          <ul>
            <li>Lazy loading images</li>
            <li>Minified / Compressed</li>
          </ul>

          <h3>SEO</h3>
          <ul>
            <li>Meta Tags</li>
            <li>Sitemap</li>
            <li>Robots.txt</li>
            <li>Cananical URLs</li>
            <li>Site Performance</li>
          </ul>
        </Article>

        <Article title={t('about:serverHeader')}>
          <ul>
            <li>Server Side Rendered</li>
            <li>Automatic Resume Builder</li>
          </ul>
        </Article>

        <Article title={t('about:detailsHeader')}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Article>

        <Article title={t('about:comingSoonHeader')}>
          <ul>
            <li><i className="fas fa-truck-pickup" /> (SOON) HTTPS for S3 and custom domain</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) Better Code Splitting!</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) Storybook!</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) Tree Shaking!</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) GraphQL Api!</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) Elastic Search!</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) Unit Testing!</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) Integration Testing!</li>
            <li><i className="fas fa-truck-pickup" /> (SOON) Flow!</li>
          </ul>
        </Article>

      </Section>
    </div>
  );
};

export default About;

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
        <Article title={t('about:outcomeHeader')}>
          <ul className="test-list">
            <li><em className="fab fa-node" /> Node, Express</li>
            <li><em className="fab fa-react" /> React, Webpack, SCSS</li>
            <li><em className="fab fa-aws" /> EC2, Load Balancer, S3, CloudFront</li>
            <li><em className="fab fa-expeditedssl" /> SSL HTTPS</li>
          </ul>
          <br/>
          <h3>Accessibility</h3>
          <ul>
            <li>
              <h4>Font size & color</h4>
              <p>
                I made sure I had sufficient contrast on the foreground
                and background on all sections.
              </p>
              <br/>
              <p>Font-weights are not too thin.</p>
              <br/>
              <p>All font-sizes are set to at least 16px.</p>
              <br/>
            </li>
            <li>
              <h4>Alt & Title</h4>
              <p>All anchor and img tags have alt attributes.</p>
              <br/>
              <p>Anchor tags also have a title attribute.</p>
              <br/>
            </li>
            <li>
              <h4>Localization</h4>
              <p>Not the highest quality, but for demo purposes I used Google Translate to add French and Spanish languages.</p>
              <br/>
            </li>
          </ul>

          <h3>Site Performance</h3>
          <ul>
            <li>
              <h4>Page Size</h4>
              <p>
                1.9MB (as of when I'm typing this). It could use a little
                work for sure, but not terrible as is. I plan on adding
                better code splitting and doing an audit of the NPM
                packages I am using to reduce some bloat.
              </p>
              <br/>
            </li>
            <li>
              <h4>Lazy loading images</h4>
              <p>Doesn't load images until visible on screen.</p>
              <br/>
              <p>
                On page load, only 2 images are requested totalling ~38kb.
              </p>
              <br/>
              <p>
                As the user scrolls throughout the page, they can expect
                to download ~338kb of imagery. Much better than requesting that
                on initial page load :)
              </p>
              <br/>
            </li>
            <li>
              <h4>Page Speed</h4>
              <p>
                Minified, Cached and Compressed - HTML, JS, CSS and Images.
              </p>
              <br/>
              <p>
                The JS bundles could use a little more work. They are about
                538kb.
              </p>
              <br/>
              <p>For CSS I am only loading 2.8kb.</p>
              <br/>
            </li>
          </ul>

          <h3>SEO</h3>
          <ul>
            <li>
              <h4>Server Side Rendered</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </li>
            <li>
              <h4>Headers</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </li>
            <li>
              <h4>Meta Tags</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </li>
            <li>
              <h4>Sitemap</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </li>
            <li>
              <h4>Robots.txt</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </li>
            <li>
              <h4>Cananical URLs</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </li>
          </ul>

          <h3>Just Kinda Cool</h3>
          <ul>
            <li>
              <h4>Automatic Resume Builder</h4>
              <p>
                Using the same JSON content I use for the homepage, I generate
                a PDF vesion of my résumé. This way I dont have to worry about
                keeping a current version ready if/when I need one. For fun, I
                also tied it in with my localization so you can download in
                English, Spanish or French!
              </p>
            </li>
          </ul>
        </Article>
      </Section>
    </div>
  );
};

export default About;

/*

<li>
  <h4>Screen Reader</h4>
  <p>aria-attributes (coming soon)</p>
  1. Pay attention to the title tag
  2. Make sure your site is navigation-friendly
  3. Every image needs an alt attribute
  4. Role Attributes and Landmarks
  5. Avoid click event listeners on <div> elements
  <br/>
</li>
*/

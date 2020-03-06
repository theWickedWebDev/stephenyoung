
// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';

// Styling
import './styles.scss';

// Components
import Meta from 'components/Meta';
import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';
import TagList from 'components/TagList';

// <Home/> Component
const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="about__page">
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
        <Article title={t('about:outcomeHeader')} className="about-page__component">
          <ul className="tools-list">
            <li><em className="fab fa-node" /> Node, Express</li>
            <li><em className="fab fa-react" /> React, Webpack, SCSS</li>
            <li><em className="fab fa-aws" /> EC2, Load Balancer, S3, CloudFront</li>
            <li><em className="fab fa-expeditedssl" /> SSL HTTPS</li>
          </ul>
          <br/>
          <h3>Accessibility</h3>
          <TagList list={[{ name: 'W3C - Web Accessibility Initiative' }]} />
          <ul>
            <li>
              <h4 className="margin-bottom-large">Font size & Contrast make it easy to read text</h4>
              <p>
                I made sure I had sufficient contrast on the foreground
                and background on all sections.
              </p>
              <br/>
              <p>
                Header (coral/white) with
                large text passes <em className="alt">WCAG AA</em> checks with <strong>3.06:1</strong>.
                <br/>
                The rest of site passes all of the WCAG checks (<strong>16.98:1
                </strong> - <strong>21:1</strong>).
              </p>
              <br/>
              <p>
                I originally had a lighter color coral, but adjusted it when I
                realized it wasn't passing any of the checks.
              </p>
              <br/>
              <p>
                Font-weights are not too thin and all font-sizes are
                set to at least 16px.
              </p>
              <br/>
            </li>

            <li>
              <h4 className="margin-bottom-large">Images and links contain alternate text & title attributes</h4>
              <p>All anchor and img tags have alt attributes.</p>
              <br/>
              <p>Anchor tags also have a title attribute.</p>
              <br/>
            </li>

            <li>
              <h4 className="margin-bottom-large">Headings have a meaningful hierarchy</h4>
              <p>
                Paid attention to all the headings used. Each page has an H1,
                H2, H3, and H4 - and they are structured in a meaningful way.
              </p>
              <br/>
            </li>

            <li>
              <h4 className="margin-bottom-large">Resizing text does not make the page unusable</h4>
              <p>
                This site is made in a way so that a user can zoom in the text
                and read clearly. It does not cause any issues in the browser
                such as text being cut-off.
              </p>
              <br/>
            </li>
          </ul>
          <br/>

          <h3>Site Performance</h3>
          <TagList list={[
            { name: 'GtMetrix' },
            { name: 'Webpack Bundle Analyzer' },
            { name: 'CloudFront' },
            { name: 'Express' },
          ]} />
          <ul>
            <li>
              <h4 className="margin-bottom-large">Server-side rendered content</h4>
              <p>
                Users can browse the site sooner, even while React is making
                the virtual DOM to make the page interactive.
              </p>
              <p>
                I also dont have a giant white screen (or flicker) like many
                SPA sites do
              </p>
            </li>
            <li>
              <h4 className="margin-bottom-large">Decreasing Page Size</h4>
              <p>
                1.9MB (as of when I'm typing this). It could use a little
                work for sure, but not terrible as is. I plan on adding
                better code splitting, dynamic imports, and an audit of the NPM
                packages I am using to reduce some bloat.
              </p>
              <br/>
            </li>
            <li>
              <h4 className="margin-bottom-large">Lazy loading images</h4>
              <p>Doesn't load images until visible on screen.</p>
              <br/>
              <p>
                On page load, only 2 images are requested totalling ~38kb.
              </p>
              <br/>
              <p>
                As the user scrolls throughout the page, they can expect
                to download ~338kb of imagery. Much better than requesting that
                on initial page load.
              </p>
              <br/>
            </li>
            <li>
              <h4 className="margin-bottom-large">Page speed</h4>
              <p><abbr>SSR</abbr> - Server Side Rendered</p>
              <br/>
              <p>
                Minified, Cached and Compressed - HTML, JS, CSS and Images.
              </p>
              <br/>
              <p>
                The JS bundles could use a little more work. They are about
                538kb. I am going to be adding code-splitting with dynamic imports
                to achieve smaller bundle sizes.
              </p>
              <br/>
              <p>For CSS I am only loading 2.8kb.</p>
              <br/>
            </li>
            <li>
              <h4 className="margin-bottom-large">
                Disabled Javascript Support
              </h4>
              <p>Site will continue to perform all of its duties</p>
              <br/>
              <p>
                I used <em className='alt'><code>{"<noscript/>"}</code></em>
                &nbsp;&nbsp;for any relevant imagery since they are lazyloaded,
                the user would never have seen them.<br/>
                An example would be the image gallery at the bottom of the page,
                as well as the Tech Icons under the header. I have replaced
                those icons with text versions if the user has <abbr>JS</abbr>
                turned off.
              </p>
              <br/>
              <p>
                In development: Give the site the ability to change locales via
                the URL - so that I can SSR content with different copy. Right
                now, this is the only functionality that isn't supported without
                Javasript.
              </p>
              <br/>
            </li>
          </ul>
          <br/>
          <h3>Search Engine Optimization (<abbr>SEO</abbr>)</h3>
          <TagList list={[
              { name: 'Screaming Frog' },
              { name: 'Google Tools' },
          ]} />
          <ul>
            <li>
              <h4 className="margin-bottom-large">Meta Tags are present</h4>
              <p>
                Titles, descriptions, social tags, lang attributes, robots and
                other tags make it easier for people to get to my site. I am
                not putting too much energy into online marketing, but if one
                day someone finds me organically, thats awesome!
              </p>
              <br/>
            </li>
            <li>
              <h4 className="margin-bottom-large">
                Provides a sitemap.xml and robots.txt
              </h4>
              <p>
                Although this site has static URLs, I thought it would be fun
                to create a sitemap. Who knows, perhaps one day ill have created
                1000 dynamic pages, *chuckle*.
              </p>
              <br/>
            </li>
            <li>
              <h4 className="margin-bottom-large">Pages are canonicalized</h4>
              <p>
                Made sure to automatically redirect to include trailing slashes
                and include a canonical link in the head of my pages.
              </p>
              <br/>
            </li>
          </ul>
          <br/>
          <h3>Just Kinda Cool</h3>
          <TagList list={[
              { name: 'PDFKit' },
              { name: 'i18next'},
              { name: 'Node'},
          ]} />
          <ul>
            <li>
              <h4 className="margin-bottom-large">
                My PDF résumé is generated automagically
              </h4>
              <p>
                Using the same JSON content I use for the homepage, I generate
                a PDF vesion of my résumé. I am currently using &nbsp;
                <em className="alt">pdfkit</em> however I am not the biggest
                fan of their limited built-in api, but it was simple to set up
                and get running, so I kept it. This way I dont have to worry
                about keeping a current version ready if/when I need one. For
                fun, I also tied it in with my localization so you can
                download in English, Spanish or French!
              </p>
              <br/>
            </li>
            <li>
              <h4 className="margin-bottom-large">
                Translated into 3 languages
              </h4>
              <p>Localized!</p><br/>
              <p>
                Not the highest quality, but for demo purposes I used
                Google Translate to add French and Spanish languages.
              </p>
              <br/>
            </li>
          </ul>
          <br/>
          <h3>Code Quality</h3>
          <TagList list={[
              { name: 'Jest' },
              { name: 'Enzyme' },
              { name: 'Nightwatch'},
          ]} />
          <br/>
          <a
            className="btn-link-full"
            href="/coverage/"
            title="View Jest Coverage"
            target="_blank"
          >
            View Test Coverage
          </a>
          <br/>
          <br/>
          <ul>
            <li>
              <h4 className="margin-bottom-large">
                Clean and Organized
              </h4>
              <p>
                I always do my best to keep my code clean and organized. I
                try to keep functions and variable named clearly and easily
                identifable as possible. This allows for code that can be
                more easily read without the need for much commenting.
              </p>
              <br/>
              <h4 className="margin-bottom-large">
                <abbr>DRY</abbr> - Do not repeat yourself
              </h4>
              <p>
                I am positive I had to have repeated myself at least in a few places.
                It is quite hard to keep your code completely <abbr>DRY</abbr> as the
                projects progress, but as I work I keep that in mind and do
                my best.
              </p>
              <br/>
              <h4 className="margin-bottom-large">
                Testing with Jest and Nightwatch
              </h4>
              <p>
                The code that runs this site is thoroughly tested. I use Jest as my
                runner and other packages such as <em className="alt">Supertest</em>
                &nbsp;and <em className="alt">Enzyme</em> for my testing libraries.
              </p>
              <br/>
              <p>
                I am actively working on increasing&nbsp;
                <a href="/coverage/" title="View Jest Coverage" target="_blank">
                  my code coverage
                </a>, specifically end-to-end <abbr>(E2E)</abbr> tests
                using <em className="alt">Nightwatch</em>.
              </p>
              <br/>
              <p>
                Although I didn't use it for this site, I am a big fan of
                &nbsp;<em className="alt">Test Driven Development</em>&nbsp;
                (<abbr>TDD</abbr>). I have found it to be extremely insightful
                and helpful while working on new features or projects.
              </p>
              <br/>
              <h4 className="margin-bottom-large">
                Staging Site (https://staging.thewickedweb.dev)
              </h4>
              <p>
                I made myself a staging website too - so that I ensure a
                deployment will go smooth and not hurt any users experience
                while visiting my site. <br/><br/><strong>Note:</strong> I have made a
                custom robots.txt file that <em className="alt">blocks search
                engines</em> from crawling and indexing my staging site.
              </p>
            </li>
          </ul>
          <br/>
          <h3>Still figuring out...</h3>
          <TagList list={[{ name: 'Screen Readers' }]} />
          <ul>
            <li>
              <h4 className="margin-bottom-large">WAI-ARIA attributes</h4>
              <p>
                This is something new to me and is definitely something I
                want to learn more about.
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
  <h4 className="margin-bottom-large">Screen Reader</h4>
  <p>aria-attributes (coming soon)</p>
  1. Pay attention to the title tag
  2. Make sure your site is navigation-friendly
  3. Every image needs an alt attribute
  4. Role Attributes and Landmarks
  5. Avoid click event listeners on <div> elements
  <br/>
</li>
*/

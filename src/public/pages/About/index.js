// TODO: Needs major refactoring and cleanup
// TODO: use <Image/> instead

/* eslint-disable max-len */

// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

// Styling
import './styles.scss';

// Components
import {
  Page, Section, Article, List, Tag, Lazy, Skeleton
} from '@thewickedwebdev/components';

import Header from 'components/Header';
import Viewport from 'components/Viewport';

// <Home/> Component
const About = ({ location }) => {
  const copy = {
    title: 'How I built my résumé app',
    description: `I wanted to make a résumé site that could showcase
    some of the concepts I am passionate about (even if its total overkill).
    This site demonstrates a lot of things I have learned in the past.
    Hope you enjoy!`,
    outcomeHeader: 'What are some key concepts for this site?',
  };

  return (
    <Page
      className="About__Page"
      meta={{
        canonical: WEBSITE_URL + location.pathname,
        title: copy.title,
        description: copy.description,
      }}
    >
      <Viewport>{ (viewport) => (
        <React.Fragment>
          <Header title={copy.title} intro={copy.description}/>
          <Section>
            <Article title={copy.outcomeHeader} className="about-page__component">
              <ul className="tools-list">
                <li><FontAwesomeIcon icon={[ 'fab', 'node-js' ]}/> Node, Express</li>
                <li><FontAwesomeIcon icon={[ 'fab', 'react' ]}/> React, Webpack, SCSS</li>
                <li><FontAwesomeIcon icon={[ 'fab', 'aws' ]}/>  EC2, Load Balancer, S3, CloudFront</li>
                <li><FontAwesomeIcon icon={[ 'fab', 'expeditedssl' ]}/> SSL HTTPS</li>
              </ul>
              <br/>
              <h3>Accessibility</h3>
              <List
                items={[ { tag: 'W3C - Web Accessibility Initiative' } ]}
                renderer={item => <Tag>{item}</Tag>}
              />
              <ul>
                <li>
                  <h4 className="margin-bottom-large">
                    Font size & Contrast make it easy to read text
                  </h4>
                  <p>I made sure I had sufficient contrast on the foreground and background on all sections.</p>
                  <br/>
                  <p>Header (coral/white) with large text passes <em className="alt">WCAG AA</em> checks with <strong>3.06:1</strong>.<br/>The rest of site passes all of the WCAG checks (<strong>16.98:1</strong> - <strong>21:1</strong>).</p>
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
                  <h4 className="margin-bottom-large">
                    Images and links contain alternate text & title attributes
                    </h4>
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
                  <h4 className="margin-bottom-large">
                    Resizing text does not make the page unusable
                  </h4>
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
              <List
                items={[
                  { tag: 'GtMetrix' },
                  { tag: 'Webpack Bundle Analyzer' },
                  { tag: 'CloudFront' },
                  { tag: 'Express' },
                ]}
                renderer={item => <Tag>{item}</Tag>}
              />
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
        240kb (as of when I'm typing this). I have added
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
        94kb. I am going to be adding code-splitting with dynamic imports
        to achieve smaller bundle sizes.
                        </p>
                        <br/>
                        <p>For CSS I am only loading 3.6kb.</p>
                        <br/>
                    </li>
                    <li>
                        <h4 className="margin-bottom-large">
        Disabled Javascript Support
                        </h4>
                        <p>Site will continue to perform all of its duties</p>
                        <br/>
                        <p>
        I used <em className="alt"><code>{'<noscript/>'}</code></em>
        &nbsp;&nbsp;for any relevant imagery since they are lazyloaded,
        the user would never have seen them.<br/>
        An example would be the image gallery at the bottom of the page,
        as well as the Tech Icons under the header. I have replaced
        those icons with text versions if the user has <abbr>JS</abbr>&nbsp;
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
                <List
                  items={[
                      { tag: 'Screaming Frog' },
                      { tag: 'Google Tools' },
                  ]}
                  renderer={item => <Tag>{item}</Tag>}
                />
                <ul>
                    <li>
                        <h4 className="margin-bottom-large">Meta Tags are present</h4>
                        <figure>
                            <Lazy skeleton={<Skeleton.Rect width="300px" height="167px"/>}>
                                <img
                                    src={`${S3_URL}/images/how-i-made-this-site/social-card.jpg`}
                                    alt="Photo of this website"
                                    width="300px"
                                    height="167px"
                                    className="about__page-social-sharing-image"
                                />
                            </Lazy>
                            <figcaption>Social Sharing Preview</figcaption>
                        </figure>
                        <br/>
                        <p>
        Titles, descriptions, social tags, lang attributes, robots and
        other tags make it easier for people to get to my site.
                        </p>
                        <br/>
                        <p>
        I am not putting much energy into online marketing at all, but
        if one day someone finds me organically, thats awesome!
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
                <List
                  items={[
                    { tag: 'PDFKit' },
                    { tag: 'Node' },
                  ]}
                  renderer={item => <Tag>{item}</Tag>}
                />
                <ul>
                    <li>
                        <h4 className="margin-bottom-large">
        My PDF résumé <strike>is</strike> was generated automagically
                        </h4>
                        <div className="about__page-generate-pdf-section">
                            <figure>
                                <Lazy skeleton={
                                    <Skeleton.Square
                                        size={viewport === 'desktop' ? '150px' : '120px'}
                                    />
                                }>
                                    <img
                                        src={`${S3_URL}/images/how-i-made-this-site/website-400x400.jpg`}
                                        alt="Photo of this website"
                                        className="about__page-generate-pdf-image"
                                        height={viewport === 'desktop' ? '150px' : '120px'}
                                        width={viewport === 'desktop' ? '150px' : '120px'}
                                    />
                                </Lazy>
                                <figcaption>Data from Web App</figcaption>
                            </figure>
                            <FontAwesomeIcon
                                icon="arrow-right"
                                className="about__page-generate-pdf-arrow"
                            />
                            <figure>
                                <Lazy skeleton={<Skeleton.Square size="150px"/>}>
                                    <img
                                        src={`${S3_URL}/images/how-i-made-this-site/resume-400x400.jpg`}
                                        alt="Photo of my PDF résumé"
                                        className="about__page-generate-pdf-image"
                                        height={viewport === 'desktop' ? '150px' : '120px'}
                                        width={viewport === 'desktop' ? '150px' : '120px'}
                                    />
                                </Lazy>
                                <figcaption>Generated PDF</figcaption>
                            </figure>
                        </div>
                        <p>
        Using the same JSON content I use for the homepage, I generated
        a PDF vesion of my résumé. I was using &nbsp;
                            <em className="alt">pdfkit</em> however I am not the biggest
        fan of their limited built-in api, but it was simple to set up
        and get running, so I kept it. This way I dont have to worry
        about keeping a current version ready if/when I need one. For
        fun, I also tied it in with my localization so you can
        download in English, Spanish or French!
                            <br/><br/>
                            <em><strong>EDIT</strong></em> - I have removed the localization support
        because it was getting too much to maintain. I also wanted
        to try a new package, one that was easier with SSR and one
        that makes it simple to grab translation files from a CDN.
                        </p>
                        <br/>
                    </li>
                </ul>
                <br/>
                <h3>Code Quality</h3>
                <List
                  items={[
                      { tag: 'Jest' },
                      { tag: 'Enzyme' },
                      { tag: 'Nightwatch' },
                  ]}
                  renderer={item => <Tag>{item}</Tag>}
                />
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
        Do not repeat yourself <abbr>(DRY)</abbr>
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
                        <small className="block-on-mobile">
        (Generated on build)
                        </small>
                        <br/>
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
            </Article>
          </Section>
        </React.Fragment>
      )}</Viewport>
    </Page>
  );
};

export default withRouter(About);

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

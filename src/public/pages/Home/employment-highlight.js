
import React from 'react';
import Article from 'components/Article';
import LazyLoad from 'components/LazyLoad';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmploymentHighlight = () => {
  const copy = {
    "title": "Employment Highlight",
    "moreInfo": "For a more detailed description of Major Projects. Please visit my resume site at https://www.thewickedweb.dev/",
    "cta": "Click for more details",
    "header": "Paint Nite, LLC d/b/a Yaymaker",
    "address": "Somerville, MA (Remote)",
    "link": "https://www.yaymaker.com/",
    "logo": "yaymaker-logo.svg",
    "roles": [
      { "name": "Senior Software Engineer", "from": "May 2016", "until": "Feb 2020" },
      { "name": "Software Engineer, Front End", "from": "May 2015", "until": "May 2016" }
    ],
    "description": "Worked with React, Graphql, Elastic Search, MySql and many other Javascript packages daily. Using Jenkins, Docker and other tools to help our team with deployments, I delivered countless new features and improvements to all of our codebases.<br/><br/>Brought unit testing to our client projects taking advantage of packages such as Enzyme, Jest, Chai, Nightwatch as well as Flow for our static tests. These changes were baked into our git-flow using pre-push and pre-commit hooks.<br/><br/>Collaborated with the Project Manager to define the development process using Kanban as the core. Created new ticket types, improved our swimlanes, and increased the efficiency of our meetings.<br/><br/>Participated in phone screens, interviews, code challenges, and resume reviews in order to help build our technology department.",
    "rolesHeader": "Roles",
    "focusHeader": "Focus",
    "focus": "Node, React, Express, Flow, Redux, Apollo, GraphQl, MySql, Sequelize, Elastic Search, Storybook, Webpack, Enzyme, Nightwatch, SEO, A/B Testing, HTML, SCSS",
    "contentHeader": "Projects and General Duties",
    "content": [
      {
        "title": "Major Project Highlights",
        "content": [
          "<br/>",
          "<strong>Full rewrite of our main web app</strong>",
          "<br/>",
          "• Converted a Java & Angular app, to <em class='alt'>Node</em> & <em class='alt'>React</em>",
          "• Releasing incremental changes - page by page. This allowed for a safer and smoother transition",
          "• Localized content",
          "• More extensive Google Analytics tracking, powered through Tealium",
          "• Executed an innovative search design that highlights both landscape and portrait paintings.",
          "• Search was powered by a GraphQl query which leveraged Elastic Search",
          "• Used/Created a shared components NPM repo",
          "• A year or so later: We had two different sister-brands either with their own technologies. We needed to easily bring Plant Nite into React world. To do this we made our main Paint Nite app deployable as either 'Paint' or 'Plant'. Each had its own custom copy, assets, and styling for each brand and saved us a lot of time and QA effort.",
          "<br/>",
          "<strong><a href='https://storybook.js.org/' title='Storybook Website' target='_blank'>Storybook</a> for our React Components</strong>",
          "<br/>",
          "• Worked with design to develop components based off of <a href='https://www.sketch.com/' title='Sketch Website' target='_blank'>Sketch</a> symbols",
          "• Bundled up with <em class='alt'>Webpack</em> and <em class='alt'>Rollup</em> and published to NPM",
          "• Fully unit tested.",
          "• 4 separate apps use these shared components",
          "• 100% code coverage with <em class='alt'>Jest</em> and <em class='alt'>Enzyme</em>",
          "<br/>",
          "<strong>Reskin and refactor of our user-facing admin portal app (Backstage)</strong>",
          "<br/>",
          "• Upgraded to the latest packages for dependencies such as <em class='alt'>React</em> and <em class='alt'>Apollo</em>.",
          "• Faster to spin out new pages since we decided to go with <em class='alt'>Ant Design</em> for our component library.",
          "• Used <em class='alt'>Flow</em> type checks",
          "• Implemented <em class='alt'>Keycloak</em>, and later on, <em class='alt'>Auth0</em>",
          "<br/>",
          "<strong>Part of a large rebrand of the company: Paint Nite ==> Yaymaker</strong>",
          "<br/>",
          "• Releasing incremental changes - page by page. This allowed for a safer and smoother transition",
          "• After many/most pages were deployed we pulled the plug and made the switch over one early morning",
          "• This project sparked many smaller projects, such as <em class='alt'>SEO</em>, <em class='alt'>Site Performance</em>, new features like searching updates and landing pages.",
          "• Used a more concise and streamlined style guide that allowed for faster development",
          "<br/>",
          "<strong>Developed an in-house, server-side rendered, A/B Testing platform</strong>",
          "<br/>",
          "• No flicker due to <em class='alt'>server-side rendering</em>, or custom any CSS needed",
          "• Connected to Google Analytics Reporting",
          "• <em>$600k annualized lift</em> with one of our first tests. (New filter design)"
        ]
      },
      {
        "title": "Site Performance / Optimization / Tracking",
        "content": [
          "<br/>",
          "<strong>Images and other static assets</strong>",
          "• Used new GraphQL endpoints to automate the optimization of all our images, including SEO friendly paths and alt attributes",
          "<br/>",

          "<strong>Code Splitting and more</strong>",
          "• Significantly reduced <em class='alt'>bundle size</em> using <em class='alt'>Webpack</em>.",
          "• Removed duplicate or bloated node modules and unused code",
          "• Tied a code audit into our development process",
          "• Used Webpack to render <em class='alt'>Critical CSS</em> in the head",
          "• Addressed 5xx's, 4xx's and 3xx's",
          "• Significantly reduced the number of <em class='alt'>HTTP Requests</em> made",
          "• Implemented <em class='alt'>lazy loading</em> by creating an <em>RenderOnVisible</em> React component.",
          "<br/>",

          "<strong>S3/Cloudfront caching and compression</strong>",
          "<br/>",

          "<strong>SEO</strong>",
          "• Worked closely with a consultant to help identify and address issues.",
          "• Quick fixes such as <em class='alt'>meta tags</em>, <em class='alt'>alt tags</em>, <em class='alt'>Hx’s</em>, etc.",
          "• Generated sitemap that ran daily helped significantly with our event detail pages.",
          "• Created a <em class='alt'>shared URLs package</em> with graphql partials that ensure our urls were always canonical",
          "• Middleware for inactive landing pages with proper redirects",
          "• Nightwatch E2E tests to catch some basic SEO regressions",
          "• Used <em class='alt'><a href='https://gtmetrix.com/' title='GtMetrix Website' target='_blank'>GtMetrix</a></em> as an additional montoring tool.",
          "• <em class='alt'><a href='https://www.screamingfrog.co.uk/seo-spider/' title='Screaming Frog Website' target='_blank'>Screaming Frog</a></em> helped us minimize redirects, identify broken links, fix missing H1's, identify issues with our Robots.txt and sitemap, and much more.",
          "• Used NPM package to handle UGC links rel=”ugc nofollow”",
          "<br/>",

          "<strong>3rd party scripts</strong>",
          "• Lambda function to assist with our SEO objectives. 3rd Party Scripts were minified, cloned, cached and served from our own S3 bucket. A Slack integration alerted us whenever this function ran.",
          "<br/>",

          "<strong>Elastic Search</strong>",
          "• Brought more use to our search page as well as other pages",
          "• <em class='alt'>Fuzzy matching</em> and <em class='alt'>auto-complete</em>. Able to search against many different resource types in one search box",
          "• Setup tools for the team to easily update/copy/remove/etc our indices and migrate data up/down environments",
          "• Worked to replace Google Maps Places API with in-house ES version which <em>decreased API costs by approximately $87,000 yearly</em>",
          "<br/>",

          "<strong>Tealium (Powered by Google Analytics)</strong>",
          "• Created a shared library of tracking function, constants and other helpers to ensure we dont have regressions with our tracking",
          "• 100% Unit and integration tested",
          "• GraphqQl query partials ensured that all data needed was retrieved",
          "• Great configuration makes it simple to update how the data is transposed",
          "• Custom components to simplify the adding of new tracking events"
        ]
      }
    ]
  };

  const LogoImage = () => (
    <img
      src={`${S3_URL}/images/resume/yaymaker-logo.svg`}
      className="vertical-align-middle margin-right-lg highlight-logo"
      width="90px"
      alt="Logo"
      title="Logo"
    />
  );

  return (
    <div className="employment-highlight__component" id="employmentHighlight">
      <Article title={copy.title}>
        <div>
          <noscript><LogoImage/></noscript>
          <LazyLoad><LogoImage/></LazyLoad>
          <h3 className="employment-highlight__h3">
            <a
              href={copy.link}
              rel="nofollow"
              target="_blank"
              title={copy.header}
            >
              {copy.header}
              &nbsp;
              <address style={{display: 'inline-block'}}>
                {copy.address}
              </address>
              &nbsp;
              <FontAwesomeIcon icon="link"/>
            </a>
          </h3>
          <div className="vertical-align-middle">
          { copy.roles.map((role, index) => (
              <p key={index} className="text-center-mobile">
                { index === 0 ? <strong>{role.name}</strong> : role.name }
                &nbsp;-&nbsp;
                <time dateTime={moment(role.from, 'MMM YYYY').format()}>
                  { role.from }
                </time> -
                <time dateTime={moment(role.until, 'MMM YYYY').format()}>
                  { role.until }
                </time>
              </p>
            ))
          }
          </div>
        </div>
        <br/>
        <p className="text-center-mobile">
          <strong>
          {copy.focusHeader}
          </strong>: {copy.focus}
        </p>
        <br/>

        <p dangerouslySetInnerHTML={{__html: copy.description}}/>

        <br/>

        {copy.content.map((h, index) => (
          <details key={index}>
            <summary>{ h.title }</summary>
            <ul>
              { h.content.map((content, index) => (
                <li key={index}>
                  <div dangerouslySetInnerHTML={{__html: content }} />
                </li>
              )) }
            </ul>
          </details>
        ))}
      </Article>
    </div>
  );
};

export default EmploymentHighlight;

/* eslint-disable max-len */
export const highlight = {
  name: 'Paint Nite, LLC d/b/a Yaymaker',
  address: 'Somerville, MA (Remote)',
  href: 'https://www.yaymaker.com/',
  logo: `${S3_URL}/images/resume/paintnite-logo.svg`,
  roles: [
    { name: 'Senior Software Engineer',
      date: { from: 'May 2016', until: 'Feb 2020', format: 'MMM YYYY' },
    },
    { name: 'Software Engineer, Front End',
      date: { from: 'May 2015', until: 'May 2016', format: 'MMM YYYY' },
    },
  ],
  focus: [
    'Node', 'React', 'Express', 'Flow', 'Redux', 'Apollo', 'GraphQl',
    'MySql', 'Sequelize', 'Elastic Search', 'Storybook', 'Webpack',
    'Enzyme', 'Nightwatch', 'SEO', 'A/B Testing', 'HTML', 'SCSS'
  ],
  description: `Worked with React, Graphql, Elastic Search, MySql and many
  other Javascript packages daily. Using Jenkins, Docker and other tools
  to help our team with deployments, I delivered countless new features
  and improvements to all of our codebases.<br/><br/>Brought unit testing
  to our client projects taking advantage of packages such as Enzyme,
  Jest, Chai, Nightwatch as well as Flow for our static tests. These
  changes were baked into our git-flow using pre-push and pre-commit
  hooks.<br/><br/>Collaborated with the Project Manager to define the
  development process using Kanban as the core. Created new ticket types,
  improved our swimlanes, and increased the efficiency of our meetings.
  <br/><br/>Participated in phone screens, interviews, code challenges,
  and resume reviews in order to help build our technology department.`,
  projects: [
    {
      title: 'Major Project Highlights',
      content: [
        '<br/>',
        '<strong>Full rewrite of our main web app</strong>',
        '<br/>',
        '• Converted a Java & Angular app, to <em class=\'alt\'>Node</em> & <em class=\'alt\'>React</em>',
        '• Releasing incremental changes - page by page. This allowed for a safer and smoother transition',
        '• Localized content',
        '• More extensive Google Analytics tracking, powered through Tealium',
        '• Executed an innovative search design that highlights both landscape and portrait paintings.',
        '• Search was powered by a GraphQl query which leveraged Elastic Search',
        '• Used/Created a shared components NPM repo',
        '• A year or so later: We had two different sister-brands either with their own technologies. We needed to easily bring Plant Nite into React world. To do this we made our main Paint Nite app deployable as either \'Paint\' or \'Plant\'. Each had its own custom copy, assets, and styling for each brand and saved us a lot of time and QA effort.',
        '<br/>',
        '<strong><a href=\'https://storybook.js.org/\' title=\'Storybook Website\' target=\'_blank\'>Storybook</a> for our React Components</strong>',
        '<br/>',
        '• Worked with design to develop components based off of <a href=\'https://www.sketch.com/\' title=\'Sketch Website\' target=\'_blank\'>Sketch</a> symbols',
        '• Bundled up with <em class=\'alt\'>Webpack</em> and <em class=\'alt\'>Rollup</em> and published to NPM',
        '• Fully unit tested.',
        '• 4 separate apps use these shared components',
        '• 100% code coverage with <em class=\'alt\'>Jest</em> and <em class=\'alt\'>Enzyme</em>',
        '<br/>',
        '<strong>Reskin and refactor of our user-facing admin portal app (Backstage)</strong>',
        '<br/>',
        '• Upgraded to the latest packages for dependencies such as <em class=\'alt\'>React</em> and <em class=\'alt\'>Apollo</em>.',
        '• Faster to spin out new pages since we decided to go with <em class=\'alt\'>Ant Design</em> for our component library.',
        '• Used <em class=\'alt\'>Flow</em> type checks',
        '• Implemented <em class=\'alt\'>Keycloak</em>, and later on, <em class=\'alt\'>Auth0</em>',
        '<br/>',
        '<strong>Part of a large rebrand of the company: Paint Nite ==> Yaymaker</strong>',
        '<br/>',
        '• Releasing incremental changes - page by page. This allowed for a safer and smoother transition',
        '• After many/most pages were deployed we pulled the plug and made the switch over one early morning',
        '• This project sparked many smaller projects, such as <em class=\'alt\'>SEO</em>, <em class=\'alt\'>Site Performance</em>, new features like searching updates and landing pages.',
        '• Used a more concise and streamlined style guide that allowed for faster development',
        '<br/>',
        '<strong>Developed an in-house, server-side rendered, A/B Testing platform</strong>',
        '<br/>',
        '• No flicker due to <em class=\'alt\'>server-side rendering</em>, or custom any CSS needed',
        '• Connected to Google Analytics Reporting',
        '• <em>$600k annualized lift</em> with one of our first tests. (New filter design)'
      ]
    },
    {
      title: 'Site Performance / Optimization / Tracking',
      content: [
        '<br/>',
        '<strong>Images and other static assets</strong>',
        '• Used new GraphQL endpoints to automate the optimization of all our images, including SEO friendly paths and alt attributes',
        '<br/>',

        '<strong>Code Splitting and more</strong>',
        '• Significantly reduced <em class=\'alt\'>bundle size</em> using <em class=\'alt\'>Webpack</em>.',
        '• Removed duplicate or bloated node modules and unused code',
        '• Tied a code audit into our development process',
        '• Used Webpack to render <em class=\'alt\'>Critical CSS</em> in the head',
        '• Addressed 5xx\'s, 4xx\'s and 3xx\'s',
        '• Significantly reduced the number of <em class=\'alt\'>HTTP Requests</em> made',
        '• Implemented <em class=\'alt\'>lazy loading</em> by creating an <em>RenderOnVisible</em> React component.',
        '<br/>',

        '<strong>S3/Cloudfront caching and compression</strong>',
        '<br/>',

        '<strong>SEO</strong>',
        '• Worked closely with a consultant to help identify and address issues.',
        '• Quick fixes such as <em class=\'alt\'>meta tags</em>, <em class=\'alt\'>alt tags</em>, <em class=\'alt\'>Hx’s</em>, etc.',
        '• Generated sitemap that ran daily helped significantly with our event detail pages.',
        '• Created a <em class=\'alt\'>shared URLs package</em> with graphql partials that ensure our urls were always canonical',
        '• Middleware for inactive landing pages with proper redirects',
        '• Nightwatch E2E tests to catch some basic SEO regressions',
        '• Used <em class=\'alt\'><a href=\'https://gtmetrix.com/\' title=\'GtMetrix Website\' target=\'_blank\'>GtMetrix</a></em> as an additional montoring tool.',
        '• <em class=\'alt\'><a href=\'https://www.screamingfrog.co.uk/seo-spider/\' title=\'Screaming Frog Website\' target=\'_blank\'>Screaming Frog</a></em> helped us minimize redirects, identify broken links, fix missing H1\'s, identify issues with our Robots.txt and sitemap, and much more.',
        '• Used NPM package to handle UGC links rel=”ugc nofollow”',
        '<br/>',

        '<strong>3rd party scripts</strong>',
        '• Lambda function to assist with our SEO objectives. 3rd Party Scripts were minified, cloned, cached and served from our own S3 bucket. A Slack integration alerted us whenever this function ran.',
        '<br/>',

        '<strong>Elastic Search</strong>',
        '• Brought more use to our search page as well as other pages',
        '• <em class=\'alt\'>Fuzzy matching</em> and <em class=\'alt\'>auto-complete</em>. Able to search against many different resource types in one search box',
        '• Setup tools for the team to easily update/copy/remove/etc our indices and migrate data up/down environments',
        '• Worked to replace Google Maps Places API with in-house ES version which <em>decreased API costs by approximately $87,000 yearly</em>',
        '<br/>',

        '<strong>Tealium (Powered by Google Analytics)</strong>',
        '• Created a shared library of tracking function, constants and other helpers to ensure we dont have regressions with our tracking',
        '• 100% Unit and integration tested',
        '• GraphqQl query partials ensured that all data needed was retrieved',
        '• Great configuration makes it simple to update how the data is transposed',
        '• Custom components to simplify the adding of new tracking events'
      ]
    }
  ]
};

export const techIcons = [
  { name: 'Javascript', icon: ['fab', 'node-js']},
  { name: 'Node', icon: ['fab', 'node']},
  { name: 'React', icon: ['fab', 'react']},
  { name: 'HTML5', icon: ['fab', 'html5']},
  { name: 'CSS3', icon: ['fab', 'css3-alt']},
];

export const copy = {
  title: 'Seasoned Javascript Geek',
  subtitle: 'Breaking things since 2000',
  description: `I’m an experienced web developer, woodworker and
  green-thumbed creative with a passion for creating beautiful
  websites, projects and lawns. I work quickly, efficiently and
  if I don\'t know something, I learn it. I am extremely motivated
  and thrive on working hard.`,
  references: {
    title: 'Wonderful things people have to say about me',
  },
  highlight: {
    title: 'Employment Highlight',
  },
  skills: {
    title: 'Support others. Stay positive. Embrace Change. Take Risks.',
  },
  additionalExperience: {
    title: 'Additional Experience',
  }
};

export const skills = [
  { tag: 'Javascript', icon: 'heart' },
  { tag: 'Node', icon: 'heart' },
  { tag: 'React', icon: 'heart' },
  { tag: 'Redux' },
  { tag: 'GraphQl', icon: 'heart' },
  { tag: 'Elastic Search', icon: 'heart' },
  { tag: 'AWS' },
  { tag: 'Docker', icon: 'heart'},
  { tag: 'Keycloak' },
  { tag: 'Auth0', icon: 'heart'},
  { tag: 'Apollo' },
  { tag: 'Flow' },
  { tag: 'Webpack', icon: 'heart' },
  { tag: 'Gulp' },
  { tag: 'Storybook', icon: 'heart' },
  { tag: 'NPM' },
  { tag: 'MySql' },
  { tag: 'Angular' },
  { tag: 'jQuery' },
  { tag: 'HTML5', icon: 'heart' },
  { tag: 'CSS3', icon: 'heart' },
  { tag: 'SCSS/LESS', icon: 'heart' },
  { tag: 'Karma' },
  { tag: 'Enzyme' },
  { tag: 'Drupal'},
  { tag: 'SEO', icon: 'heart'},
  { tag: 'Site performance', icon: 'heart'},
  { tag: 'A/B testing', icon: 'heart'},
  { tag: 'Jest' },
  { tag: 'Lambda' },
  { tag: 'Git', },
  { tag: 'Firebase' },
  { tag: 'Tealium' },
  { tag: 'GA' },
  { tag: 'KISSmetrics' },
  { tag: 'Optimizely' },
  { tag: 'FileStack' },
  { tag: 'Balsamiq' },
  { tag: 'InvisionApp', icon: 'heart'},
  { tag: 'Adobe Photoshop', icon: 'heart' },
  { tag: 'Adobe Illustrator', icon: 'heart' },
  { tag: 'Adobe After Effects', icon: 'heart'},
  { tag: 'Jira' },
  { tag: 'Confluence' },
  { tag: 'GtMetrix'}
];

export const additionalExperience = [
  {
    name: 'Vsnap - Software Developer (Boston, MA)',
    date: {
      from: 'May 2014',
      until: 'Apr 2015',
      format: 'MMM YYYY',
    },
    description: 'Node.js / Angular.js / NPM / Gulp / Karma / Lint / Bower - Agile Development - Jira / Slack - Test-Driven Development - HTML5 / CSS3 - Minor backend/API bug fixes (Node.js) - Responsive across all modern devices and browsers - Wireframed in Balsamiq - User tested for UX/UI - Designed HI-Res mockups in Photoshop (side project) I was also very lucky to have built a life-size Doctor Who TARDIS to be a quiet space for recording vsnaps and to take phone calls.'
  },
  {
    name: 'Freelance Web Developer - Web Developer',
    location: null,
    date: {
      from: 'Aug 2011',
      until: 'Jan 2017',
      format: 'MMM YYYY',
    },
    description: 'Wordpress, EJS, jQuery, CreateJS, Static HTML, Email Templates, Heroku, GA'
  },
  {
    name: 'Acidotic Racing - Web Developer (Seacoast NH)',
    date: {
      from: 'Nov 2013',
      until: 'Dec 2015',
      format: 'MMM YYYY',
    },
    description: 'Angular, Firebase, Custom CMS'
  },
  {
    name: 'PICA Manufacturing Solutions - Web Developer (Derry, NH)',
    date: {
      from: 'Dec 2012',
      until: 'Dec 2014',
      format: 'MMM YYYY',
    },
    description: 'Designed and developed PICA Manufacturing\'s website to allow visitors clear and easy access to the company\'s brand, value propositions and general information. Also created new landing pages, trade booth designs and generating new customer leads through email marketing, Google Ads/Analytics, and custom landing pages. - Website Design & Development - User Testing - Tradeshow Booth Design - Brochure Design - Logo re-design - Folder Design - Pop-Up Banner design - White Paper Template - PICA About Video - PicaKit Video - Mailchimp - WuFoo'
  },
  {
    name: 'Central Midori - Web Developer',
    date: {
      from: 'Sept 2017',
      until: 'Jan 2018',
      format: 'MMM YYYY',
    },
    description: 'S3, CloudFront, EC2. Static HTML with Gulp and hosted Wordpress for Blog.'
  },
  {
    name: 'Marilinda Garcia for Congress - Web Developer (New Hampshire)',
    date: {
      from: 'Nov 2013',
      until: 'April 2014',
      format: 'MMM YYYY',
    },
    description: 'My primary role with this campaign is to create a website where voters have access to latest news, social media links and general campaign information. Other responsibilities include: graphic design, photo editing and logo design.'
  },
  {
    name: 'Startup Institute - Product & Design (Boston, MA)',
    date: {
      from: 'Mar 2014',
      until: 'Apr 2014',
      format: 'MMM YYYY',
    },
    description: 'Selected by Startup Institute in a highly competitive process to attend an intensive training program focused on developing the core skills in product & design to have a meaningful and positive influence on a startup\'s objectives. - HTML, CSS, jQuery and Javascript - Product Management - Responsive Design - Organizing a Design Project - User Centered Design & Whiteboarding - Wireframing & Rapid Prototyping - Typography'
  }
];
/* eslint-enable max-len */

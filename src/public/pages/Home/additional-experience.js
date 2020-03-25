import React from 'react';
import { Link } from 'react-router-dom';
import Article from 'components/Article';
import moment from 'moment';

const AdditionalExperience = () => {
  /* eslint-disable max-len */
  const copy = {
    title: 'Additional Experience',
    content: [
      {
        name: 'Vsnap',
        title: 'Software Developer',
        location: 'Boston, MA',
        from: 'May 2014',
        until: 'Apr 2015',
        description: 'Node.js / Angular.js / NPM / Gulp / Karma / Lint / Bower - Agile Development - Jira / Slack - Test-Driven Development - HTML5 / CSS3 - Minor backend/API bug fixes (Node.js) - Responsive across all modern devices and browsers - Wireframed in Balsamiq - User tested for UX/UI - Designed HI-Res mockups in Photoshop (side project) I was also very lucky to have built a life-size Doctor Who TARDIS to be a quiet space for recording vsnaps and to take phone calls.'
      },
      {
        name: 'Freelance Web Developer',
        title: 'Web Developer',
        location: null,
        from: 'Aug 2011',
        until: 'Jan 2017',
        description: 'Wordpress, EJS, jQuery, CreateJS, Static HTML, Email Templates, Heroku, GA'
      },
      {
        name: 'Acidotic Racing',
        title: 'Web Developer',
        location: 'Seacoast NH',
        from: 'Nov 2013',
        until: 'Dec 2015',
        description: 'Angular, Firebase, Custom CMS'
      },
      {
        name: 'PICA Manufacturing Solutions ',
        title: 'Web Developer',
        location: 'Derry, NH',
        from: 'Dec 2012',
        until: 'Dec 2014',
        description: 'Designed and developed PICA Manufacturing\'s website to allow visitors clear and easy access to the company\'s brand, value propositions and general information. Also created new landing pages, trade booth designs and generating new customer leads through email marketing, Google Ads/Analytics, and custom landing pages. - Website Design & Development - User Testing - Tradeshow Booth Design - Brochure Design - Logo re-design - Folder Design - Pop-Up Banner design - White Paper Template - PICA About Video - PicaKit Video - Mailchimp - WuFoo'
      },
      {
        name: 'Central Midori',
        title: 'Web Developer',
        location: null,
        from: 'Sept 2017',
        until: 'Jan 2018',
        description: 'S3, CloudFront, EC2. Static HTML with Gulp and hosted Wordpress for Blog.'
      },
      {
        name: 'Marilinda Garcia for Congress',
        title: 'Web Developer',
        location: 'New Hampshire',
        from: 'Nov 2013',
        until: 'April 2014',
        description: 'My primary role with this campaign is to create a website where voters have access to latest news, social media links and general campaign information. Other responsibilities include: graphic design, photo editing and logo design.'
      },
      {
        name: 'Startup Institute',
        title: 'Product & Design',
        location: 'Boston, MA',
        from: 'Mar 2014',
        until: 'Apr 2014',
        description: 'Selected by Startup Institute in a highly competitive process to attend an intensive training program focused on developing the core skills in product & design to have a meaningful and positive influence on a startup\'s objectives. - HTML, CSS, jQuery and Javascript - Product Management - Responsive Design - Organizing a Design Project - User Centered Design & Whiteboarding - Wireframing & Rapid Prototyping - Typography'
      }
    ]
  };

  return [
    <Article title={copy.title} key="main">
      { copy.content.map((exp, index) => (
        <div key={index}>
          <h3>
            <strong>{ exp.name }</strong>
            &nbsp;
            <time dateTime={moment(exp.from, 'MMM YYYY').format()}>
              { exp.from }
            </time> -
            <time dateTime={moment(exp.until, 'MMM YYYY').format()}>
              { exp.until }
            </time>
          </h3>
          <p>{ exp.description }</p>
          <br/>
        </div>
      ))}
    </Article>,
    <Article title="Other Potentially Relevent Experience" key="other">
      <p>
        I haven't always been a professional coder.
        <br/><br/>
        In fact, I have a rich
        history of experiences that could prove relevent to a future employment
        offer and helpful while considering me as your next hire.
        <br/><br/>
        I have decided toincluded this in order to represent myself as best as
        possible.
      </p>
      <br/>
      <br/>
      <Link
        to="/other-experience/"
        title="Learn more about my other profesional and personal experience"
      >
        Learn more about my other professional and personal experience
      </Link>
      <br/>
    </Article>
  ];
};

export default AdditionalExperience;

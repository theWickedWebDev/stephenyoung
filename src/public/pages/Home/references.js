import React, { useState } from 'react';
import Article from 'components/Article';
import Posts from 'components/Posts';
import Viewport from 'components/Viewport';

const References = () => {
  /* eslint-disable max-len */
  const copy = {
    title: 'Wonderful things people had to say',
    showMore: 'Show More References',
    content: [
      {
        name: 'Konrad Zalewski',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQFmHDIgBG7O_Q/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=og-ZuCN_nMbRmcjev_JN2jk8qTmqyXj_mgY3bDI6oIU',
        link: 'https://www.linkedin.com/in/konrad-zalewski-605b9112/',
        title: 'Impassioned front end technologist',
        content: 'Stephen is a great developer that excels in many qualities often overlooked in developers.He possesses an entrepreneurial spirit and "go get it" attitude that allows him to confront any challenge head on. He goes above and beyond to take initiative to research problems and solutions to not only his own projects and tasks but to problems in the business overall. Having worked remotely with Stephen I can attest that he is a great communicator. Remote teams present many challenges but Stephen has a knack for keeping communication lines open and keeping information flowing among the team. Maybe most importantly, Stephen is a great learner. He is both great at receiving criticism and giving back constructive criticism. He never takes things personally and instead sees things objectively as opportunities for personal growth or of doing what\'s best for the team as a whole.',
        relevant: true
      },
      {
        name: 'Chris Chambers',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHGQ1z3cDsTdw/profile-displayphoto-shrink_800_800/0?e=1588809600&v=beta&t=7nknxuXRZ6g7gHsvu-PwZuMEyCH3Ql711hDxmy8PnGc',
        link: 'https://www.linkedin.com/in/chris-chambers-47a3a8147/',
        title: 'Looking for ways to change the world',
        content: 'Stephen has unstoppable energy and enthusiasm. He has a deep intuitive understanding of design and how it translates to the web, recognizing in seconds issues that might normally take several iterations to uncover. He\'s a highly collaborative team member with top-notch execution who constantly works to raise the quality around him. He\'s fast, efficient, and delivers immaculate results. And in all that, he\'s cheerful, fun, and a joy to work with. I can\'t recommend him highly enough.',
        relevant: true
      },
      {
        name: 'Winfield Trail',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQGypiSJAZ4tHw/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=NSMwHjf3v4ZURo5dWKfJ1jHSotPGI8EKGVl1p-TTYDE',
        link: 'https://www.linkedin.com/in/winfield-trail-a9799329/',
        title: 'Lead Programmer, Paint Nite d/b/a Yaymaker',
        content: 'Stephen is one of my most valued colleagues, and nobody can bang out CSS faster or better than him. In his time with Paint Nite [Yaymaker], Stephen has successfully evangelized technologies like Less, Gulp, and Angular, which alongside his spectacular problem-solving ability have radically improved every aspect of our product. It is my privilege to work with Mr. Young, so much that I can overlook his barbaric preference for soft tab indentation when editing HTML. He is a consummate team player: even though in terms of capability, he is an army of one.',
        relevant: true
      },
      {
        name: 'Katelyn Friedson',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQF5wL91d9VdDw/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=NUMUJnbShrleFsMsJE2s2JT26c962vudRN3j-7TqT9A',
        link: 'https://www.linkedin.com/in/kfriedson/',
        title: 'Product Manager, at Paint Nite d/b/a Yaymaker',
        content: 'I have worked with few developers who are as knowledgeable, passionate and effective at creating beautiful and engaging user experiences as Stephen has at Paint Nite. Stephen is not only highly skilled and agile, but he also has excellent people, communication and leadership skills which make him a pleasure to work with, and an invaluable part of any web team. As lead developer at Paint Nite, Stephen not only demonstrates a mastery of web technologies, but also a commanding grasp and deep understanding of business goals and cross-functional initiatives. Stephen has been a key contributor to the success of Paint Nite\'s \'Next Gen\' product launch, and has been a valued and respected member of the organization. On a personal level, Stephen has a great sense of humor, contagious creative energy, and has lots of hidden artistic talents. :)',
        relevant: true
      },
      {
        name: 'Ryan McDonald',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGl8srY1KmJdQ/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=c1H7YEH9Hdw2Izrj6-8ne2xhe3CN8i5ELpLGkQRcQos',
        link: 'https://www.linkedin.com/in/rpmcdonald/',
        title: 'Full Stack Developer, Vsnap',
        content: 'Stephen is a passionate, driven and talented developer. His love for programming is clearly visible in his tireless dedication to a project and his artistic abilities and creativity only add to his effectiveness as a front end web developer. Stephen and I first worked together when he was brought on as an interim-developer at Vsnap while he planned a move from Boston, MA to Austin, TX. He quickly picked up AngularJS (a front end framework that was new to him) and demonstrated so much ambition that he was hired as a full time front end dev despite the fact that he would be moving and have to work remotely. As a member of the Vsnap dev team Stephen was always happy to pick up any task that needed doing and never shy about working on things that were outside of his comfort zone. He as always very helpful if I ever had a question and very open to discussion when deciding the best way to tackle a problem. I would highly recommend Stephen and would love to work with again if the opportunity presented itself.',
        relevant: true
      },
      {
        name: 'Dave McLaughlin',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQElcXREaOzWXw/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=3zUvQSOG-tWwkTFdPjWMjPJXD9e6cuqvL4gjgdjQ_I0',
        link: 'https://www.linkedin.com/in/davemacboston/',
        title: 'CEO & Co-Founder, Vsnap',
        content: 'Stephen is super talented and hard working, and he\'s also just a wonderful guy and an amazing team member. He has the creative spirit of an artist and the work ethic of a coal miner. Absolutely a guy who amplifies the energy and brings great things to any team. He brought so much to our product at Vsnap, and it\'s a true pleasure to recommend him.',
        relevant: true
      },
      {
        name: 'Niksa Janjic',
        title: 'Developer, Vsnap',
        content: 'Stephen is a talented Frontend developer who also has a keen eye for design. As a developer at Vsnap he worked on a frontend part of the app developing in Angular. He is very fast at delivering new features and rewrote whole HTML/CSS part of the app to optimize it and improve it noticeably. He is capable of making pages from scratch, creating beautiful designs straight from the head. He also wrote lots and refactored most of unit-tests with a coverage over 90%, created bunch of directives to reduce boilerplate code and made sure all pages are responsive and work cross-browser. He usually reviewed my code and gave me ideas and advices how to improve it and made sure it is optimized and minimal as possible.'
      },
      {
        name: 'Nathan Levesque',
        title: 'Lead Software Developer, Vsnap',
        content: 'Stephen is a strong front end developer who doesn\'t hesitate to dive in and learn backend services for feature implementation and bug fixes. Recently, Stephen put in a great deal of effort to identify and fix some deficiencies with our Jasmine-based front end tests which enabled the tests to be much more stable. Stephen is very talented in taking web designs from a designer and implementing them in a page with responsive design. In particular he has greatly refactored the Vsnap application\'s CSS to eliminate duplication and improve page load times.'
      },
      {
        name: 'Guillaume Delloue',
        title: 'Director of Marketing, Vsnap',
        content: 'Stephen is a talented front-end developer with an immense appetite for learning and improving his skills. I can guarantee he\'ll be in the top 10% of the most productive developers in any organization. He\'s also a team player who\'s sensitive to the needs of other departments (marketing, sales, support etc.). Combined with his friendly demeanor and positive attitude Stephen is that rare dev talent any tech company would want to have. I highly recommend him.'
      },
      {
        name: 'Christopher Swenor',
        content: 'It was amazing watch Stephen grow into what he is today. He started off as a Junior Developer and has grown into a developer that I can truly trust to make the right decisions. He has passion for JavaScript, and shows it in his work ethic. Vsnap is a better product because we found Stephen. He is extremely creative, and a pleasure to work with. I would do it again any chance I get.',
        title: 'CTO, Vsnap'
      },
      {
        name: 'Brad Stevens',
        content: 'Stephen did a tremendous job detailing the essential components of the campaign\'s website and putting it together in a way that was visually stunning and easy to navigate. Stephen is great to work with and very responsive. I would highly recommend Stephen to any candidate, business or organization looking to make their digital mark.',
        title: 'worked directly with Stephen at Marilinda Garcia for Congress'
      }
    ]
  };
  /* eslint-enable max-len */

  const ITEMS_TO_SHOW = 3;
  const STARTING_ITEM = 0;

  const [limit, setLimit] = useState(ITEMS_TO_SHOW);
  const references = copy.content;

  return (
      <Viewport>{ (viewport) => (
        <Article title={copy.title}>
          <Posts references={references.slice(STARTING_ITEM, limit)} />
          { limit < references.length &&
            <div className="text-align-center">
              <button
                className="btn-link-full"
                onClick={() => setLimit(references.length)}
              >
                {copy.showMore}
              </button>
            </div>
          }
        </Article>
      )}</Viewport>
  );
};

export default References;

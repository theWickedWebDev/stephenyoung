// Dependencies
import React, { useState } from 'react';

// Components
import { Post, Avatar, List } from '@thewickedwebdev/components';
import Link from 'components/Link';

// Styling
import './list.scss';

// Main
const References = (props) => {
  const ITEMS_TO_SHOW = 7;
  const STARTING_ITEM = 0;

  const data = [
    {
      name: 'Konrad Zalewski - Coworker @ Paint Nite',
      image: 'https://cdn.thewickedweb.dev/images/resume/konrad.jpeg',
      link: 'https://www.linkedin.com/in/konrad-zalewski-605b9112/',
      title: 'Stephen is a great developer that excels in many qualities often overlooked',
      content: 'He possesses an entrepreneurial spirit and "go get it" attitude that allows him to confront any challenge head on. He goes above and beyond to take initiative to research problems and solutions to not only his own projects and tasks but to problems in the business overall. Having worked remotely with Stephen I can attest that he is a great communicator. Remote teams present many challenges but Stephen has a knack for keeping communication lines open and keeping information flowing among the team. Maybe most importantly, Stephen is a great learner. He is both great at receiving criticism and giving back constructive criticism. He never takes things personally and instead sees things objectively as opportunities for personal growth or of doing what\'s best for the team as a whole.',
    },
    {
      name: 'Danielle Pillion - Supervisor @ Paint Nite',
      image: 'https://cdn.thewickedweb.dev/images/resume/dee-pillion.jpeg',
      link: 'https://www.linkedin.com/in/daniellepillion/',
      title: "Stephen's impeccable work ethic and dedication to drive projects to their completion has made him a valuable asset to the team.",
      content: "I have had the pleasure of managing Stephen for four years. Stephen's impeccable work ethic and dedication to drive projects to their completion has made him a valuable asset to the team. He takes ownership for his work and he is committed to finding solutions to complex problems. As a remote employee, Stephen's excellent communication skills allow him to create a team atmosphere and drive collaboration amongst fellow engineers and QA. His passion for delivering quality products to customers, attention to detail, and partnership with Product Managers have enhance our product consistently. It was a true pleasure to work with Stephen.",
    },
    {
      name: 'Chris Chambers - Coworker @ Paint Nite',
      link: 'https://www.linkedin.com/in/chris-chambers-47a3a8147/',
      title: 'Stephen has unstoppable energy and enthusiasm.',
      content: 'He has a deep intuitive understanding of design and how it translates to the web, recognizing in seconds issues that might normally take several iterations to uncover. He\'s a highly collaborative team member with top-notch execution who constantly works to raise the quality around him. He\'s fast, efficient, and delivers immaculate results. And in all that, he\'s cheerful, fun, and a joy to work with. I can\'t recommend him highly enough.',
    },
    {
      name: 'Winfield Trail - Coworker @ Paint Nite',
      link: 'https://www.linkedin.com/in/winfield-trail-a9799329/',
      title: 'Stephen is one of my most valued colleagues',
      content: '[...] and nobody can bang out CSS faster or better than him. In his time with Paint Nite [Yaymaker], Stephen has successfully evangelized technologies like Less, Gulp, and Angular, which alongside his spectacular problem-solving ability have radically improved every aspect of our product. It is my privilege to work with Mr. Young, so much that I can overlook his barbaric preference for soft tab indentation when editing HTML. He is a consummate team player: even though in terms of capability, he is an army of one.',
    },
    {
      name: 'Katelyn Friedson - Coworker @ Paint Nite',
      link: 'https://www.linkedin.com/in/kfriedson/',
      title: 'I have worked with few developers who are as knowledgeable, passionate and effective at creating beautiful and engaging user experiences as Stephen has at Paint Nite.',
      content: 'Stephen is not only highly skilled and agile, but he also has excellent people, communication and leadership skills which make him a pleasure to work with, and an invaluable part of any web team. As lead developer at Paint Nite, Stephen not only demonstrates a mastery of web technologies, but also a commanding grasp and deep understanding of business goals and cross-functional initiatives. Stephen has been a key contributor to the success of Paint Nite\'s \'Next Gen\' product launch, and has been a valued and respected member of the organization. On a personal level, Stephen has a great sense of humor, contagious creative energy, and has lots of hidden artistic talents. :)',
    },
    {
      name: 'Ryan McDonald - Coworker @ Vsnap',
      link: 'https://www.linkedin.com/in/rpmcdonald/',
      title: 'Stephen is a passionate, driven and talented developer. ',
      content: 'His love for programming is clearly visible in his tireless dedication to a project and his artistic abilities and creativity only add to his effectiveness as a front end web developer. Stephen and I first worked together when he was brought on as an interim-developer at Vsnap while he planned a move from Boston, MA to Austin, TX. He quickly picked up AngularJS (a front end framework that was new to him) and demonstrated so much ambition that he was hired as a full time front end dev despite the fact that he would be moving and have to work remotely. As a member of the Vsnap dev team Stephen was always happy to pick up any task that needed doing and never shy about working on things that were outside of his comfort zone. He as always very helpful if I ever had a question and very open to discussion when deciding the best way to tackle a problem. I would highly recommend Stephen and would love to work with again if the opportunity presented itself.',
    },
    {
      name: 'Dave McLaughlin - CEO @ Vsnap',
      link: 'https://www.linkedin.com/in/davemacboston/',
      title: 'Stephen is super talented and hard working, and he\'s also just a wonderful guy and an amazing team member.',
      content: 'He has the creative spirit of an artist and the work ethic of a coal miner. Absolutely a guy who amplifies the energy and brings great things to any team. He brought so much to our product at Vsnap, and it\'s a true pleasure to recommend him.',
    }
  ];

  const [limit, setLimit] = useState(ITEMS_TO_SHOW);
  const list = [...data].slice(STARTING_ITEM, limit);

  const renderItems = (ref, index) => {
    // Changes the styles a bit to show differences
    let avatar = null;
    if (ref.image || index < list.length - 2) {
      avatar = ref.image
        ?  <Avatar type="secondary" size={70} image={ref.image}/>
        :  <Avatar size={70} icon="user" bgColor="#f4f4f4" color="#b1b1b1"/>;
    }

    return (
      <Post
        avatar={avatar}
        author={ref.name}
        link={ref.link}
        title={ref.title}
        content={ref.content}
      />
    );
  };

  return (
    <React.Fragment>
      <List
        items={list}
        className="ReferencesComponent"
        itemClassName="ReferencesComponent__listItem"
        renderer={renderItems}
      />
      <SeeMore/>
    </React.Fragment>
  );
};

const SeeMore = () => (
  <div className="btn-container align-center">
    <Link
      href="https://www.linkedin.com/in/thewickedwebdev/"
      target="_blank"
      title="See references on LinkedIn"
      className="btn btn-secondary"
    >
      Show More References
    </Link>
  </div>
);

export default References;

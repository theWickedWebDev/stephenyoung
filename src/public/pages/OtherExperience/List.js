

// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';

// Components
import Meta from 'components/Meta';
import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';

// <Medical/> Page
const OtherExperienceList = () => {
  return (
    <div className="homepage__page">
      <Meta
        robots="index"
        title="I am more than just a coder"
        description={
          "I have various experience in many other industries as well " +
          "such as medical, woodworking and art"
        }
        canonical="https://www.thewickedweb.dev/other-experience/"
      />
      <Header
        title="I am more than just a coder"
        subtitle="I have various experience in many other industries as well"
        avatar={`${S3_URL}/images/avatar/avatar-2.svg`}
      />
      <Section>
        <Article title="Medical Industry - 5 years professional experience">
          <hr/>
          <br/>
          <h3>Phlebotomist / Medical Assistant</h3>
          <Link
            to="/other-experience/medical/"
            title="Learn more about my medical experience"
          >
            Learn more about my medical experience
          </Link>
        </Article>

        <Article title="Woodworking - Apprenticeship and Hobbyist">
          <hr/>
          <br/>
          <h3>Apprentice</h3>
          <span>
            Learn More about my apprenticeship (Coming Soon)
          </span>
          <br/><br/>

          <h3>Hobbyist</h3>
          <span>
            Learn More about my my personal woodworking projects (Coming Soon)
          </span>
        </Article>

        <Article title="Hobbyist">
          <hr/>
          <br/>
          <h3>Art & Design (my whole life)</h3>
          <span>
            Learn More about my artistic talents (Coming Soon)
          </span>
          <br/><br/>

          <h3>DIY</h3>
          <span>
            Learn More about my DIY projects (Coming Soon)
          </span>
          <br/><br/>
        </Article>
      </Section>
    </div>
  );
};

export default OtherExperienceList;

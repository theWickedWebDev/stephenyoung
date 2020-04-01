// Dependencies
import React from 'react';

// Components
import { Page, Section, Article } from '@thewickedwebdev/components';

import Link from 'components/Link';
import Header from 'components/Header';
import Gallery from 'components/Gallery';

const OtherExperience = (props) => {
  const content = {
    title: "I am more than just a coder",
    description: `I have a rich history of experiences ranging from
    working in the medical field to woodworking. Hopefully this will start
    to give a good representation of where I came from and who I am today.`,
  };

  return (
    <Page
      className="OtherExperience__page"
      meta={{
        canonical: WEBSITE_URL + props.location.pathname,
        title: content.title,
        description: content.description
      }}
    >
      <Header
        title={content.title}
        subtitle={content.description}
        style={{ backgroundColor: "#444444" }}
      />
      <Section className="container-fh">
        <Article title="Professional">
          <h3>Phlebotomist / Medical Assistant (5 years experience)</h3>
          <Link
            internal={true}
            href="/other-experience/medical/"
            title="Learn more about my medical experience"
          >
            Learn more about my medical experience
          </Link>
        </Article>
        <Article title="Enthusiast">
          <h3>Woodworking Apprentice & Hobbyist</h3>
          <span>Learn More about my woodworking experience</span>
          <br/><br/>
          <h3>Art & Design (my whole life)</h3>
          <span>(More Coming Soon)</span>
          <br/><br/>
          <h3>DIY</h3>
          <span>(More Coming Soon)</span>
        </Article>
        <Gallery/>
      </Section>
    </Page>
  );
}

export default OtherExperience;

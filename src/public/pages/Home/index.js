/**
 * Dependencies
 */
import React from 'react'
import { Helmet } from "react-helmet";

/**
 * Components
 */
import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';
import Posts from 'components/Posts';
import Gallery from 'components/Gallery';
import TagList from 'components/TagList';

/**
 * Resume Data
 */
import RESUME from '../../resume.json';
import CONTENT from '../../content.json';

/**
 * Main Homepage Function
 */
const Home = () => {
  const {
    skills,
    additionalExperience,
    references,
    conclusion,
    gallery,
    highlight,
   } = RESUME;

  return (
    <div>
      <Helmet>
        <title>{CONTENT.homepage.meta.title}</title>
        <link rel="canonical" href="https://www.thewickedweb.dev/" />
        <meta name="description" content={CONTENT.homepage.description} />
      </Helmet>
      <Header
        title={CONTENT.homepage.title}
        intro={CONTENT.homepage.description}
        withAvatar={true}
      />
      <Section>
        <br/>
        <br/>
        { CONTENT.homepage.introduction.map((text, index) => (
          <p
            key={index}
            data-aod="fade-in"
            className="margin-bottom-lg"
            dangerouslySetInnerHTML={{__html: text }}
          />
        ))}
        <br/>
        <a className="btn-link-full" href="#">
          <i class="fas fa-download margin-right-lg"></i>
          {CONTENT.downloadResume}
        </a>
        <br/>
        <br/>
        <Article title={skills.title}>
          <ul className="icon-list icon-list-light">
            <li className="icon-list-item"><i className="fab fa-node-js"/></li>
            <li className="icon-list-item"><i className="fab fa-react"/></li>
            <li className="icon-list-item"><i className="fab fa-html5"/></li>
            <li className="icon-list-item"><i className="fab fa-css3-alt"/></li>
            <li className="icon-list-item"><i className="fab fa-node"/></li>
          </ul>
          <br/>
          <p>{skills.tech.title}</p>
          <TagList list={skills.tech.content}/>
          <br/>
            <p>{skills.other.title}</p>
          <TagList list={skills.other.content}/>
        </Article>

        <Article title={highlight.title}>
          <h3>
            <a href={highlight.link} rel="nofollow" target="_blank">
              {highlight.header}
              <i className="fas fa-link"/>
            </a>
          </h3>
          <div>
            <img
              src={highlight.logo}
              className="vertical-align-middle margin-right-lg"
              width="90px"
              alt="Logo"
            />
            <div className="vertical-align-middle">
            { highlight.roles.map((role, index) => {
              if (index === 0) {
                return (<p key={index}><strong>{role}</strong></p>);
              } else {
                return (<p key={index}>{role}</p>);
              }
            })}
            </div>
          </div>
          <br/>
          <p><strong>{highlight.focusHeader}</strong>: {highlight.focus}</p>
          <br/>
          {highlight.content.map((h, index) => (
            <details key={index}>
              <summary data-aos="zoom-in-up">
                { h.title }
                { h.project &&
                  <span className="project">
                    {CONTENT.project}
                  </span>
                }
                { h.general &&
                  <span className="general">
                    {CONTENT.general}
                  </span>
                }
              </summary>
              <ul className="bulleted-list">
                { h.content.map((content, index) => (
                  <li
                    className="bulleted-list-item"
                    key={index}
                  >
                    <div dangerouslySetInnerHTML={{__html: content }} />
                  </li>
                )) }
              </ul>
            </details>
          ))}
        </Article>

        <Article title={additionalExperience.title}>
        { additionalExperience.content.map((exp, index) => {
          return (
            <div key={index}>
              <h5>
                <a href={ exp.link } className={!exp.link ? 'disabled' : ''}>
                  <strong>
                    { exp.name }
                    { exp.link && <i className="fas fa-link padding-left-sm"/> }
                  </strong>
                </a>, { exp.location } — { exp.from } - { exp.until }
              </h5>
              <p>{ exp.description }</p>
              <br/>
            </div>
          );
        })}
        </Article>

        <Article title={references.title}>
          <Posts references={references.content} />
        </Article>

        <Article title={conclusion.title}>
        { conclusion.content.map((text, index) => (
          <p
            key={index}
            data-aod="fade-in"
            className="margin-bottom-lg"
            dangerouslySetInnerHTML={{__html: text }}
          />
        ))}
        </Article>

        <Article title={gallery.title}><Gallery/></Article>
      </Section>
    </div>
  );
};

export default Home;

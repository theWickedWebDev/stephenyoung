/**
 * Dependencies
 */
import React from 'react'
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

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
 * Main Homepage Function
 */

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('homepage:meta:title')}</title>
        <link rel="canonical" href="https://www.thewickedweb.dev/" />
        <meta name="description" content={t('homepage:meta:description').substring(0, 160)} />
      </Helmet>
      <Header
        title={t('homepage:title')}
        intro={t('homepage:description')}
        withAvatar={true}
      />
      <Section>
        <Article title={t('resume:skills:title')}>
          <ul className="icon-list icon-list-light">
            <li className="icon-list-item"><i className="fab fa-node-js"/></li>
            <li className="icon-list-item"><i className="fab fa-react"/></li>
            <li className="icon-list-item"><i className="fab fa-html5"/></li>
            <li className="icon-list-item"><i className="fab fa-css3-alt"/></li>
            <li className="icon-list-item"><i className="fab fa-node"/></li>
          </ul>
          <br/>
          <p>{t('resume:skills:tech:title')}</p>
          <TagList
            list={t('resume:skills:tech:content', { returnObjects: true })}/>
          <br/>
            <p>{t('resume:skills:other:title')}</p>
          <TagList
            list={t('resume:skills:other:content', { returnObjects: true })}/>
        </Article>

        <Article title={t('resume:highlight:title')}>
          <h3>
            <a href={t('resume:highlight:link')} rel="nofollow" target="_blank">
              {t('resume:highlight:header')}
              <i className="fas fa-link"/>
            </a>
          </h3>
          <div>
            <img
              src={`${S3_URL}${S3_IMAGES_PATH}${S3_RESUME_PATH}/${t('resume:highlight:logo')}`}
              className="vertical-align-middle margin-right-lg"
              width="90px"
              alt="Logo"
            />
            <div className="vertical-align-middle">
            { t('resume:highlight:roles', { returnObjects: true })
              .map((role, index) => {
                if (index === 0) {
                  return (<p key={index}><strong>{role}</strong></p>);
                } else {
                  return (<p key={index}>{role}</p>);
                }
              })
            }
            </div>
          </div>
          <br/>
          <p>
            <strong>
            {t('resume:highlight:focusHeader')}
            </strong>: {t('resume:highlight:focus')}
          </p>
          <br/>
          {t('resume:highlight:content', { returnObjects: true }).map((h, index) => (
            <details key={index}>
              <summary data-aos="zoom-in-up">
                { h.title }
                { h.project &&
                  <span className="project">
                    {t('general:project')}
                  </span>
                }
                { h.general &&
                  <span className="general">
                    {t('general:general')}
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

        <Article title={t('resume:additionalExperience:title')}>
        { t('resume:additionalExperience:content', { returnObjects: true })
          .map((exp, index) => {
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
          })
        }
        </Article>

        <Article title={t('resume:references:title')}>
          <Posts
            references={t('resume:references:content', { returnObjects: true })}
          />
        </Article>

        <Article title={t('gallery:title')}><Gallery/></Article>
      </Section>
    </div>
  );
};

export default Home;

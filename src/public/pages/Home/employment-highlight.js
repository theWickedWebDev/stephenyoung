import React from 'react'
import { useTranslation } from 'react-i18next';
import Article from 'components/Article';
import LazyLoad from 'components/LazyLoad/LazyLoad';

const EmploymentHighlight = () => {
  const { t, i18n } = useTranslation();

  return (
    <Article title={t('resume:highlight:title')}>
      <h3>
        <a href={t('resume:highlight:link')} rel="nofollow" target="_blank">
          {t('resume:highlight:header')}
          <i className="fas fa-link"/>
        </a>
      </h3>
      <div>
        <LazyLoad>
          <img
            src={`${S3_URL}${S3_IMAGES_PATH}${S3_RESUME_PATH}/${t('resume:highlight:logo')}`}
            className="vertical-align-middle margin-right-lg"
            width="90px"
            alt="Logo"
          />
        </LazyLoad>
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
  );
};

export default EmploymentHighlight;

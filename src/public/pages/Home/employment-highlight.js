
import React from 'react'
import { useTranslation } from 'react-i18next';
import Article from 'components/Article';
import LazyLoad from 'components/LazyLoad';
import stripHtml from 'string-strip-html';
import moment from 'moment';

const EmploymentHighlight = () => {
  const { t, i18n } = useTranslation();

  const LogoImage = () => (
    <img
      src={`${S3_URL}${S3_IMAGES_PATH}${S3_RESUME_PATH}/${t('resume:highlight:logo')}`}
      className="vertical-align-middle margin-right-lg highlight-logo"
      width="90px"
      alt="Logo"
      title="Logo"
    />
  );

  return (
    <div className="employment-highlight__component" id="employmentHighlight">
      <Article title={t('resume:highlight:title')}>
        <div>
          <noscript><LogoImage/></noscript>
          <LazyLoad><LogoImage/></LazyLoad>
          <h3 className="employment-highlight__h3">
            <a
              href={t('resume:highlight:link')}
              rel="nofollow"
              target="_blank"
              title={stripHtml(t('resume:highlight:header'))}
            >
              {t('resume:highlight:header')}
              &nbsp;
              <address style={{display: 'inline-block'}}>
                {t('resume:highlight:address')}
              </address>
              &nbsp;
              <em className="fas fa-link"/>
            </a>
          </h3>
          <div className="vertical-align-middle">
          { t('resume:highlight:roles', { returnObjects: true })
            .map((role, index) => (
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
          {t('resume:highlight:focusHeader')}
          </strong>: {t('resume:highlight:focus')}
        </p>
        <br/>

        <p
          dangerouslySetInnerHTML={{__html: t('resume:highlight:description')}}
        />

        <br/>

        {t('resume:highlight:content', { returnObjects: true }).map((h, index) => (
          <details key={index}>
            <summary data-aos="zoom-in-up">{ h.title }</summary>
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

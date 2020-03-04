import React from 'react'
import { useTranslation } from 'react-i18next';
import Article from 'components/Article';

const AdditionalExperience = () => {
  const { t, i18n } = useTranslation();

  return (
    <Article title={t('resume:additionalExperience:title')}>
    { t('resume:additionalExperience:content', { returnObjects: true })
      .map((exp, index) => {
        return (
          <div key={index}>
            <h3>
              <a href={ exp.link } className={!exp.link ? 'disabled' : ''}>
                <strong>
                  { exp.name }
                  { exp.link && <i className="fas fa-link padding-left-sm"/> }
                </strong>
              </a>, { exp.location } — { exp.from } - { exp.until }
            </h3>
            <p>{ exp.description }</p>
            <br/>
          </div>
        );
      })
    }
    </Article>
  );
};

export default AdditionalExperience;

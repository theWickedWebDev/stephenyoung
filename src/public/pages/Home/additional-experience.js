import React from 'react'
import { useTranslation } from 'react-i18next';
import Article from 'components/Article';
import moment from 'moment';

const AdditionalExperience = () => {
  const { t, i18n } = useTranslation();

  return (
    <Article title={t('resume:additionalExperience:title')}>
    { t('resume:additionalExperience:content', { returnObjects: true })
      .map((exp, index) => {
        return (
          <div key={index}>
            <h3>
            <strong>{ exp.name }</strong>&nbsp;
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
        );
      })
    }
    </Article>
  );
};

export default AdditionalExperience;

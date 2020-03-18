import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Article from 'components/Article';
import moment from 'moment';

const AdditionalExperience = () => {
  const { t, i18n } = useTranslation();

  return [
    <Article title={t('resume:additionalExperience:title')} key="main">
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
    </Article>,
    <Article title="Other Potentially Relevent Experience" key="other">
      <p>
        I haven't always been a professional coder.
        <br/><br/>
        In fact, I have a rich
        history of experiences that could prove relevent to a future employment
        offer and helpful while considering me as your next hire.
        <br/><br/>
        I have decided toincluded this in order to represent myself as best as
        possible.
      </p>
      <br/>
      <br/>
      <Link
        to="/other-experience/"
        title="Learn more about my other profesional and personal experience"
      >
        Learn more about my other professional and personal experience
      </Link>
      <br/>
    </Article>
  ];
};

export default AdditionalExperience;

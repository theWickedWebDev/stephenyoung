import React from 'react'
import { useTranslation } from 'react-i18next';

const Conclusion = () => {
  const { t, i18n } = useTranslation();

  return (
    <Article title={t('homepage:title')}>
    { t('homepage:conclusion:content', { returnObjects: true })
      .map((text, index) => (
        <p
          key={index}
          data-aod="fade-in"
          className="margin-bottom-lg"
          dangerouslySetInnerHTML={{__html: text }}
        />
      ))}
    </Article>
  );
};

export default Conclusion;

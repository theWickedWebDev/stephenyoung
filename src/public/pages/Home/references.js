import React from 'react'
import { useTranslation } from 'react-i18next';
import Article from 'components/Article';
import Posts from 'components/Posts';

const References = () => {
  const { t, i18n } = useTranslation();

  return (
    <Article title={t('resume:references:title')}>
      <Posts
        references={t('resume:references:content', { returnObjects: true })}
      />
    </Article>
  );
};

export default References;

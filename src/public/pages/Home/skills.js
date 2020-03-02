import React from 'react'
import { useTranslation } from 'react-i18next';
import Article from 'components/Article';
import TagList from 'components/TagList';

const Skills = () => {
  const { t, i18n } = useTranslation();

  return (
    <Article title={t('resume:skills:title')}>
      <p>{t('resume:skills:tech:title')}</p>
      <TagList
        list={t('resume:skills:tech:content', { returnObjects: true })}/>
      <br/>
        <p>{t('resume:skills:other:title')}</p>
      <TagList
        list={t('resume:skills:other:content', { returnObjects: true })}/>
    </Article>
  );
};

export default Skills;

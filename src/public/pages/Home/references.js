import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Article from 'components/Article';
import Posts from 'components/Posts';
import Viewport from 'components/Viewport';

const References = () => {
  const { t, i18n } = useTranslation();

  const state = useState(3);
  const limit = state[0];
  const setLimit = state[1];

  const references = t('resume:references:content', { returnObjects: true });

  return (
    <Viewport>{ viewport => (
      <Article title={t('resume:references:title')}>
        <Posts references={references.slice(0, limit)} />
        { limit < references.length &&
          <div className="text-align-center">
            <button
              className="btn-link-full"
              onClick={() => setLimit(references.length)}
            >
              {t('resume:references:showMore')}
            </button>
          </div>
        }
      </Article>
    )}</Viewport>
  );
};

export default References;

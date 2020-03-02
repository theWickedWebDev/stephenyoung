import React from 'react'
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      { t('homepage:introduction', { returnObjects: true })
          .map((text, index) => (
              <p
                key={index}
                data-aod="fade-in"
                className="margin-bottom-lg"
                dangerouslySetInnerHTML={{__html: text }}
              />
            ))
      }
    </React.Fragment>
  );
};

export default Introduction;

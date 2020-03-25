
import React from 'react';
import Helmet from 'react-helmet';
import * as favicon from './favicon';
import * as og from './og';

const defaultTitle = 'Stephen Young - TheWickedWebDev';
const defaultDescription = 'Support others. Stay positive. Embrace Change. Take Risks.';
const defaultImage = `${S3_URL}/images/social/social-card-image.jpg`;

const Meta = (props) => {
  const {
    robots = 'noindex',
    keywords = "thewickedwebdev",
    title = defaultTitle,
    description = defaultDescription,
    canonical = false,
    siteName = 'TheWickedWebDev',
    image = defaultImage,
  } = props;

  const canonicalLink = canonical
    ? { rel: 'canonical', href: canonical } : null;

  const links = [...favicon.links];
  if (canonicalLink) links.push(canonicalLink);

  const metas = [
    ...favicon.meta,
    ...og.meta({ title, siteName, url: canonical, description, image }),
    { key: 'robots', name: "robots", content: robots },
    { key: 'keywords', name: "keywords", content: keywords },
    {
      key: 'description',
      name: 'description',
      content: description.substring(0, 160)
    },
  ];

  return (
    <Helmet>
      <title>{ title }</title>
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta http-equiv="content-language" content="en-us" />
      <meta name="author" content="Stephen Young" />
      { links.map((l, index) => <link key={index} {...l} />)}
      { metas.map((m, index) => <meta key={index} {...m} />)}
    </Helmet>
  );
};

export default Meta;

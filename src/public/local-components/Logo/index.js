import React from 'react';
import { Image } from '@thewickedwebdev/components';
import Link from 'components/Link';

const Logo = () => (
  <Link href="/" title="Home" internal={true} className="Logo__Link">
    <Image
      src={`${S3_URL}/images/logo/logo.jpg`}
      className="navbar__component-logo"
      alt="Logo for TheWickedWebDev"
      title="Logo for TheWickedWebDev"
      srcSet={`
        ${S3_URL}/images/logo/logo@2x.jpg 2x,
        ${S3_URL}/images/logo/logo@3x.jpg 3x
      `}
    />
  </Link>
);

export default Logo;

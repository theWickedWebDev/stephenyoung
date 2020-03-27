// Dependencies
import React from 'react';

// Components
import Image from 'components/Image';
import LazyLoad from 'components/LazyLoad';

// Styling
import './EmployerLogo.scss';

// Main
const EmployerLogo = ({ src, className }) => {
  if (!src) return null;

  const LogoImage = () => (
    <Image
      src={src}
      className="vertical-align-middle margin-right-lg EmployerLogo__image"
      width="90px"
      alt="Logo"
      title="Logo"
    />
  );

  return (
    <div className={`EmployerLogo ${className}`}>
      <noscript><LogoImage/></noscript>
      <LazyLoad><LogoImage/></LazyLoad>
    </div>
  )
};

export default EmployerLogo;

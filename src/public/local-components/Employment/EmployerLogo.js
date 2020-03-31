// Dependencies
import React from 'react';

// Components
import { Image } from '@thewickedwebdev/components';

// Styling
import './EmployerLogo.scss';

// Main
const EmployerLogo = ({ src, className }) => {
  if (!src) return null;

  const LogoImage = () => (
    <Image
      src={src}
      className="vertical-align-middle margin-right-lg EmployerLogo__image"
      width="120px"
      alt="Logo"
      title="Logo"
    />
  );

  return (
    <div className={`EmployerLogo ${className}`}>
      <LogoImage/>
    </div>
  )
};

export default EmployerLogo;

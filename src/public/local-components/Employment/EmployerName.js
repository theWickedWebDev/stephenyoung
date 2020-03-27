// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { Link } from '@thewickedwebdev/components';

// Styling
import './EmployerName.scss';

// Main
const EmployerName = ({ href, name, address, className }) => (
  <h3 className={`EmployerNameComponent ${className}`}>
    <Link
      href={href}
      rel="nofollow"
      target="_blank"
      title={name}
      className="EmployerNameComponent__Link"
    >
      <span className="EmployerNameComponent_name">
        { name }
      </span>
      <address className="EmployerNameComponent_address">
        { address }
      </address>
    </Link>
  </h3>
);

export default EmployerName;

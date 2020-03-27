// Dependencies
import React from 'react';
import moment from 'moment';

// Styling
import './EmploymentRoles.scss';

// Main
const EmploymentRoles = ({ roles, className }) => {
  if (!roles ||!roles.length === 0) return null;

  return (
    <div className={`EmploymentRoles ${className}`}>
      { roles.map((role, i) => <EmploymentRole {...role} key={i}/> )}
    </div>
  );
}

const EmploymentRole = ({ name, date: { from, until, format }}) => {
  const DEFAULT_FORMAT = 'MM/DD/YYYY';
  const DATE_DISPLAY_FORMAT = 'MMM, YYYY';

  const dateFormat = format || DEFAULT_FORMAT;

  return (
    <p className="EmploymentRoles_Role text-center-mobile">
      <strong>{ name }</strong>
      &nbsp;-&nbsp;
      <Date date={moment(from, dateFormat).format(DATE_DISPLAY_FORMAT)} /> -
      <Date date={moment(until, dateFormat).format(DATE_DISPLAY_FORMAT)} />
    </p>
  );
}

const Date = ({ date }) => (<time dateTime={date}>{ date }</time>);

export { EmploymentRole };
export default EmploymentRoles;

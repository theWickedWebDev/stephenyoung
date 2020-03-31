// @flow
// Dependencies
import React from 'react';

// Styling
import './styles.scss';

// Types
import type { SectionType } from '../flow-types';

// Main
const Section = (props : SectionType) => {
  const {
    title,
    className,
    children = null,
  } = props;

  const classes = ["SectionComponent"];
  if (className) classes.push(className);

  return (
    <section className={classes.join(' ')}>
      { title && <h1 className="SectionComponent__h1">{title}</h1>}
      { children }
    </section>
  );
}

export default Section;

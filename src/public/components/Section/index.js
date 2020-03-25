import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Section = (props) => {
    return <section className="section__component container-fh">
        { props.title &&
      <h1 className="section__component-h1">
          {props.title}
      </h1>
        }
        { props.children }
    </section>;
}
;

export default Section;

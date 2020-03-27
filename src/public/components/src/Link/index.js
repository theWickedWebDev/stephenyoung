import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = (props) => props.internal
  ? <InternalLink {...props}>{props.children}</InternalLink>
  : <ExternalLink {...props}>{props.children}</ExternalLink>

const InternalLink = ({ href, title, children, className, rel, target }) => (
  <Link
    to={href}
    className={className}
    title={title}
    rel={rel}
    target={target}
  >
    { children }
  </Link>
);

const ExternalLink = ({ href, title, children, className, rel }) => (
  <a
    href={href}
    className={className}
    target="_blank"
    title={title}
    rel={rel}
  >
    { children }
  </a>
);

export default CustomLink;

export {
  InternalLink,
  ExternalLink,
}

// TODO: Add LazyLoading by default

// @flow
// Dependencies
import React from 'react';
import log from 'loglevel';

// Components
import Lazy from '../Lazy/index.js';
import Skeleton from '../Skeleton/index.js';

// Types
import type { ImageType } from '../flow-types';

// Main
const Image = (props : ImageType) => {
  const DEFAULT_SKELETON = (
    <Skeleton.Rect
      height={props.height || '50px'}
      width={props.width || '50px'}
    />
  );

  const {
    src,
    className,
    alt,
    title,
    srcSet,
    height,
    width,
    lazy,
    lazyProps = { skeleton: DEFAULT_SKELETON },
    sizes,
  } = props;

  if (!src) {
    log.error("'src' is required for all <Image/>s");
    return null;
  }
  if (!alt) log.error("'alt' is required for all <Image/>s - " + src)
  if (!title) log.error("'title' is required for all <Image/>s - " + src)
  if (!srcSet) log.warn("'srcSet' is suggested for all <Image/>s - " + src)
  if (!height || !width) log.warn(
    "'height' and 'width' is highly suggested for all <Image/>s - " + src
  )

  const classes = ["ImageComponent"];
  if (className) classes.push(className);

  const img = <img {...props} className={classes.join(' ')}/>;

  if (!lazy) return img;

  return (
    <Lazy {...lazyProps}>{img}</Lazy>
  );
}

export default Image;

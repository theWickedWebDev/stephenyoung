// @flow

/** List of all Flow types used in this package */
export type ListType = {
  items: ?string[],
  renderer: any => any,
  inline?: boolean,
  className?: string,
  itemClassName?: string,
};

export type TagType = {
  children: any,
  icon?: string,
  small?: boolean,
  className?: string,
  style?: {[string]: string},
};

export type ArticleType = {
  title?: string,
  className?: string,
  children?: any,
};

export type MetaType = {
  title?: string,
  description?: string,
  domain?: string,
  canonical?: string,
};

export type PageType = {
  meta: MetaType,
  location: Location,
  className?: string,
  robots?: string,
  keywords?: string,
  children?: any,
};

export type ImageType = {
  src: string,
  srcSet?: string,
  alt?: string,
  title?: string,
  className?: string,
  lazy?: boolean,
};

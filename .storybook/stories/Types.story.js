// dependencies
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Flow',
  decorators: [
    withA11y,
  ],
};

export const types = () => null;

types.story = {
  parameters: {
    layout: {
      description: `Here are a few of the Flow Types that are used. This
      Story will most likely not be updated regularly. I will eventually
      generate this automatically`,
      renderTitle: 'Types',
      forceTitle: 'Flow Types',
      code: `
  // @flow
  import * as React from 'react';

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

  export type SectionType = {
    title?: string,
    className?: string,
    children?: any,
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
    robots?: string,
    keywords?: string,
    siteName?: string,
    image?: string,
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
    height?: string,
    width?: string,
    sizes?: string,
    alt?: string,
    title?: string,
    className?: string,
    lazy?: boolean,
    lazyProps?: {
      offset?: number,
      skeleton?: React.Element<*>,
    },
  };

  export type SkeletonType = {
    height?: string,
    width?: string,
    size?: string,
  }

  export type WindowScrollType = {
    onChange: () => void,
  };

  export type LazyType = {
    offset?: number,
    skeleton?: React.Element<*>,
    children?: any,
  };
`
    },
  },
};

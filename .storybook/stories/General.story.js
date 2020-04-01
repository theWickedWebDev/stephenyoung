import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import {
  Image as ImageComponent,
  Lazy as LazyComponent,
  List as ListComponent,
  Tag as TagComponent,
  Skeleton as SkeletonComponent,
  Avatar as AvatarComponent,
  Post as PostComponent,
} from '@thewickedwebdev/components';

export default {
  title: 'General',
  decorators: [ withA11y ],
};

export const Image = () => (
  <div>
    <ImageComponent
      src="https://cdn.thewickedweb.dev/images/logo/logo.jpg"
      className="navbar__component-logo"
      alt="Logo for TheWickedWebDev"
      title="Logo for TheWickedWebDev"
      srcSet={`
        https://cdn.thewickedweb.dev/images/logo/logo@2x.jpg 2x,
        https://cdn.thewickedweb.dev/images/logo/logo@3x.jpg 3x
      `}
    />
    <h4>Simulating Lazy loading on a slower connection</h4>
    <div className="transition-children" style={{height: '176px', width: '600px'}}>
      <ImageComponent
        width="600px"
        height="176px"
        src="https://cdn.thewickedweb.dev/images/storybook/lazy-image-example-4.jpg"
        lazy={false}
      />
      <br/>
      <ImageComponent
        width="600px"
        height="176px"
        src="https://cdn.thewickedweb.dev/images/storybook/lazy-image-example-4-rendered.jpg"
        lazy={false}
      />
    </div>
  </div>
);

Image.story = {
  title: 'Image',
  parameters: {
    layout: {
      html: `
  <img
    src="https://cdn.thewickedweb.dev/images/logo/logo.jpg"
    class="navbar__component-logo"
    alt="Logo for TheWickedWebDev"
    title="Logo for TheWickedWebDev"
    srcset="
      https://cdn.thewickedweb.dev/images/logo/logo@2x.jpg 2x,
      https://cdn.thewickedweb.dev/images/logo/logo@3x.jpg 3x
    "
  />
      `,
      source: `
  import React from 'react';
  import { Image } from '@thewickedwebdev/components';

  const Example = () => {

    return (
      <Image
        src="https://cdn.thewickedweb.dev/images/logo/logo.jpg"
        className="navbar__component-logo"
        alt="Logo for TheWickedWebDev"
        title="Logo for TheWickedWebDev"
        srcSet={\`
          https://cdn.thewickedweb.dev/images/logo/logo@2x.jpg 2x,
          https://cdn.thewickedweb.dev/images/logo/logo@3x.jpg 3x
        \`}
      />
    );
  }
      `
    }
  }
}

export const Lazy = () => (
  <div>
    <a href="/?path=/story/general--image">
      See {`<Image/>`}
    </a>
  </div>
);

Lazy.story = {
  title: 'Lazy',
  parameters: {
    layout: {
      source: `
  import React from 'react';
  import { Lazy, Skeleton } from '@thewickedwebdev/components';

  const Example = () => {
    const skel = <Skeleton.Square size={50}/>;

    return (
      <Lazy offset={50} skeleton={skel}>
        <p>This will not be rendered until visible</p>
        <p>It will also never be server-side rendered</p>
      </Lazy>
    );
  }
      `
    }
  }
}

export const List = () => (
  <ListComponent
    items={['Item 1', 'Item 2', 'Item 3']}
    renderer={item => (<p>{item}</p>)}
  />
);

List.story = {
  title: 'List',
  parameters: {
    layout: {
      html: `
  <ul class="ListComponent">
    <li class="ListComponent__item">
      <p>Item 1</p>
    </li>
    <li class="ListComponent__item">
      <p>Item 1</p>
    </li>
    <li class="ListComponent__item">
      <p>Item 1</p>
    </li>
  </ul>
      `,
      source: `
  import React from 'react';
  import { List } from '@thewickedwebdev/components';

  const Example = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const renderer = item => (<p>{item}</p>);

    return (
      <List
        items={items}
        renderer={renderer}
      />
    );
  }
      `,
    }
  },
}

export const Tag = () => (
  <TagComponent icon="book">Game of Thrones</TagComponent>
);

Tag.story = {
  title: 'Tag',
  parameters: {
    layout: {
      html: `
  <span class="Tag">Hello</span>

  <span class="Tag">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="heart"
      class="svg-inline--fa fa-heart fa-w-16 Tag__Icon"
      ...truncated...
    >
      <path>...truncated...</path>
    </svg>
    Hello
  </span>
      `,
      source: `
  import React from 'react';
  import { Tag } from '@thewickedwebdev/components';

  const Example = () => {
    return (
      <Tag>👽</Tag>
    );
  }
      `
    }
  },
}

export const Skeleton = () => (
  <div>
    <SkeletonComponent.Square size="100px"/>
    <br/>
    <SkeletonComponent.Rect height="100px" width="200px"/>
  </div>
)

Skeleton.story = {
  title: 'Skeleton',
  parameters: {
    layout: {
      html: `
      //
      `,
      source: `
      //
      `
    }
  },
};

export const Avatar = () => (
  <div>
    <p>Default</p>
    <AvatarComponent>SY</AvatarComponent>
    <br/><br/>
    <p>Square</p>
    <AvatarComponent shape="square" icon="star">SY</AvatarComponent>
    <br/><br/>
    <p>Primary</p>
    <AvatarComponent type="primary">S</AvatarComponent>
    <br/><br/>
    <p>Secondary</p>
    <AvatarComponent type="secondary">:)</AvatarComponent>
    <br/><br/>
    <p>Sized</p>
    <AvatarComponent type="primary" size={20}>:)</AvatarComponent>
    <br/><br/>
    <p>Styled</p>
    <AvatarComponent color="#5d5d5d" bgColor="#f4f4f4">SY</AvatarComponent>
    <br/><br/>
    <p>Image</p>
    <AvatarComponent
      type="primary"
      size={50}
      image="https://cdn.thewickedweb.dev/images/avatar/avatar-square-blue.jpg"
    />
  </div>
);

Avatar.story = {
  title: 'Avatar',
  parameters: {
    layout: {
      html: `
  <span
    class="Avatar secondary circle"
    style="height: 50px; width: 50px;"
  >
    <span
      class="Avatar_child"
      style="line-height: 50px; font-size: 22px;"
    >
      SY
    </span>
  </span>
      `,
      source: `
  import React from 'react';
  import { Avatar, Article } from '@thewickedwebdev/components';

  const Example = () => {

    return (
      <Article>
        <p>Default</p>
        <AvatarComponent>SY</AvatarComponent>

        <p>Square</p>
        <AvatarComponent shape="square" icon="star">SY</AvatarComponent>

        <p>Primary</p>
        <AvatarComponent type="primary">S</AvatarComponent>

        <p>Secondary</p>
        <AvatarComponent type="secondary">:)</AvatarComponent>

        <p>Sized</p>
        <AvatarComponent type="primary" size={20}>:)</AvatarComponent>

        <p>Styled</p>
        <AvatarComponent color="#5d5d5d" bgColor="#f4f4f4">SY</AvatarComponent>

        <p>Image</p>
        <AvatarComponent
          type="primary"
          size={50}
          image="https://cdn.thewickedweb.dev/images/avatar/avatar-square-blue.jpg"
        />
      <Article>
    );
  }
`
    }
  },
};

export const Post = () => (
  <PostComponent
    author="Stephen Young"
    avatar={
      <AvatarComponent
        type="primary"
        size={70}
        image="https://cdn.thewickedweb.dev/images/avatar/avatar-square-blue.jpg"
      />
    }
    link="https://www.thewickedweb.dev/"
    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  />
);

Post.story = {
  title: 'Post',
  parameters: {
    layout: {
      html: `
  <span
    class="Avatar secondary circle"
    style="height: 50px; width: 50px;"
  >
    <span
      class="Avatar_child"
      style="line-height: 50px; font-size: 22px;"
    >
      SY
    </span>
  </span>
      `,
      source: `
  import React from 'react';
  import { Post } from '@thewickedwebdev/components';

  const Example = () => {

    return (
      <Article>
        <PostComponent
          author="Stephen Young"
          avatar={
            <AvatarComponent
              type="primary"
              size={70}
              image="https://cdn.thewickedweb.dev/images/avatar/avatar-square-blue.jpg"
            />
          }
          link="https://www.thewickedweb.dev/"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
          content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      <Article>
    );
  }
        `
    }
  },
};

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import {
  Page as PageComponent,
  Section as SectionComponent,
  Article as ArticleComponent,
 } from '@thewickedwebdev/components';

export default {
  title: 'Layout',
  decorators: [ withA11y ],
};

export const Page = () => (
  <PageComponent
    meta={{
      title: 'Storybook Page Title!',
      description: "This is the Story for my Page component",
      domain: 'https://www.thewickedweb.dev/',
    }}
  >
    <p>Some cool content here</p>
  </PageComponent>
);

Page.story = {
  title: 'Page',
  parameters: {
    layout: {
      html: `
      <div/>
      `,
      source: `
      import React from 'react';
      import { Page } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Page
            meta={{
              title: 'Storybook Page Title!',
              description: "This is the Story for my Page component",
              domain: 'https://www.thewickedweb.dev/',
            }}
          >
            <p>Some cool content here</p>
          </Page>
        );
      }
      `
    }
  }
}

export const Section = () => (
  <SectionComponent title="This is a section title">
    <p>Some cool content here</p>
  </SectionComponent>
);

Section.story = {
  parameters: {
    layout: {
      html: `
      <section class="SectionComponent">
        <h1 class="SectionComponent__h1">
          This is a section title
        </h1>
        <p>Some cool content here</p>
      </section>
      `,
      source: `
      import React from 'react';
      import { Section } from '@thewickedwebdev/components';

      const Example = () => {
        return (
          <Section title="This is a section title">
            <p>Some cool content here</p>
          </Article>
        );
      }
      `
    }
  }
}

export const Article = () => (
  <ArticleComponent title="Do or do not. There is no try.">
    <p>Some cool content here</p>
  </ArticleComponent>
);

Article.story = {
  title: 'Article',
  parameters: {
    layout: {
      html: `
  <article class="ArticleComponent">
    <div class="ArticleComponent__content">
      <h2 class="ArticleComponent__h2">
        Do or do not. There is no try.
      </h2>
      <p>Some cool content here</p>
    </div>
  </article>
      `,
      source: `
  import React from 'react';
  import { Article } from '@thewickedwebdev/components';

  const Example = () => {
    return (
      <Article title="Do or do not. There is no try.">
        <p>Some cool content here</p>
      </Article>
    );
  }
      `
    }
  },
}

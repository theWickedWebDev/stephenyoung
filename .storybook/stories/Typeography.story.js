// dependencies
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Section, Article } from '@thewickedwebdev/components';
import '@thewickedwebdev/components/dist/bundle.css';

export default {
  title: 'Typeography',
  decorators: [
    withA11y,
  ],
};

export const Typeography = () => (
  <Section>
    <Article>
      <h1>This is an example of an H1</h1>
      <p className="align-justify">
        <span className="dropcap">L</span>orem Ipsum is simply dummy text
        of the printing and typesetting
        industry. <em>Lorem Ipsum</em> has been the industry's standard
        dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only <em className="alt">five centuries</em>, but
        also the leap into
        electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the <strong>release of
        Letraset</strong>
        sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <h2>H2's aren't the only things that are cool</h2>
      <h3>Halo 3 (H3) is also cool'</h3>
      <p className="align-justify">
        Come on! Look at me! No plan, no back-up, no weapons worth
        a damn, oh, and something else. I don't have anything to lose.
        So if you're sitting up there in your silly little spaceship with
        all your silly little guns and you've got any plans on taking
        the Pandorica tonight, just remember who's standing in your way!
        Remember! Every black day I ever stopped you! And then!
        And then! Do the smart thing! Let somebody else try first.
      </p>
      <div className="btn-container align-center">
        <button>Dont Click this one</button>
      </div>
      <h3>Kale Chips</h3>
      <p className="align-justify">
        The 21st century hipster is a subculture that emphasizes style,
        authenticity and uniqueness. Members of the subculture
        typically do not self-identify as hipsters, and the word
        hipster is often used as a pejorative for someone who is
        pretentious or overly trendy. Stereotypical elements
        include vintage clothes and other non-mainstream fashion,
        skinny jeans, checked shirts, an ironic moustache or full
        beard, and big glasses.
        <a
          href="https://en.wikipedia.org/wiki/Hipster_(contemporary_subculture)"
          title="Wikipedia Reference">
          [source]
        </a>
        <div className="btn-container align-left">
          <button className="btn-primary">Click this one</button>
        </div>
      </p>
      <h3>QBasic</h3>
      <div className="btn-container align-right">
        <p className="align-justify">
          QBasic, a short form of Quick Beginners All purpose Symbolic
          Instruction Code, is an integrated development environment (IDE)
          and interpreter for a variety of BASIC programming languages which
          are based on QuickBASIC. Code entered into the IDE is compiled to
          an intermediate representation (IR), and this IR is immediately
          interpreted on demand within the IDE. It can run
          under nearly all versions of DOS and 32-bit versions of Windows,
          or through emulation via DOSBox/DOSEMU on Linux, FreeBSD,
          and 64-bit versions of Windows. (QBasic is a DOS program
          and requires DOS or a DOS emulator.
          <a
            href="https://en.wikipedia.org/wiki/QBasic"
            title="Wikipedia Reference">
            [source]
          </a>
        </p>
        <button className="btn-secondary">This one's fine</button>
      </div>
    </Article>
  </Section>
);

Typeography.story = {
  parameters: {
    layout: {
      description: `lorem ipsum`,
      forceTitle: 'Typeography',
      code: `
        //
      `
    },
  },
};

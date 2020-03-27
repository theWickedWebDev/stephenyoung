import React from 'react';
import showdown from 'showdown';
import { makeDecorator } from '@storybook/addons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierEstuaryLight as highlightStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

require('./styles.scss');

export default makeDecorator({
  name: 'withLayout',
  parameterName: 'layout',
  wrapper: (storyFn, context, story) => {
    const {
      name, html, description, source, codeDescription
    } = story.parameters;

    const DEFAULT_CODE_DESCRIPTION = 'Demonstrates simple usage';

    return (
      <div className="LayoutDecorator">
        { description &&
          <div
            className="LayoutDecorator__description"
            dangerouslySetInnerHTML={{
              __html: new showdown.Converter().makeHtml(description),
            }}
          />
        }
        <h3>Demo</h3>
        <div className="LayoutDecorator__content">
          {storyFn()}
        </div>
        { source &&
          <div className="LayoutDecorator__sourceExample">
            <h3>Source Example</h3>
            <p
              className="LayoutDecorator__sourceDescription"
              dangerouslySetInnerHTML={{
                __html: codeDescription || DEFAULT_CODE_DESCRIPTION,
            }}/>
            <div className="LayoutDecorator__source">
              <SyntaxHighlighter language="javascript" style={highlightStyle}>
                {source}
              </SyntaxHighlighter>
            </div>
          </div>
        }
        { source &&
          <div className="LayoutDecorator__sourceExample">
            <h3>HTML Output Example</h3>
            <p className="LayoutDecorator__sourceDescription">
              This is an example of what is rendered to the DOM
            </p>
            <div className="LayoutDecorator__source">
              <SyntaxHighlighter language="html" style={highlightStyle}>
                {html}
              </SyntaxHighlighter>
            </div>
          </div>
        }
      </div>
    )
  }
})

import React from 'react';
import showdown from 'showdown';
import { makeDecorator } from '@storybook/addons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierEstuaryLight as highlightStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

require('@thewickedwebdev/components/dist/bundle.css');
require('./styles.scss');

export default makeDecorator({
  name: 'withLayout',
  parameterName: 'layout',
  wrapper: (storyFn, context, story) => {
    const {
      name, html, description, code,
      source, codeDescription, renderTitle, forceTitle,
    } = story.parameters;

    const DEFAULT_CODE_DESCRIPTION = 'Demonstrates simple usage';

    return (
      <div className="LayoutDecorator">
        { forceTitle ? <h1>{forceTitle}</h1> : ''}
        { description &&
          <div
            className="LayoutDecorator__description"
            dangerouslySetInnerHTML={{
              __html: new showdown.Converter().makeHtml(description),
            }}
          />
        }
        <h3>{ renderTitle || 'Demo' }</h3>
        <div className="LayoutDecorator__content">
          {storyFn()}
        </div>

        { code &&
          <div className="LayoutDecorator__sourceExample">
            <div className="LayoutDecorator__source">
              <SyntaxHighlighter language="javascript" style={highlightStyle}>
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        }

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
        { html &&
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

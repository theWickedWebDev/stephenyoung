import React from 'react';
import html from './html.js';

describe('HTML', () => {
  it('should return html string to server', () => {
    const mockHelmet = {
      htmlAttributes: '',
      bodyAttributes: '',
      title: '',
      meta: '',
      link: '',
    };

    expect(html({ helmet: mockHelmet, component: () => (<h1>hello</h1>), req: {} }))
      .toContain('<!DOCTYPE html>');
  })

  it('should return html string to server with structured data', () => {
    const mockHelmet = {
      htmlAttributes: '',
      bodyAttributes: '',
      title: '',
      meta: '',
      link: '',
    };

    const mockReq = {
      url: '/',
    };

    expect(html({ helmet: mockHelmet, component: () => (<h1>hello</h1>), req: mockReq }))
      .toContain('@context');
  })
})

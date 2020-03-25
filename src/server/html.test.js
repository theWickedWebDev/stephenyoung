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

        expect(html({ helmet: mockHelmet, component: () => {
            return <h1>hello</h1>;
        }, url: '/' }))
            .toContain('<!DOCTYPE html>');
    });

    it('should return html string to server with structured data', () => {
        const mockHelmet = {
            htmlAttributes: '',
            bodyAttributes: '',
            title: '',
            meta: '',
            link: '',
        };

        expect(html({ helmet: mockHelmet, component: () => {
            return <h1>hello</h1>;
        }, url: '/' }))
            .toContain('@context');
    });
});

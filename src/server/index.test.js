import request from 'supertest';
import express from 'express';
import { app } from './index.js';

const NOT_FOUND = 404;

// TODO:  Figure out how to test res.sendFile();
describe('Robots', () => {
    it('returns', async(done) => {
        const response = await request(app).get('/robots.txt');
        expect(response.status).toBe(NOT_FOUND);
        expect(response.headers['content-type'])
            .toBe('text/html; charset=utf-8');
        done();
    });
});

// TODO:  Figure out how to test res.sendFile();
describe('Sitemap', () => {
    it('returns', async(done) => {
        const response = await request(app).get('/sitemap.xml');
        expect(response.status).toBe(NOT_FOUND);
        expect(response.headers['content-type'])
            .toBe('text/html; charset=utf-8');
        done();
    });
});

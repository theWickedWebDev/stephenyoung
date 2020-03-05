import request from 'supertest';
import express from 'express';
import { getTranslations, app } from './index.js';

describe('Translations', () => {
  it('should return english translations', () => {
    expect(getTranslations('1234').lang).toEqual('en');
  })
  it('should return english translations', () => {
    expect(getTranslations('en_en').lang).toEqual('en');
  })
  it('should return spanish translations', () => {
    expect(getTranslations('es_es').lang).toEqual('es');
  })
  it('should return french translations', () => {
    expect(getTranslations('fr_fr').lang).toEqual('fr');
  })
})

// TODO:  Figure out how to test res.sendFile();
describe('Robots', () => {
  it('returns', async done => {
    const response = await request(app).get('/robots.txt');
    expect(response.status).toBe(404);
    expect(response.headers['content-type'])
      .toBe('text/html; charset=utf-8');
    done()
  });
});

// TODO:  Figure out how to test res.sendFile();
describe('Sitemap', () => {
  it('returns', async done => {
    const response = await request(app).get('/sitemap.xml');
    expect(response.status).toBe(404);
    expect(response.headers['content-type'])
      .toBe('text/html; charset=utf-8');
    done()
  });
});

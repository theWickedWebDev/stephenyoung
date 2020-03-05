const request = require('supertest');
const express = require('express');

const { app } = require('./index');

describe('Resume Generator', () => {
  it('Generates an English Resume', async done => {
    const response = await request(app)
      .get('/resume.pdf');
    expect(response.status).toBe(200);
    expect(response.headers['content-type'])
      .toBe('application/pdf');
    expect(response.headers['content-disposition'])
      .toBe('inline; filename="resume.pdf"');
    done()
  });

  it('Generates a French Resume', async done => {
    const response = await request(app)
      .get('/resume.pdf?locale=fr_fr');
    expect(response.status).toBe(200);
    expect(response.headers['content-type'])
      .toBe('application/pdf');
    expect(response.headers['content-disposition'])
      .toBe('inline; filename="resume.pdf"');
    done()
  });

  it('Generates an Spanish Resume', async done => {
    const response = await request(app).get('/resume.pdf?locale=fr_fr');
    expect(response.status).toBe(200);
    expect(response.headers['content-type'])
      .toBe('application/pdf');
    expect(response.headers['content-disposition'])
      .toBe('inline; filename="resume.pdf"');
    done()
  });
});

afterAll(done => done());

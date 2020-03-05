import React from 'react';
import { mount, shallow } from 'enzyme';
import i18n from './translations.js';

describe('i18n translations', () => {
  it('should return i18n', () => {
    expect(i18n).toBeTruthy();
  });

  it('should scroll to top of page when language changes', () => {
    i18n.changeLanguage('fr');
    expect(window.scrollTo).toHaveBeenCalledWith(0,0);
  })
})

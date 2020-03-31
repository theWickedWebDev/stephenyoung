import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './App.js';
import { MemoryRouter } from 'react-router-dom';

describe('<App/>', () => {
  const APP_COUNT = 1;
  it('should render', () => {
    window.innerWidth = 300;
    const wrapper = shallow(
      <MemoryRouter><Component/></MemoryRouter>
    );
    expect(wrapper.length).toEqual(APP_COUNT);
    expect(wrapper.find('div')).toExist();
  });
});

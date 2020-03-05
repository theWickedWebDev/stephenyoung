import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './App.js';
import { MemoryRouter } from 'react-router-dom';

describe('<App/>', () => {
  it('should render', () => {
    window.innerWidth = 300;
    const wrapper = mount(
      <MemoryRouter><Component/></MemoryRouter>
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div')).toExist();
  });
})

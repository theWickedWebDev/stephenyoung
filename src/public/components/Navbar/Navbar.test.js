import React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import { MemoryRouter } from 'react-router-dom';

describe('<Navbar/> component', () => {
  const wrapper = mount(
    <MemoryRouter><Component/></MemoryRouter>
  );

  it('should render basic component', () => {
    expect(wrapper.find('nav')).toExist();
  });

  it('should render a logo with proper attributes', () => {
    expect(wrapper.find('img').props().alt).toEqual('Logo for TheWickedWebDev');
    expect(wrapper.find('img').props().title).toEqual('Logo for TheWickedWebDev');
  });

  it('should display Download My Résumé link', () => {
    expect(wrapper.find('.navbar__link').at(0).props().title)
      .toEqual('Download Résumé');
  });

  it('should display social icons', () => {
    expect(wrapper.find('.navbar_right').find('a').length).toEqual(2);
    expect(wrapper.find('.navbar_right').find('a').at(0).props().href)
      .toEqual('https://www.linkedin.com/in/thewickedwebdev/');
    expect(wrapper.find('.navbar_right').find('a').at(1).props().href)
      .toEqual('https://github.com/theWickedWebDev/stephenyoung');
  });
})

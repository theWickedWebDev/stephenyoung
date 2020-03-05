import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './index';
import { i18n } from '../../../../test/testSetupFile.js';

describe('<Footer/> component', () => {
  it('should render basic component', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.find('footer')).toExist();
    expect(wrapper.find('ul')).toExist();
    expect(wrapper.find('li')).toExist();
  });

  it('should render 3 flag images', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.find('img')).toExist();
    expect(wrapper.find('img').length).toEqual(3);
    expect(wrapper.find('img').first().props().src)
      .toEqual("https://cdn.thewickedweb.dev/images/flags/flag_en.svg");
    expect(wrapper.find('img').at(1).props().src)
      .toEqual("https://cdn.thewickedweb.dev/images/flags/flag_es.svg");
    expect(wrapper.find('img').at(2).props().src)
      .toEqual("https://cdn.thewickedweb.dev/images/flags/flag_fr.svg");

  });

  it('should render URL', () => {
    const comp = shallow(<Component />);
    expect(comp.first().text()).toContain('https://www.thewickedweb.dev');
  });

  it('should change languages', () => {
    const comp = mount(<Component />);
    
    expect(i18n.language).toEqual('en');
    comp.find('img').at(1).simulate('click');
    expect(i18n.language).toEqual('es');
    comp.find('img').at(2).simulate('click');
    expect(i18n.language).toEqual('fr');
    comp.find('img').at(0).simulate('click');
    expect(i18n.language).toEqual('en');
  });

})

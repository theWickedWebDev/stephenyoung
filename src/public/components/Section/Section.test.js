import React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('<Section/> component', () => {
  const sharedProps = {
    title: "Test Title"
  }

  it('should render basic component', () => {
    const wrapper = mount(<Component {...sharedProps}/>);
    expect(wrapper.find('section')).toExist();
    expect(wrapper.find('h1')).toExist();
    expect(wrapper.find('h1').text()).toEqual('Test Title');
  })

  it('should render without title', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.find('section')).toExist();
    expect(wrapper.find('h1')).not.toExist();
  })
})

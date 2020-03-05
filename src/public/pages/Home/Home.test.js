import React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('<Home/> Page', () => {
  it('should render basic page', () => {
    const wrapper = mount(<Component/>);

    expect(wrapper.find('.homepage__page')).toExist();
  });

  describe('Viewports', () => {
    it('should render mobile page', () => {
      window.innerWidth = 300;
      const wrapper = mount(<Component/>);
      expect(wrapper.find('.homepage__page')).toExist();
    });

    it('should render tablet page', () => {
      window.innerWidth = 700;
      const wrapper = mount(<Component/>);
      expect(wrapper.find('.homepage__page')).toExist();
    });

    it('should render desktop page', () => {
      window.innerWidth = 1200;
      const wrapper = mount(<Component/>);
      expect(wrapper.find('.homepage__page')).toExist();
    });

    it('Unmounting should remove viewport event listener', () => {
      window.innerWidth = 1200;
      const wrapper = shallow(<Component/>);
      expect(wrapper.find('.homepage__page')).toExist();
      wrapper.unmount();
      expect(window.removeEventListener).toHaveBeenCalled();
    });
  })
})

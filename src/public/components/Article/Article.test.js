import React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('<Article/> component', () => {
    it('should render basic component', () => {
        const wrapper = mount(<Component />);
        expect(wrapper.find('article')).toExist();
        expect(wrapper.find('h2')).not.toExist();
    });
    it('should render with title', () => {
        const wrapper = mount(<Component title="Test"/>);
        expect(wrapper.find('article')).toExist();
        expect(wrapper.find('h2')).toExist();
        expect(wrapper.find('em')).not.toExist();
    });
    it('should render with children', () => {
        const wrapper = mount(<Component title="Test"><em>Test</em></Component>);
        expect(wrapper.find('article')).toExist();
        expect(wrapper.find('h2')).toExist();
        expect(wrapper.find('em')).toExist();
    });
});

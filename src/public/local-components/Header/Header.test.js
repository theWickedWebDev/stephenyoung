import React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('<Header/> component', () => {
    const sharedProps = {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        intro: 'Test Intro',
        avatar: false,
    };

    it('should render basic component', () => {
        const wrapper = mount(<Component {...sharedProps}/>);
        expect(wrapper.find('header')).toExist();
        expect(wrapper.text()).toContain('Test Title');
        expect(wrapper.text()).toContain('Test Subtitle');
        expect(wrapper.text()).toContain('Test Intro');
    });

    it('should render component with avatar', () => {
        const wrapper = mount(<Component {...sharedProps} avatar="test.jpg"/>);
        expect(wrapper.find('header')).toExist();
        expect(wrapper.find('.header__body').props().style.backgroundImage)
            .toContain('test.jpg');
    });
});

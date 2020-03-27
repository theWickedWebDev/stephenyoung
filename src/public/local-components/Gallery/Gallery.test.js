import React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import { Skeleton } from './index';

describe('<Gallery/> component', () => {
    const IMAGE_COUNT = 13;
    const SKELETON_COUNT = 1;

    it('should render basic component', () => {
        const wrapper = mount(<Component />);
        expect(wrapper.find('ul')).toExist();
    });

    it('should render the correct images', () => {
        const wrapper = mount(<Component title="Test"/>);

        expect(wrapper.find('img').length).toEqual(IMAGE_COUNT);
        expect(wrapper.find('img').first().props().src)
            .toContain('https://cdn.thewickedweb.dev/images/gallery/');
    });

    it('should render the skeleton', () => {
        const skel = mount(<Skeleton/>);

        expect(skel.find('.skeleton').length).toEqual(SKELETON_COUNT);
    });
});

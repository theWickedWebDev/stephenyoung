import React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('<TagList/> component', () => {
    const ALL_TAGS_COUNT = 4;
    const FAVORITES_COUNT = 1;

    const sharedProps = {
        list: [
            { name: 'holy', favorite: false },
            { name: 'guac', favorite: true },
            { name: 'a', favorite: false },
            { name: 'mole', favorite: false },
        ],
    };

    it('should render basic component', () => {
        const wrapper = mount(<Component {...sharedProps}/>);
        expect(wrapper.find('ul')).toExist();
    });

    it('should render all tags', () => {
        const wrapper = mount(<Component {...sharedProps}/>);
        expect(wrapper.find('span').length).toEqual(ALL_TAGS_COUNT);
    });

    it('should render with favorite tags', () => {
        const wrapper = mount(<Component {...sharedProps}/>);
        expect(wrapper.find('i').length).toEqual(FAVORITES_COUNT);
    });
});

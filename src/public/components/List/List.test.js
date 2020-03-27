import React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('<List/> component', () => {
    const sharedProps = {
        items: ['1', '2', '3'],
        renderer: i => <span>{i}</span>,
    };

    it('should render basic component', () => {
        const wrapper = mount(<Component {...sharedProps}/>);
        expect(wrapper.find('ul')).toExist();
        expect(wrapper.text()).toContain('1');
        expect(wrapper.text()).toContain('2');
        expect(wrapper.text()).toContain('3');
    });
});

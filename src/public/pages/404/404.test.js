import React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('<404/> Page', () => {
    it('should render basic 404 page', () => {
        const wrapper = mount(
            <Component location={{ pathname: '/asdf' }}/>
        );
        expect(wrapper.find('div')).toExist();
        expect(wrapper.find('h3')).toExist();
        expect(wrapper.text()).toEqual('404 - Sorry! We couldn\'t find /asdf page');
    });
});

import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './index';
import { MemoryRouter } from 'react-router-dom';

describe('<Default/> Layout', () => {
    it('should render Mobile Layout', () => {
        window.innerWidth = 300;
        const wrapper = mount(
            <MemoryRouter><Component/></MemoryRouter>
        );
        expect(wrapper.find('.mobile')).toExist();
    });

    it('should render Tablet Layout', () => {
        window.innerWidth = 700;
        const wrapper = mount(
            <MemoryRouter><Component/></MemoryRouter>
        );
        expect(wrapper.find('.tablet')).toExist();
    });

    it('should render Desktop Layout', () => {
        window.innerWidth = 1200;
        const wrapper = mount(
            <MemoryRouter><Component/></MemoryRouter>
        );
        expect(wrapper.find('.desktop')).toExist();
    });

    it('Unmounting should remove viewport event listener', () => {
        window.innerWidth = 1200;
        const wrapper = mount(
            <MemoryRouter><Component/></MemoryRouter>
        );
        expect(wrapper.find('.desktop')).toExist();
        wrapper.unmount();
        expect(window.removeEventListener).toHaveBeenCalled();
    });
});

import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './index';

describe('<Footer/> component', () => {
    it('should render basic component', () => {
        const wrapper = mount(<Component />);
        expect(wrapper.find('footer')).toExist();
    });

    it('should render URL', () => {
        const comp = shallow(<Component />);
        expect(comp.first().text()).toContain('https://www.thewickedweb.dev');
    });
});

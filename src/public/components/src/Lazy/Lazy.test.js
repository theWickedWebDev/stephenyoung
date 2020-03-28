/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { WindowScroll, LazyLoad } from './index';

describe('<WindowScroll/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should add event handlers on mount', () => {
    const onChange = jest.fn();
    const component1 = shallow(<WindowScroll onChange={onChange} />);
    const spy = jest.spyOn(component1.instance(), 'onWindowChange');
    expect(window.removeEventListener).toHaveBeenCalledTimes(0);
    expect(window.addEventListener).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Should remove event handlers on mount', () => {
    const onChange = jest.fn();
    const component2 = shallow(<WindowScroll onChange={onChange} />);
    component2.instance().componentWillUnmount();
    const spy = jest.spyOn(component2.instance(), 'onWindowChange');
    expect(window.removeEventListener).toHaveBeenCalledTimes(2);
    expect(window.addEventListener).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('<LazyLoad/>', () => {
  it('Should render component without calling handlers', () => {
    const component3 = shallow(<LazyLoad/>);

    const isScrolledIntoViewSpy = jest.spyOn(
      component3.instance(), 'isScrolledIntoView'
    );

    const onScrollSpy = jest.spyOn(
      component3.instance(), 'onScroll'
    );

    expect(isScrolledIntoViewSpy).toHaveBeenCalledTimes(0);
    expect(onScrollSpy).toHaveBeenCalledTimes(0);

  });

  it('Should display lazy loaded children (programatically)', () => {
    const component4 = shallow(
      <LazyLoad offset={0}><img src="test.jpg"/></LazyLoad>
    );
    const mockIsScrolledIntoView = () => true;
    expect(component4.find('img').length).toEqual(0);
    window.innerHeight = 1000;

    component4.instance().componentRef = {
      getBoundingClientRect: () => {
        return { top: 600, bottom: 1000 };
      },
    };
    component4.instance().onScroll();
    expect(component4.state().visible).toEqual(true);
    expect(component4.find('img').length).toEqual(1);
  });

  it('Should NOT display lazy loaded children (programatically)', () => {
    const component4 = shallow(
      <LazyLoad offset={0}><img src="test.jpg"/></LazyLoad>
    );
    const mockIsScrolledIntoView = () => true;
    expect(component4.find('img').length).toEqual(0);
    window.innerHeight = 600;

    component4.instance().componentRef = {
      getBoundingClientRect: () => {
        return { top: 1000, bottom: 1000 };
      },
    };
    component4.instance().onScroll();
    expect(component4.state().visible).toEqual(false);
    expect(component4.find('img').length).toEqual(0);
  });

  it('Should display lazy loaded children (manually)', () => {
    const component4 = shallow(<LazyLoad><img src="test.jpg"/></LazyLoad>);
    const mockIsScrolledIntoView = () => true;
    expect(component4.find('img').length).toEqual(0);
    component4.instance().isScrolledIntoView = mockIsScrolledIntoView;
    component4.instance().onScroll();
    expect(component4.state().visible).toEqual(true);
    expect(component4.find('img').length).toEqual(1);
  });
});

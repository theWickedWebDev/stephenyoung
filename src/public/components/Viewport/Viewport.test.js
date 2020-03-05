/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Viewport } from './index';

describe('<Viewport/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const children = jest.fn();

  it('Should check viewport on mount', () => {
    const checkViewport = jest.fn();
    const component = shallow(<Viewport children={children}/>);
    component.instance().checkViewport = checkViewport;
    jest.clearAllMocks();
    component.instance().componentDidMount();
    expect(checkViewport).toHaveBeenCalledTimes(1);
  });

  it('Should add event handlers on mount', () => {
    const component = shallow(<Viewport children={children}/>);
    jest.clearAllMocks();
    component.instance().componentDidMount();
    expect(window.removeEventListener).toHaveBeenCalledTimes(0);
    expect(window.addEventListener).toHaveBeenCalledTimes(2);
  });

  it('Should remove event handlers on unmount', () => {
    const component = shallow(<Viewport children={children}/>);
    jest.clearAllMocks();
    component.instance().componentWillUnmount();
    expect(window.removeEventListener).toHaveBeenCalledTimes(2);
    expect(window.addEventListener).toHaveBeenCalledTimes(0);
  });

  describe('Breakpoints', () => {
    it('Should accurately pick mobile', () => {
      const component = shallow(<Viewport children={children}/>);
      jest.clearAllMocks();
      window.innerWidth = 300;
      component.instance().componentDidMount();
      expect(component.instance().state.viewport).toEqual('mobile');
    });
    it('Should accurately pick tablet', () => {
      const component = shallow(<Viewport children={children}/>);
      jest.clearAllMocks();
      window.innerWidth = 700;
      component.instance().componentDidMount();
      expect(component.instance().state.viewport).toEqual('tablet');
    });
    it('Should accurately pick desktop', () => {
      const component = shallow(<Viewport children={children}/>);
      jest.clearAllMocks();
      window.innerWidth = 1200;
      component.instance().componentDidMount();
      expect(component.instance().state.viewport).toEqual('desktop');
    });
  })
});

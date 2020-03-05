import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('<Meta/> component', () => {
  it('should render component', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find('title')).toExist();
  });

  it('should render component with props and items', () => {
    const props = {
      robots: 'index',
      keywords: "jest",
      title: 'Test Title',
      description: 'Test Description',
      canonical: 'https://cdn.thewickedweb.dev/',
      siteName: 'Jest App',
      image: 'jest.jpg',
    }
    const wrapper = shallow(<Component {...props}/>);
    expect(wrapper.find('title')).toExist();
    expect(wrapper.find('title').text()).toEqual('Test Title');
    expect(wrapper.find('link').length).toEqual(15);

    const faviconExampleHref = wrapper.find('link[sizes="57x57"]').props().href;
    expect(faviconExampleHref).toEqual(
      'https://cdn.thewickedweb.dev/images/favicon/apple-icon-57x57.png'
    );

    const manifest = wrapper.find('link[rel="manifest"]').props().href;
    expect(manifest).toEqual(
      'https://cdn.thewickedweb.dev/images/favicon/manifest.json'
    );

    const iconExample = wrapper.find('link[rel="icon"][sizes="16x16"]').props().href;
    expect(iconExample).toEqual(
      'https://cdn.thewickedweb.dev/images/favicon/favicon-16x16.png'
    );

    const canonical = wrapper.find('link[rel="canonical"]').props().href;
    expect(canonical).toEqual('https://cdn.thewickedweb.dev/');

    const robots = wrapper.find('meta[name="robots"]').props().content;
    expect(robots).toEqual('index');

  });
})

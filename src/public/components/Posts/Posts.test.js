/* eslint-disable no-magic-numbers */
import React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import { MemoryRouter } from 'react-router-dom';

describe('<Posts/> component', () => {
    const props = {
      /* eslint-disable max-len */
      references: [
          {
            name: 'Konrad Zalewski',
            image: 'https://media-exp1.licdn.com/dms/image/C4D03AQFmHDIgBG7O_Q/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=og-ZuCN_nMbRmcjev_JN2jk8qTmqyXj_mgY3bDI6oIU',
            link: 'https://www.linkedin.com/in/konrad-zalewski-605b9112/',
            title: 'Impassioned front end technologist',
            content: 'Stephen is a great developer that excels in many qualities often overlooked in developers.He possesses an entrepreneurial spirit and "go get it" attitude that allows him to confront any challenge head on. He goes above and beyond to take initiative to research problems and solutions to not only his own projects and tasks but to problems in the business overall. Having worked remotely with Stephen I can attest that he is a great communicator. Remote teams present many challenges but Stephen has a knack for keeping communication lines open and keeping information flowing among the team. Maybe most importantly, Stephen is a great learner. He is both great at receiving criticism and giving back constructive criticism. He never takes things personally and instead sees things objectively as opportunities for personal growth or of doing what\'s best for the team as a whole.',
            relevant: true
          },
          {
            name: 'Chris Chambers',
            image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHGQ1z3cDsTdw/profile-displayphoto-shrink_800_800/0?e=1588809600&v=beta&t=7nknxuXRZ6g7gHsvu-PwZuMEyCH3Ql711hDxmy8PnGc',
            link: 'https://www.linkedin.com/in/chris-chambers-47a3a8147/',
            title: 'Looking for ways to change the world',
            content: 'Stephen has unstoppable energy and enthusiasm. He has a deep intuitive understanding of design and how it translates to the web, recognizing in seconds issues that might normally take several iterations to uncover. He\'s a highly collaborative team member with top-notch execution who constantly works to raise the quality around him. He\'s fast, efficient, and delivers immaculate results. And in all that, he\'s cheerful, fun, and a joy to work with. I can\'t recommend him highly enough.',
            relevant: true
          },
          {
            name: 'Chris Chambers',
            image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHGQ1z3cDsTdw/profile-displayphoto-shrink_800_800/0?e=1588809600&v=beta&t=7nknxuXRZ6g7gHsvu-PwZuMEyCH3Ql711hDxmy8PnGc',
            title: 'Looking for ways to change the world',
            content: 'Stephen has unstoppable energy and enthusiasm. He has a deep intuitive understanding of design and how it translates to the web, recognizing in seconds issues that might normally take several iterations to uncover. He\'s a highly collaborative team member with top-notch execution who constantly works to raise the quality around him. He\'s fast, efficient, and delivers immaculate results. And in all that, he\'s cheerful, fun, and a joy to work with. I can\'t recommend him highly enough.',
            relevant: false
          },
      ]
      /* eslint-enable max-len */
    };

    const wrapper = mount(
        <MemoryRouter><Component {...props}/></MemoryRouter>
    );

    it('should render basic component', () => {
        expect(wrapper.find('ul')).toExist();
    });

    it('should render 3 references', () => {
        expect(wrapper.find('li').length).toEqual(3);
    });

    it('should render relevant references differently', () => {
        expect(wrapper.find('li.strong').length).toEqual(2);
        expect(wrapper.find('li').length).toEqual(3);
    });

    it('should render links if present', () => {
        expect(wrapper.find('a').length).toEqual(2);
        expect(wrapper.find('a').at(0).props().title).toEqual('Impassioned front end technologist');
        expect(wrapper.find('a').at(1).props().title).toEqual('Looking for ways to change the world');
    });
});

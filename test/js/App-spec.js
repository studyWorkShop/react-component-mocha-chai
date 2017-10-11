import React from 'react';
import {render} from 'react-dom';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';

import App from '../../src/components/App';

describe('App component', () => {
  describe('App Link', () => {
    it('App Link children should be 2', () => {
      const wrapper = mount(<App/>);
      expect(wrapper.find('ul').children()).to.have.length(2);
    });

    it('App Link href', () => {
      const node = document.createElement('div');
      render((
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      ), node);

      const href = node.querySelector('a').getAttribute('href');
      expect(href).to.be.equal('/box-model');
    });

    it('App Link href by mount', () => {
      const wrapper = mount(<App/>);
      const href = wrapper.find('a').first();
      expect(href).to.have.attr('href','/box-model');
    });
  });
});

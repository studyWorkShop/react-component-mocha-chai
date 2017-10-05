import React from 'react';
import {expect} from 'chai';
import {MemoryRouter} from 'react-router';
import App from '../../src/components/App';
import {shallow} from 'enzyme';

describe('Router components', () => {

  it('should return correct url', () => {
    const AppComponent = shallow(<App/>);
    <MemoryRouter initialEntries={['box-model/basic']}>
      <AppComponent/>
    </MemoryRouter>
    const url = location.pathname;
    expect(url).to.equal('basic');
  });
});
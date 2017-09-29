import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import App from '../../src/components/App';

describe('Bar components', () => {

  it('nav children length should be 2', () => {
    const appComponent = shallow(<App/>);
    const children = appComponent.find('Link').children();
    expect(children).to.have.lengthOf(2);
  });

  it('nav onchange should invoke once', () => {
    let onChange = sinon.spy();
    const appComponent = shallow(<App onChange={onChange}/>);
    appComponent.find('.nav').simulate('click');
    expect(onChange.callCount).to.equal(1);
  });

  it('name should be right', () => {
    const appComponent = shallow(<App name="app"/>);
    expect(appComponent.state('name')).to.equal('app');
  });
});
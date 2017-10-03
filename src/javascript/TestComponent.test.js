import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
import TestComponent from './TestComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('<TestComponent/>', () => {
  const wrapper = shallow(
    <TestComponent/>
  );
  expect(wrapper.find('.box').text()).to.equals('Hello');
});

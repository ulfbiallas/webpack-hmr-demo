import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestComponent from './TestComponent';

Enzyme.configure({ adapter: new Adapter() });

test('<TestComponent/>', () => {
  const wrapper = shallow(
    <TestComponent/>
  );
  expect(wrapper.find('.box').text()).toBe('Hello');
});

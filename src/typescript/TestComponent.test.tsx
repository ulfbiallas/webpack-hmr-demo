import * as React from 'react';
import {shallow} from 'enzyme';
import {default as TestComponent} from './TestComponent';

test('<TestComponent/>', () => {
  const wrapper = shallow(
    <TestComponent/>
  );
  expect(wrapper.find('.box').text()).toBe('Hello');
});

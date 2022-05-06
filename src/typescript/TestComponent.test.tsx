import * as React from 'react';
import {render} from '@testing-library/react'
import {default as TestComponent} from './TestComponent';

test('<TestComponent/>', () => {
  const {container} = render(
    <TestComponent/>
  );

  const component = container.getElementsByClassName('box')[0] as HTMLDivElement
  expect(component.innerHTML).toBe('Hello');
});

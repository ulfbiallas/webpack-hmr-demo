import * as React from 'react';
import './TestComponent.less';

export default class TestComponent extends React.Component<{}, {}> {
  render() {
    return <div className="box">Hello</div>;
  }
}

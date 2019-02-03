import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter,  Route} from 'react-router-dom';
import {default as Menu} from './menu';
import {default as About} from './about';
import {default as TestComponent} from './TestComponent';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Menu/>
      <Route exact path="/" component={TestComponent}/>
      <Route path="/about" component={About}/>
      <Route path="/test" component={TestComponent}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))

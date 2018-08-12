import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import Menu from './menu';
import About from './about';
import TestComponent from './TestComponent';

ReactDOM.render((
  <Router>
     <div>
       <Menu/>
       <Route exact path="/" component={TestComponent}/>
       <Route path="/about" component={About}/>
       <Route path="/test" component={TestComponent}/>
     </div>
   </Router>
), document.getElementById('root'));

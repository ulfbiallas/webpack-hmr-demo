import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <ul>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/test">Topics</Link></li>
  </ul>
);

import * as React from 'react'
import {Link} from 'react-router-dom'

const Menu: React.FunctionComponent<{}> = () => (
  <ul>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/test">Topics</Link></li>
  </ul>
)

export default Menu

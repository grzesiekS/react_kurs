import React from 'react';

import './ListItem.css'
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
  <li className='listItemWrapper'>
    <img src={danAbramovImage} alt='avatar' />
    <div>
      <h2>Dan Abramov</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum sollicitudin odio nec iaculis. Curabitur sed libero ut orci commodo porttitor.</p>
      <button>visit twitter page</button>
    </div>
  </li>
);

export default ListItem;
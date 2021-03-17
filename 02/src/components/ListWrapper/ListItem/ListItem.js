import React from 'react';

import './ListItem.css'
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
  <li className='listItem__wrapper'>
    <img src={danAbramovImage} alt='avatar' className='listItem__image' />
    <div>
      <h2 className='listItem__name'>Dan Abramov</h2>
      <p className='listItem__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum sollicitudin odio nec iaculis. Curabitur sed libero ut orci commodo porttitor.</p>
      <button className='listItem__button'>visit twitter page</button>
    </div>
  </li>
);

export default ListItem;
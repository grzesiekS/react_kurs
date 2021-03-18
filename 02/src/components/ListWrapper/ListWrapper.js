import React from 'react';
import './ListWrapper.css';
import ListItem from './ListItem/ListItem'

const ListWrapper = (props) => (
  <ul className='listWrapper__wrapper'>
    {props.items.map(account => (
      <ListItem key={account.name} {...account}/>
    ))}
  </ul>
);

export default ListWrapper;
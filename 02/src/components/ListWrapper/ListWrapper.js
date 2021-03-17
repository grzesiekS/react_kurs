import React from 'react';
import './ListWrapper.css';
import ListItem from './ListItem/ListItem'
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWrapper = () => (
  <ul className='listWrapper__wrapper'>
    {twitterAccounts.map(account => (
      <ListItem key={account.name} {...account}/>
    ))}
  </ul>
);

export default ListWrapper;
import React from 'react';
import AppContext from '../../context';

const ArticlesView = () => ( 
  <AppContext.Consumer>
    {context => (
      <p>This is </p>
    )}
    
  </AppContext.Consumer>
);

export default ArticlesView;
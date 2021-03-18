import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css'

const ListItem = ({
  name, 
  image, 
  description, 
  twitterLink
}) => (
  <li className='listItem__wrapper'>
    <img 
      src={image} 
      alt={name} 
      className='listItem__image' 
    />
    <div>
      <h2 className='listItem__name'>{name}</h2>
      <p className='listItem__description'>{description}</p>
      <a 
        href={twitterLink}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        className='listItem__button'
      >
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: 'One of the React creators',
};

export default ListItem;
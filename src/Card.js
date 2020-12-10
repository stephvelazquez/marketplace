import './Card.css';
import React from 'react';

function Card({name, description, favoriteFruit}) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Description: </strong>{description}</p>
      <p><strong>Favorite fruit: </strong>{favoriteFruit}</p>
    </div>
  );
}

export default Card;

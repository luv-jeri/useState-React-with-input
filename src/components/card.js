import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
  const { cardDetails } = props;

  const { name, DP, description } =
    cardDetails;

  return (
    <div className='card'>
      <h4>{name}</h4>
      <img
        src={DP}
        alt=''
        height={100}
      />
      <p>{description}</p>
    </div>
  );
}

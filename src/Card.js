import React from 'react';

const Card = ({ movies }) => {
    console.log('here', movies[0])
    return <h1 className="tc white">{ movies[0].title }</h1>
}

export default Card;
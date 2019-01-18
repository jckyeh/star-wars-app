import React from 'react';
import Card from './Card.js';

const Cardlist = ({ movies, posters }) => {
    return (
        movies.map((movie, index) => {
            // console.log(movie.episode_id)
            return (
                <Card 
                    key={movie.episode_id}
                    film={movie}
                    poster={posters[index]}
                />
            )
        })
    )
}

export default Cardlist;
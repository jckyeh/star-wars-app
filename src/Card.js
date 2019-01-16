import React from 'react';

const Card = ({ film, poster }) => {
    return (
        <div className="mw8 mv3 mh4 dib br4 bg-dark-gray moon-gray">
            <div className="flex flex-column flex-row-ns">
                <div className="w-100 tl ph4 pv2 order-2 order-1-ns">
                    <h1 className="lh-title f3 light-gray">{ film.title }</h1>
                    <p>Director: {film.director}</p>
                    <p>{film.release_date}</p>
                    <p>{film.opening_crawl}</p>
                </div>
                <div className="w100 bl-l bl-m b--yellow bw1-l bw1-m order-1 order-2-ns">
                    <img src={poster}
                    className="db"
                    alt='A New Hope Poster'/>
                </div>
            </div>
        </div>
    )
}

export default Card;
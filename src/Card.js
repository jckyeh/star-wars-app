import React from 'react';

const Card = ({ movies }) => {
    console.log('here', movies[0])
    return (
        <article className="mw7 dib br4 bg-mid-gray moon-gray">
            <div className="flex flex-column flex-row-ns">
                <div className="w-100 tl ph4 pv2">
                    <h1 className="lh-title f3">{ movies[0].title }</h1>
                    <p>Director: {movies[0].director}</p>
                    <p>{movies[0].release_date}</p>
                    <p>{movies[0].opening_crawl}</p>
                </div>
                <div className="w-50">
                    <img src='https://is5-ssl.mzstatic.com/image/thumb/Video49/v4/ff/af/3a/ffaf3a5f-5aa1-e495-8846-b671def30067/pr_source.lsr/268x0w.png'
                    className="db"
                    alt='A New Hope Poster'/>
                </div>
            </div>
        </article>
    )
}

export default Card;
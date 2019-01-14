import React from 'react';

const Card = ({ movies }) => {
    console.log('here', movies[0])
    return (
        <article className="br4 pa3 bg-mid-gray bw2 moon-gray dib mv4 w-100 w-50-m w-25-l center">
            <h1>{ movies[0].title }</h1>
            <p>Director: {movies[0].director}</p>
            <p>{movies[0].release_date}</p>
            <p>{movies[0].opening_crawl}</p>
            <div>
                <img src='https://is5-ssl.mzstatic.com/image/thumb/Video49/v4/ff/af/3a/ffaf3a5f-5aa1-e495-8846-b671def30067/pr_source.lsr/268x0w.png' 
                alt='A New Hope Poster'/>
            </div>
        </article>
    )
}

export default Card;
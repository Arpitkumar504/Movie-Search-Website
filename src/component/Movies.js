import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../component/Card.js';
import { useGlobalContext } from '../context/Contexts.js'

const Movies = () => {
    const { data, isLoading } = useGlobalContext();
    if (isLoading) {
        return (
            <div className="movie">
                <h1>Loading.....</h1>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="carddata">
                {
                    data.map((element, index) => {
                        const { Title, Poster, imdbID } = element;
                        return (
                            <Link to={`/movie/${imdbID}`} key={imdbID}>
                                <Card
                                    key={index}
                                    title={Title}
                                    image={Poster}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Movies

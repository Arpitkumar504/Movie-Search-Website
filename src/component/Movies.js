import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillClockFill } from 'react-icons/bs'
import { MdError } from 'react-icons/md'
import Card from '../component/Card.js';
import { useGlobalContext } from '../context/Contexts.js'

const Movies = () => {
    const { data, isLoading, query } = useGlobalContext();
    if (isLoading || query === "") {
        return (
            <div className="movie">
                {query !== "" ? <h1>Loading... <BsFillClockFill /></h1> : <h1>Please Enter Movie Name <MdError /></h1>}
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

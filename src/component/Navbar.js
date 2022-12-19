import React from 'react'
import { BiMoviePlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = ({ name }) => {
    return (
        <div className='navbar'>
            <Link to="/"><h1>{name} <BiMoviePlay /></h1></Link>
        </div>
    )
}

export default Navbar

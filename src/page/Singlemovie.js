import React from 'react'
import { useParams } from 'react-router-dom'

const Singlemovie = () => {
    const {id}=useParams();
  return (
    <div>
    <h5>Single Movie {id}</h5>
    </div>
  )
}

export default Singlemovie

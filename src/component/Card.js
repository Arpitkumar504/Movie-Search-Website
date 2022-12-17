import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
    <div className="title">

        <h5>{props.title}</h5>
    </div>
        <div className="image">
            <img src={props.image} alt="image" />
        </div>
    </div>
  )
}

export default Card

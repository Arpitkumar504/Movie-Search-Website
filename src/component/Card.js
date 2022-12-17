import React from 'react'

const Card = ({ title, image }) => {
  return (
    <div className='card'>
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="image">
        <img src={image} alt="image" />
      </div>
    </div>
  )
}

export default Card

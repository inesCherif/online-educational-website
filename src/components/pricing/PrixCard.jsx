import React from 'react'
import { price } from '../../data'

const PrixCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow">
            <h4>{val.name}</h4>
            <h1>
                <span>£ </span>
                {val.price}
            </h1>
            <p>{val.desc}</p>
            <button className='outline-btn'>GET STARTETD</button>
        </div>
      ))}
    </>
  )
}

export default PrixCard

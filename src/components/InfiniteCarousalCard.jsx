import React from 'react';
import '../assets/css/infiniteCarousalCard.css'

const InfiniteCarousalCard = ({ data : {p, img, h3} }) => {
  return (
      <div className='subCarousalCard--wrapper'>
          <img className='subCarousalCard--img' src={img} alt={h3} />
          <h3 className='subCarousalCard--h3'>{h3}</h3>
          <p className='subCarousalCard--p'>{p}</p>
      </div>
  )
}

export default InfiniteCarousalCard 
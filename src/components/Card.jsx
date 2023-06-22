import React from 'react'
import '../assets/css/card.css';

const Card = (props) => {

    const { data: { img, p, title } } = props;
    

  return (
      <div className='card' style={{}}>
          <div className='card-img__wrapper'>
              <img src={img} alt={title} />
              <div></div>
              <p>{p}</p>
          </div>
          <h2>{title}</h2>

          

    </div>
  )
}

export default Card
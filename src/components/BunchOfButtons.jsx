import React from 'react'

const BunchOfButtons = (props) => {
    const { data, pos, setPos } = props
  return (
    <ul className="slide__button-wrapper" >
        {data.map((_, i) => (
          <li
            key={i}
            className={'slide__button ' + (pos % data.length === i && 'active')}
            onClick={() => setPos(i)}
          />))
        }
      </ul>
  )
}

export default BunchOfButtons
import React from 'react'
import "../assets/css/bunchOfButtons.css";

const BunchOfButtons = (props) => {
    const { data, pos, setPos } = props
  return (
    <ul className="slide__button-wrapper" >
        {data.map((_, i) => (
          <li
            key={i}
            className={'slide__button ' + (pos % data.length === i && 'active')}
            onClick={() => {
              console.log("clicked")
              setPos(i)
            }}
          />))
        }
      </ul>
  )
}

export default BunchOfButtons
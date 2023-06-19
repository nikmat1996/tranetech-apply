import React, { useEffect, useRef, useState } from "react";
import "../assets/css/carousalMain.css";

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const numOfItemsDisplayed = 3;




const CarousalMain = () => {

  const [pos, setPos] = useState(0);
  const trackRef = useRef()
  
  useEffect(() => {

    if (pos === 4){
      
      setTimeout(() => {
        for (let slide of trackRef.current.children) {
          slide.style.transition = "transform 0s"
          console.log(slide)
        }
       
        setPos(0)
      }, 300);}

    const slideInterval = setInterval(() => {
      for (let slide of trackRef.current.children) {
        slide.style.transition = "transform 0.3s"
      }
      setPos(prevPos => prevPos === data.length ? 1 : prevPos + 1)
    }, 2000)
    
    return () => {
      console.log('cleaning', pos)
      clearInterval(slideInterval)
    }
  }, [pos])
  
  const slideStyle = {
    transform: `translateX(-${100 * pos}%)`,
  }
 
  console.log(pos)

  return (
    <section>
      <div className="track" ref={trackRef}>
      
        {[...data.map((item) => (
          <div key={item.id} className="slide" style={slideStyle}>
            {item.id}
          </div>
        )),
          
          //repeated divs for filler
          ...new Array(numOfItemsDisplayed).fill().map((_, i) => (
            <div key={data[i].id +"i"} className="slide" style={slideStyle}>
              {data[i].id}
            </div>
          ))
        ]}
      
      </div>

      <ul className="slide__button-wrapper" >
        {data.map((_, i) => (
          <li
            key={i}
            className={'slide__button ' + (pos % data.length === i && 'active')}
            onClick={() => setPos(i)}
          />))
        }
      </ul>
    </section>
  );
};

export default CarousalMain;

import React, { useEffect, useRef, useState } from "react";
import "../assets/css/carousalMain.css";
import { carousalMainData as data } from './DATA'
import BunchOfButtons from "./BunchOfButtons";
import Card from "./Card";

let slideInterval, mouseOverTimeout, slideOnce, time = 3300;
const CarousalMain = () => {
  
  const [pos, setPos] = useState(0);
  const [numOfItemsDisplayed, setNumOfItemsDisplayed] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  
  
  const trackRef = useRef()
  const mouseOver = useRef(false)
  
  
  useEffect(() => {

    if (mouseOver.current == false) {
      if (pos === data.length) {
        setTimeout(() => {
          addTransition()
          setPos(0)
        }, 300);

        setTimeout(() => addTransition(300), 320)

        slideOnce = setTimeout(() => {
          setPos(pre => pre + 1)
        }, time)
      }

      startAnimation()
    }
    return () => {
      clearInterval(slideInterval)
    }
  }, [pos])

  useEffect(() => { 

    const cb = (entries) => {
      if (entries[0].isIntersecting)
        setIsVisible(true)
    }
    const observer = new IntersectionObserver(cb)

    observer.observe(trackRef.current)

  }, [])

  function addTransition(duration = 0) {
    for (let slide of trackRef.current.children) {
      slide.style.transition = `transform ${duration}ms ease-in-out`
    }
  }

  function startAnimation() {
    slideInterval = setInterval(() => {
      addTransition(300)
      setPos(pre => pre + 1)
    }, time)
  }

  function stopAnimation() {
    clearInterval(slideInterval)
    clearTimeout(mouseOverTimeout)
    clearTimeout(slideOnce)
  }
  
  const SLIDE_STYLE = {
    transform: `translateX(-${100 * pos}%)`,
  }

  const TRACK_STYLE = {
    transform: `translateY(-${isVisible ? 0 : -50}%)`,
  }
 
  const handleMouseEnter = () => {
    mouseOver.current = true
    stopAnimation()
  }

  const handleMouseLeave = () => {
    mouseOver.current = false
    mouseOverTimeout = setTimeout(() => setPos(pos => pos + 1), time)    
  }

  return (
    <section className="carousal" >
      <div className="track track_CarousalMain" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={TRACK_STYLE} ref={trackRef}>
      
        {[...data.map((item) => (
          <div key={item.id} className="slide" style={SLIDE_STYLE}>
            <Card data={item} />
          </div>
        )),
          
          //repeated slides for filler
          ...new Array(numOfItemsDisplayed).fill().map((_, i) =>
            <div key={data[i].id + "i"} className="slide" style={SLIDE_STYLE}>
              <Card data={data[i]} />
            </div>
          )
        ]}
      
      </div>

      <BunchOfButtons data={data} setPos={setPos} pos={pos} />
    </section>
  );
};

export default CarousalMain;

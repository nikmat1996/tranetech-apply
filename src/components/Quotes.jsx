import React, { useEffect, useRef, useState } from "react";
import "../assets/css/carousalMain.css";
import "../assets/css/quotes.css";
import { quotesData as data } from './DATA'
import QuotesCard from "./QuotesCard";

let slideInterval, mouseOverTimeout, slideOnce, time = 5300;
const Quotes = () => {
  
  const [pos, setPos] = useState(0);
  const [numOfItemsDisplayed, setNumOfItemsDisplayed] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  
  const trackRef = useRef()
    const mouseOver = useRef(false)
    const duration = 1500
  
  
  useEffect(() => {

    if (mouseOver.current == false) {
      if (pos === data.length) {
        setTimeout(() => {
          addTransition()
          setPos(0)
        }, duration);

        setTimeout(() => addTransition(duration), duration + 20)

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
      addTransition(duration)
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
        <section className="carousal quotesSection" >
            <div className="quotesTitle_wrapper">
                <h2>our testimonials</h2>
                <p>Our Clients are our biggest supporters. Hear what they have to say about us</p>
            </div>
            <div className="track quoteTrack" style={TRACK_STYLE} ref={trackRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            
            {[...data.map((item) => (
                <div key={item.id} className="slide quoteSlide" style={SLIDE_STYLE}>
                    <QuotesCard data={ item } />
                </div>
            )),
            
            //repeated slides for filler
                ...new Array(numOfItemsDisplayed).fill().map((_, i) =>
                <div key={data[i].id + "i"} className="slide quoteSlide" style={SLIDE_STYLE}>
                    <QuotesCard data={ data[i] } />
                </div>
                )
            ]}
            
            </div>

    </section>
  );
};

export default Quotes;

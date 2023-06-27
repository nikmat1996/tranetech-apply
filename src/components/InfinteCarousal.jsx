import React, { useEffect, useRef, useState } from "react";
import "../assets/css/carousalMain.css";
import "../assets/css/infiniteCarousal.css";
import { carousalSubData as data } from "./DATA";
import InfiniteCarousalCard from "./InfiniteCarousalCard";

let slideInterval,
  mouseOverTimeout,
  slideOnce,
  time = 5000;

const InfinteCarousal = () => {
  const [pos, setPos] = useState(0);
  const [numOfItemsDisplayed, setNumOfItemsDisplayed] = useState(3);

  const trackRef = useRef();
  const mouseOver = useRef(false);

  useEffect(() => {
    if (mouseOver.current == false) {
      if (pos === data.length) {
        setTimeout(() => {
          addTransition();
          setPos(0);
        }, 1500);

        setTimeout(() => addTransition(1500), 1500 + 20);

        slideOnce = setTimeout(() => {
          setPos((pre) => pre + 1);
        }, time);
      }

      startAnimation();
    }
    return () => {
      clearInterval(slideInterval);
    };
  }, [pos]);

  function addTransition(duration = 0) {
    for (let slide of trackRef.current.children) {
      slide.style.transition = `transform ${duration}ms ease-in-out`;
    }
  }

  function startAnimation() {
    slideInterval = setInterval(() => {
      addTransition(1500);
      setPos((pre) => pre + 1);
    }, time);
  }

  function stopAnimation() {
    clearInterval(slideInterval);
    clearTimeout(mouseOverTimeout);
    clearTimeout(slideOnce);
  }

  const SLIDE_STYLE = {
    transform: `translateX(-${100 * pos}%)`,
  };

  const handleMouseEnter = () => {
    mouseOver.current = true;
    stopAnimation();
  };

  const handleMouseLeave = () => {
    mouseOver.current = false;
    mouseOverTimeout = setTimeout(() => setPos((pos) => pos + 1), time);
  };

  return (
    <section className="carousalSub_wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <div className="carousal_section">
      <p className="carousal_section-p">OUR SERVICES</p>
      <h2 className="carousal_section-h2">
        Innovative solutions to enhance and manage business better.
      </h2>
      <div className="track track_secondCarousal" ref={trackRef}>
        {[
        ...data.map((item) => (
          <div key={item.h3} className="slide slide_secondCarousal" style={SLIDE_STYLE}>
          <InfiniteCarousalCard data={item} />
          </div>
        )),
        //repeated slides for filler
        ...new Array(numOfItemsDisplayed).fill().map((_, i) => (
          <div key={data[i].h3 + "i"} className="slide slide_secondCarousal" style={SLIDE_STYLE}>
          <InfiniteCarousalCard data={data[i]} />
          </div>
        )),
        ]}
      </div>
	  </div>
    </section>
  );
};

export default InfinteCarousal;

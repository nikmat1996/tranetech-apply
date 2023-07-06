import React, { useEffect, useState } from "react";
import "../assets/css/mainModal.css";
import { mainModalData as data } from "./DATA";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const MainModal = () => {
  const [index, setIndex] = useState(2);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const modalInterval = setInterval(() => {
      setIndex(prevIndex => prevIndex === data.length - 1 ? 0 : prevIndex + 1);
      setShow(false);
      setTimeout(() => setShow(true), 300);
    }, 5000);

    return () => clearInterval(modalInterval);
  }, [index]);

  const handleForwardClick = () => {
    setShow(false);
    setIndex(prev => prev === data.length - 1 ? 0 : prev + 1);
    setTimeout(() => setShow(true), 300);
  };

  const handleBackwardClick = () => {
    setShow(false);
    setIndex(prev => prev === 0 ? data.length - 1 : prev - 1);
    setTimeout(() => setShow(true), 300);
  };

  const BGIMG__STYLE = {
    backgroundImage: `url(${data[index].img_1a})` 
  }

  return (
    <section className="mainModal">
      <div style={BGIMG__STYLE}className="mainModal__imgBg">
        {show && (<img className="mainModal__img" src={data[index].img_1b} alt="" />)}
        {show && (
          <div className="wrapper">
            <div className="mainModal__animatedBox">
              <div className="mainModal__animatedBox-textWrapper">
                <div><p> {data[index].subHead} </p></div>
                <div><h1> {data[index].mainHead1} </h1></div>
                <div><h2> {data[index].mainHead2} </h2></div>
              <button className="mainModal__animatedBox-button">view more</button>
              </div>
            </div>
          </div>
        )}
        {/* <div className="mainModal__buttonWrapper">
          <button onClick={handleBackwardClick}>
            <FaArrowLeft className="mainModal__button" size={70}/>
          </button>
          <button onClick={handleForwardClick}>
            <FaArrowRight className="mainModal__button" size={70}/>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default MainModal;

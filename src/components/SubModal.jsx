import React from "react";
import "../assets/css/subModal.css";
import { subModalData as data } from "./DATA";

const SubModal = () => {
  return (
    <section className="subModal">
      <div className="subModal__left">
        <h3>WHO ARE WE</h3>
        <h2>We are the effective solution providers for you.</h2>
        <p>
          Exploring the possibilities of technology to foster business
          development, we at Tranetech Software Solutions consistently strive to
          apply new thoughts to create more explicit, valuable, and better
          experiences with technological advancement, however continuously
          improving the way our clients work. As the Best ERP software company
          Abu Dhabi, we spawn great innovation with new, powerful programming
          languages and methodologies to transform how organizations,
          businesses, and even people coordinate and work. With our production
          sector based in Abu Dhabi, we are committed to offering our clients -
          innovative, customized, cost-effective solutions having outstanding
          value and technical excellence.
        </p>
        <button>About Company</button>
      </div>
      <div className="subModal__figureWrapper">
        {data.map((item) => (
          <figure key={item.h4}>
            <img src={item.img} alt="message" />
            <div></div>
            <h4>{item.h4}</h4>
            <p>{item.p}</p>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default SubModal;

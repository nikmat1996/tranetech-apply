import React from 'react';
import "../assets/css/quotesCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QuotesCard = ({data : { id, img, p }}) => {
    return (
        <>
            <img className="quotesCard_img" src={img} />
            <p className="quotesCard_p">{p}</p>
            <FontAwesomeIcon icon={faQuoteLeft} size="2xl" style={{color: "#faae34",}} />
        </>
    )
}

export default QuotesCard
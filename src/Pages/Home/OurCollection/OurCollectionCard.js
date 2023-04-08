import React from 'react';

const OurCollectionCard = ({ collection }) => {
    const { img, title, qty } = collection
    return (
        <div className="card">
            <div className="colltect_title">{title}</div>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="qty_title">QTY:{qty}</div>
        </div>
    );
};

export default OurCollectionCard;
import React from 'react';

const OurProductsCard = ({ item }) => {
    const { Img } = item
    return (
        <div className="card shadow-xl sliderItem">
            <div className="card-body">
                <img src={Img} alt='' />
            </div>
        </div>
    );
};

export default OurProductsCard;
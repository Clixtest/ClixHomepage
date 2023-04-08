import React from 'react';
import './CoreValuesCard.css';
import Icon from '../../../Assets/social media icons/right-arrow.png';

const CoreValuesCard = ({ coreData }) => {
    const { icon, name, title, link } = coreData;
    const boxShadow = {
        boxShadow: '0px 4px 20px 2px rgba(7, 158, 1, 0.5)',
    };

    return (
        <div className="card card-area  2xl:h-auto  3xl:h-[520px] rounded-none">
            <div className="card-body p-4 mt-10 text-white">
                <div className="flex justify-center items-center mt-8">
                    <span
                        className="w-[80px] h-[80px] rounded-[12px] bg-[#079E01] flex justify-center items-center"
                        style={boxShadow}
                    >
                        <img src={icon} className="w-10 h-10 text-center" alt=""></img>
                    </span>
                </div>
                <div className="mt-6">
                    <h3 className="text-center mb-3 capitalize font-roboto font-bold text-[26px]">
                        {name}
                    </h3>
                    <p className="text-[16px] font-poppins font-light">{title}</p>
                </div>
            </div>
            <div className="card-actions justify-center my-4">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-core py-2 px-4 flex justify-center items-center"
                >
                    Read More{' '}
                    <span className="mt-1 ml-2">
                        <img src={Icon} alt="" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default CoreValuesCard;
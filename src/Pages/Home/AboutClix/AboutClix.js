import React from 'react';
import videoImg from '../../../Assets/img/video-bg.png'
import shape01 from '../../../Assets/shape/shape-img01.png'
import videoButton from '../../../Assets/icon/button.png'
import './AboutClix.css'
const AboutClix = () => {
    return (
        <div className='aboutContainer about-clix-bg  flex justify-center items-center  overflow-hidden py-14 mt-[-2px]'>
            <div className=' absolute  bottom-[200px] left-[-20px] '>
                <img src={shape01} alt='' />
            </div>
            <div className=' flex justify-center'>
                <h3 className='about-top-title text-white text-center mb-10 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>About</span> ClixPass</h3>
            </div>
            <div className="embedVideo">
                <div className="embedResponsive">
                        {/* <div className="card-body  cursor-pointer text-white justify-center items-center">
                            <button><img className=' w-28 h-28' src={videoButton} alt='' /></button>
                        </div> */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/j8wyzsGb8l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>

    );
};

export default AboutClix;
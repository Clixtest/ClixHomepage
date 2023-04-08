import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import HeroImg from '../../../Assets/img/gif/Main_Green.gif'
import socialIcon1 from '../../../Assets/social media icons/twitter.png'
import socialIcon2 from '../../../Assets/social media icons/github.png'
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='hero bannerBg xm:h-[66.75rem] sm:h-[57.75rem] md:h-[57.75rem] xl:h-[57.75rem] 2xl:h-[57.75rem] 3xl:h-[57.75rem]' style={{ backgroundImage: `url(${HeroImg})` }}>
                <div className=' py-5 w-full absolute z-20 top-0'>
                    
                </div>
                <div className=' w-11/12 mx-auto'>
                    <div className=' flex  justify-between items-center text-white'>
                        <div className='xl:text-start 2xl:text-start 3xl:text-start max-w-[430px] text-container' data-aos="zoom-in-right">
                            <h4 className="pt-2 font-poppins font-bold xm:text-[25px] sm:text-[35px] md:text-[35px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] 3xl:text-[35px] sm:leading-[1.4] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.4] 2xl:leading-[1.4] 3xl:leading-[1.4]  ">A new era of investing: powered by innovation.</h4>
                            <div className=' my-4 w-full h-2 bg-[#079E01]'></div>
                            <p className=' pt-2 font-BeVietnam font-normal text-justify text-md opacity-70 leading-9'>Clix is a utility-endowed digital asset platform that operates on the Web 3 infrastructure. With Web3, Clix is able to offer a decentralized and transparent ecosystem that empowers users to own and control their digital assets, providing unprecedented financial freedom. The platform is committed to saving the environment with the help of every community member, and will partner with organizations and initiatives to help achieve this goal. By utilizing blockchain technology, Clix provides a secure, immutable, and tamper-proof ledger of transactions that enables users to engage in the new era of finance in a safe and trustless manner.
                            </p>
                            <div className="card-actions justify-start mt-6">
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="w-full">
                                    <button className="p-0 py-[8px] hover:bg-[#079E01] rounded-3xl w-full bg-[#079E01]">Introduction Video</button>
                                </a>
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="w-full mt-7">
                                    <button className="banner-button w-full">Whitepaper</button>
                                </a>
                            </div>
                        </div>
                        <div className='banner-border xm:hidden flex justify-center items-center'>
                            <div className=' flex gap-4 flex-col-reverse'>
                                <span className=' banner-shape2'>
                                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><img src={socialIcon2} alt='' /></a>
                                </span>
                                <span className=' banner-shape1'>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={socialIcon1} alt='' /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
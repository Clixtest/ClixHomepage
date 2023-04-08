import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/Logo.png'
import {
    HiBars3BottomRight,
    HiOutlineXMark,
} from "react-icons/hi2";
import './Navbar.css'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className="header_area">
                <div className='w-11/12 mx-auto display xl:hidden 2xl:hidden'>
                    <div className="navbar fixed top-0 bg-[#079E01] px-4 z-[50px] left-0  display mb-11   2xl:hidden">
                        <div className=' w-full py-2 mx-auto  flex justify-between items-center'>
                            <div>
                                <Link to='/'><img src={Logo} alt='logo' /></Link>
                            </div>
                            <div className='text-center ' onClick={() => setOpen(!open)}>
                                {open ?
                                    <span className='open-nav'><HiOutlineXMark /></span>
                                    :
                                    <span className='close-nav'><HiBars3BottomRight /></span>
                                }
                            </div>
                        </div>
                        <div className={` responsiveMenuArea fixed z-[30px] top-0 duration-700 ease-in-out ${open ? 'activeOpen' : 'left-[-999px]'}`}>
                            <div className=" bg-[#FFF] z-[50px] menu-area" onClick={() => setOpen(!open)}>
                                <div className="pt-14">
                                    <div>
                                        <ul className="navbar-menu inline-block menu-horizontal items-center">
                                            <li><a href="#CoreValues" className='font-inter text-md font-normal'>Core Values</a></li>
                                            <li><a href="#OurProducts" className='font-inter text-md font-normal'>Our Products</a></li>
                                            <li><a href="#NFTInnovation" className='font-inter text-md font-normal'>NFT & Innovation?</a></li>
                                            <li><a href="#Roadmap" className='font-inter text-md font-normal'>Roadmap</a></li>
                                            <li><a href="#Flowchart" className='font-inter text-md font-normal'>Flowchart</a></li>
                                            <li><a href="#Collections" className='font-inter text-md font-normal'>Collections</a></li>
                                            <li><a href="#Team" className='font-inter text-md font-normal'>Team</a></li>
                                            <button className=" mt-4 font-inter text-md font-normal 2xl:ml-5 btn-button">Mint Now</button>
                                        </ul>
                                        <div className=" flex justify-center mt-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-11/12 hidden  xl:block 2xl:block mx-auto navContainer'>
                    <div className="navbar">
                        <div className="navbar-start">
                            <Link className=' text-white' to='/'><img src={Logo} alt='' /></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu text-white menu-horizontal px-1">
                                <li><a href="#CoreValues" className='font-inter text-md font-normal'>Core Values</a></li>
                                <li><a href="#OurProducts" className='font-inter text-md font-normal'>Our Products</a></li>
                                <li><a href="#NFTInnovation" className='font-inter text-md font-normal'>NFT & Innovation?</a></li>
                                <li><a href="#Roadmap" className='font-inter text-md font-normal'>Roadmap</a></li>
                                <li><a href="#Flowchart" className='font-inter text-md font-normal'>Flowchart</a></li>
                                <li><a href="#Collections" className='font-inter text-md font-normal'>Collections</a></li>
                                <li><a href="#Team" className='font-inter text-md font-normal'>Team</a></li>
                                <button className="font-inter text-md font-normal 2xl:ml-5 btn-button">Mint Now</button>
                            </ul>
                        </div>
                        <div className="navbar-end">
                        </div>
                    </div>
                </div>
        </header>
    );
};

export default Navbar;
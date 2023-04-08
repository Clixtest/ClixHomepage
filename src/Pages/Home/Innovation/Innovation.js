import React from 'react';
import innovationImg from '../../../Assets/img/innovation-img.png'
import shape01 from '../../../Assets/shape/shape-img01.png'
import Icon from '../../../Assets/social media icons/right-arrow.png'
import './Innovation.css'
import { Link } from 'react-router-dom';
const Innovation = () => {
    return (
        <div className="innovation-Bg  flex justify-center items-center h-auto mt-[-2px] py-24" id='NFTInnovation'>
            <div className='w-11/12 mx-auto'>
                <div className='hero '>
                    <div className='absolute top-[24px] left-0'>
                        <img src={shape01} alt='' />
                    </div>
                    <div className="hero-content p-0 max-w-none flex-col md:flex-col-reverse lg:flex-col-reverse xl:flex-row-reverse 2xl:flex-row-reverse 3xl:flex-row-reverse 2xl:gap-32">
                        <div className=' text-white'>
                            <div className=' flex justify-start'>
                                <h3 className='Innovation-top-title text-white text-center relative z-10 mb-6 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>NFT</span> & Innovation ?</h3>
                            </div>
                            <p className="py-6 font-poppins text-[18px] font-light leading-[30px]">NFTs are an innovative technology that is transforming the way we think about digital assets. NFTs, or non-fungible tokens, use blockchain technology to provide proof of ownership and authenticity for unique digital assets such as artwork, collectibles, and more. By creating a membership pass as an NFT, we can offer our members a unique digital asset that represents their ownership of the pass and provides them with access to exclusive benefits within the clix ecosystem.</p>
                            <p className='font-poppins text-[18px] font-light leading-[30px]'>One of the advantages of using an NFT for a membership pass is security. NFTs are stored on a decentralized blockchain network, which means that they cannot be copied, duplicated, or altered in any way. This provides a high level of security for both the member and the organization issuing the membership pass. In addition, the use of an NFT for a membership pass provides a level of transparency and accountability that is not possible with traditional membership systems.</p>
                        </div>
                        <img src={innovationImg} alt='' className=" relative z-20 w-full sm:max-w-xl md:max-w-xl lg:max-w-xl xl:max-w-xl 2xl:max-w-xl 3xl:max-w-xl" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Innovation;
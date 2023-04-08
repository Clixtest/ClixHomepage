import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ourData from './OurProductsSlider';
import shape02 from '../../../Assets/shape/shape-img02.png'
import Laptop from '../../../Assets/img/laptop.png'
import './OurProducts.css'
import OurProductsCard from './OurProductsCard';
const OurProducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode:false
                }
            }
        ]

    };
    return (
        <div className='our-product relative py-28 mt-[-2px] h-auto' id='OurProducts'>
            <div className='absolute top-[0%] right-0 pointer-none' >
                <img src={shape02} className='2xl:w-[800px]' alt='' />
            </div>
            <div className='w-11/12 mx-auto'>
                <div className=' flex justify-center'>
                    <div className=' max-w-5xl text-white relative z-10 text-center '>
                        <div className=' flex justify-center'>
                            <h3 className='products-top-title text-white text-center  mb-10 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>our</span> Products</h3>
                        </div>
                        <p className=' font-poppins text-[16px] font-normal'>Lorem ipsum dolor sit amet. Et ipsum obcaecati et porro consectetur sed praesentium quis. Ea dolorem asperiores ea quae laboriosam ut quasi porro id culpa ullam sed autem nulla. Ea aperiam tenetur non vero perferendis eum.</p>
                    </div>
                </div>
                <br />
                <br />
                <div className='productSlider'>
                    <img src={Laptop} className="productLaptop" />
                    <div className="productSliderInner">
                        <Slider {...settings} >
                            {
                                ourData.map(item => <OurProductsCard
                                    key={item.id}
                                    item={item}
                                ></OurProductsCard>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
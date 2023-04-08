import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pattern from "../../../Assets/img/pattern.png";
import teamData from "./OurTeamData";
import OurTeamCard from "./OurTeamCard";
import "./OurTeam.css";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden relative z-[20px] py-24 bg-[#140F16] mt-[-2px] mb-[-2px] h-auto" id="Team">
      <div>
        <img src={Pattern} className=" absolute right-0 top-[-15px]" alt="" />
      </div>
      <div className="w-11/12 mx-auto">
        <div className=" flex justify-center relative z-10">
          <div className=" max-w-6xl text-white text-justify md:text-center lg:text-center xl:text-center 2xl:text-center 3xl:text-center mb-6 ">
            <div className=" flex justify-center">
              <h3 className="tram-to-title text-white text-center relative z-10 mb-10 font-roboto text-[42px] uppercase ">
                <span className=" text-[#079E01]">Our</span> Team
              </h3>
            </div>
            <p className=" font-poppins text-[16px] font-normal leading-[30px]">
              Our team is a group of tech enthusiasts who are passionate about exploring and implementing cutting-edge technologies. We are especially interested in the potential of web3 and the ways in which it can revolutionize various industries. To stay ahead of the curve, we have invested in our education and have become certified experts in blockchain technology. With our combined expertise and dedication, we are well-equipped to navigate the exciting and ever-changing world of emerging technologies.
            </p>
          </div>
        </div>
        <div className="teamSlider relative z-[20px]">
          <Slider {...settings}>
            {teamData.map((item) => (
              <OurTeamCard key={item.id} item={item}></OurTeamCard>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
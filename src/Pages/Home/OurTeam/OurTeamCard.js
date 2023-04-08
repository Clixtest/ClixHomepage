import React from "react";
import twitterIcon from "../../../Assets/social media icons/twitter-icon.png";
import linkedinIcon from "../../../Assets/social media icons/linkedin-icon.png";

const OurTeamCard = ({ item }) => {
  const { Img, name, title, details, twitterLink, linkedinLink } = item;
  return (
    <div className="teamCart card card-side bg-base-100 xm:flex-col md:flex-col lg:flex-col xl:flex-row shadow-xl my-10">
      <img src={Img} alt="Movie" className="teamImage" />
      <div className="card-body px-4 py-0"> {/* Update the class here */}
        <h2 className="card-title text-[#333333] font-roboto font-bold text-[24px] uppercase mb-1">
          {name}
        </h2>
        <h5 className="text-[#333333] font-poppins font-medium text-[18px] uppercase mb-4 text-left">
          {title}
        </h5>
        <p className="TeamAbout text-[#666666] text-[14px] text-center">
          {details}
        </p>
        <div className="flex flex-col space-y-2 mt-4">
          <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={twitterIcon} className="w-[108px] h-[34px]" alt="" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={linkedinIcon} className="w-[108px] h-[34px]" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
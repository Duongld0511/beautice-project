import React from "react";
import Unsplas1 from "./../../assets/images/unsplash_pTrhfmj2jDA.png";
import Unsplas2 from "./../../assets/images/unsplash_mEZ3PoFGs_k.png";
import Unsplas3 from "./../../assets/images/unsplash_FVh_yqLR9eA.png";
import Twitter from "./../../assets/images/Twitter.png";
import Facebook from "./../../assets/images/Facebook.png";
import Instagram from "./../../assets/images/Instagram.png";
type Props = {};

const ProfessionalTeams = (props: Props) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#FF64AE] font-semibold">Professional Teams</h1>
        <div className="w-[600px] py-2 px-[70px] text-[36px] font-semibold text-[#091156] text-center mx-auto">
          The Professional expert
        </div>
        <div className="text-[#8B8B8B] w-[848px] text-[16px] tracking-wide mx-auto px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-[80px] w-[1140px] h-[626px] mx-auto ">
        <div className="hover:rounded-3xl hover:shadow-2xl hover:shadow-[#E4E7FF] hover:h-[600px]">
          <img className="mx-auto my-[59px]" src={Unsplas1} alt="" />
          <h1 className="text-[#FF64AE] font-semibold text-center">Surgeon</h1>
          <div className="text-[#091156] text-[18px] mb-5 font-bold text-center my-3">
            Beauty consultation
          </div>
          <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </div>
          <div className="flex justify-between w-[274px] mx-auto my-5">
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="hover:rounded-3xl hover:shadow-2xl hover:shadow-[#E4E7FF] hover:h-[600px]">
          <img className="mx-auto my-[59px]" src={Unsplas3} alt="" />
          <h1 className="text-[#FF64AE] font-semibold text-center">
            Dermatologist
          </h1>
          <div className="text-[#091156] text-[18px] mb-5 font-bold text-center my-3">
            Beauty consultation
          </div>
          <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </div>
          <div className="flex justify-between w-[274px] mx-auto my-5">
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="hover:rounded-3xl hover:shadow-2xl hover:shadow-[#E4E7FF] hover:h-[600px]">
          <img className="mx-auto my-[59px]" src={Unsplas2} alt="" />
          <h1 className="text-[#FF64AE] font-semibold text-center">
            Stylist expert
          </h1>
          <div className="text-[#091156] text-[18px] mb-5 font-bold text-center my-3">
            Beauty consultation
          </div>
          <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </div>
          <div className="flex justify-between w-[274px] mx-auto my-5">
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTeams;

import React from "react";
import Animation1 from "./../../assets/images/Animation1.png";
import Animation2 from "./../../assets/images/Animation2.png";
import Animation3 from "./../../assets/images/Animation3.png";

const CoreService = () => {
  return (
    <div className="w-[1140px] mx-auto">
      <div className="text-center">
        <h1 className="text-[#FF64AE] font-semibold">Main Service</h1>
        <div className="w-[600px] py-2 px-[70px] text-[36px] font-semibold text-[#091156] text-center mx-auto">
          Learn services to focus on your beauty
        </div>
        <div className="text-[#8B8B8B] w-[848px] text-[16px] tracking-wide mx-auto px-10">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-16 my-[80px] w-[1140px] mx-auto ">
          <div className="rounded-3xl shadow-2xl shadow-[#E4E7FF] h-[468px] bg-white">
            <img className="mx-auto my-[59px]" src={Animation1} alt="" />
            <div className="text-[#091156] text-[18px] mb-5 font-bold text-center">
              Beauty consultation
            </div>
            <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </div>
          </div>
          <div className="rounded-3xl shadow-2xl shadow-[#E4E7FF] h-[468px] bg-white">
            <img className="mx-auto my-[59px]" src={Animation2} alt="" />
            <div className="text-[#091156] text-[18px] mb-5 font-bold text-center">
              Beauty consultation
            </div>
            <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </div>
          </div>
          <div className="rounded-3xl shadow-2xl shadow-[#E4E7FF] h-[468px] bg-white">
            <img className="mx-auto my-[59px]" src={Animation3} alt="" />
            <div className="text-[#091156] text-[18px] mb-5 font-bold text-center">
              Beauty consultation
            </div>
            <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreService;

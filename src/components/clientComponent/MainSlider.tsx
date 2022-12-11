import React from "react";
import Frame from "./../../assets/images/Frame1.png";

type Props = {};

const MainSlider = (props: Props) => {
  return (
    <>
      <div className="flex w-[1140px] mx-auto">
        <div className="w-[465px] ">
          <div className="pl-16 py-40">
            <div className="font-bold text-[48px] w-[430px] leading-normal text-blue-900">
              Clinic & beauty consultant
            </div>
            <div className="font-medium text-[16px] text-[#091156] py-3 ">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </div>
            <button className="bg-[#FF64AE] rounded-full px-10 py-3 text-white font-semibold">
              More details
            </button>
          </div>
        </div>
        <div className="w-[601px] h-[358px] mt-[135px]">
          <img className="" alt="" src={`${Frame}`} />
        </div>
      </div>
      <div className="w-[70px] mt-[100px] flex justify-between gap-2 mx-auto">
        <button className="bg-[#EEEEEE] w-[14px] h-[3px] my-1 rounded-full"></button>
        <button className="bg-[#414880] w-[25px] h-[8px] rounded-full"></button>
        <button className="bg-[#EEEEEE] w-[14px] h-[3px] my-1 rounded-full"></button>
      </div>
    </>
  );
};

export default MainSlider;

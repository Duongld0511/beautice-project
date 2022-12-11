import React from "react";
import Unsplas from "./../../assets/images/unsplash_LRXYS0tSyGc.png";
type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="w-[1140px] mx-auto my-[100px] py-[80px]">
      <div className="grid grid-cols-2 gap-5">
        <div className="my-10">
          <p className="text-[#FF64AE] font-semibold my-2">About Us</p>
          <h1 className="text-[36px] font-semibold text-[#091156]">
            We are the best beauty clinic
          </h1>
          <div className="w-[483px] my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.Id dui erat sed quam tellus in purus.
            Pellentesque congue fringilla cras tellus enim.
          </div>
          <button className="bg-[#FF64AE] my-5 rounded-full px-10 py-3 text-white font-semibold">
            learn More
          </button>
        </div>
        <img className="ml-16" src={Unsplas} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;

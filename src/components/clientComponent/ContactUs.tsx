import React from "react";
import ContactAnimations from "./../../assets/images/ContactAnimations.png";
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="grid grid-cols-2 w-[1140px] mx-auto ">
      <div className="items-center">
        <img className="py-28" src={ContactAnimations} alt="" />
      </div>
      <div className="">
        <div className="">
          <p className="text-[#FF64AE] font-semibold">Contact Us</p>
          <div className="w-[404px] py-2 text-[36px] font-semibold text-[#091156]">
            Send your inquiry to our expert team
          </div>
          <div className="text-[#8B8B8B] w-[848px] text-[16px] tracking-wide  ">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </div>
        </div>
        <form className="my-5" action="">
          <div className="grid grid-cols-2 gap-7 my-5">
            <input
              className="border border-[#D9DDFE] rounded-[15px] h-[61px] px-4"
              type="text"
              placeholder="First name"
              name=""
              id=""
            />
            <input
              className="border border-[#D9DDFE] rounded-[15px] h-[61px] px-4"
              type="text"
              placeholder="Last name"
              name=""
              id=""
            />
          </div>
          <input
            className="w-full my-5 border border-[#D9DDFE] rounded-[15px] h-[61px] px-4"
            type="text"
            placeholder="Email address"
            name=""
            id=""
          />
          <br />
          <input
            className="w-full my-5 border border-[#D9DDFE] rounded-[15px] h-[61px] px-3"
            type="text"
            placeholder="Subject message"
            name=""
            id=""
          />
          <textarea
            className="w-full my-5 border border-[#D9DDFE] rounded-[15px] px-4 pt-4"
            placeholder="Your inquiry here"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-[#FF64AE] my-5 border-[#D9DDFE] rounded-full px-10 py-3 text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

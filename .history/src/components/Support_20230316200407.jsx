import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={supportImg}
          alt="/"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl uppercase text-center text-slate-300">Support</h2>
          <p className=" text-center text-5xl font-bold py-6 ">
            Finding the right
             <span className="text-blue-600"> SUPPORT TEAM</span>
          </p>
          <p className="text-3xl text-slate-300 py-4 text-center">
            Our support team is available 24/7 to answer any questions you may
            have. We're here to help!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-y-16 gap-x-8 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="p-4 w-16 text-white bg-indigo-600 mt-[] " />
              <h3>Sales</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                qui possimus consequatur corrupti laudantium, placeat beatae
                similique architecto doloribus, reiciendis voluptate expedita
                tenetur. Cum eaque voluptate quaerat? Libero, non id.
              </p>
            </div>
            <div>
              <p>
                Contact Us <ArrowSmRightIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

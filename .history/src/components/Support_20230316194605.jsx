import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px">
        <div>
          <img src={supportImg} alt="" />
        </div>
        <div>
          <div>
            <h1>24/7 Support</h1>
            <p>
              Finding the right{" "}
              <span className="text-xl font-medium">SUPPORT TEAM</span>
            </p>
            <p>
              Our support team is available 24/7 to answer any questions you may
              have. We're here to help!
            </p>
          </div>
          <div>
            <div>
              <div>
                <PhoneIcon />
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
    </div>
  );
};

export default Support;

import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the World
          </h2>
          <p className="text-3xl py-6 text-gray-500 font-medium">
            Our platform is used by over 100,000 developers to build and deploy
            their projects
          </p>
        </div>
<div className="grid md:grid-cols-3 gap-1 text-center">

        <div  className="">
          <p>100</p>
          <p>Completion</p>
        </div>
        <div className="">
          <p>24/7</p>
          <p>Delivery</p>
        </div>
        <div className="">
          <p>100K</p>
          <p>Transactions</p>
        </div>
</div>
      </div>
    </div>
  );
};

export default About;

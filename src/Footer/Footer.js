import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex text space-x-6">
        <h6 className="text-white font-extrabold text-6xl headline">
          Case Studies{" "}
        </h6>
        <span className="dot plus font-extrabold text-6xl h-3rem headline">
          {" "}
          +
        </span>
      </div>

      <div className="grid grid-cols-2 gap-7 m-8 items-center pl-8 pr-8 px-8 p-8 border-0">
        <div className="shadow-lg rounded-lg p-5  px-8 m-8 rounded space-x-6">
          <img
            src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b33a295c698a7063367763e_Artboard%202%20Copy.jpg"
            alt=""
          />
        </div>
        <div className="bg-black-300 shadow-lg rounded pl-8 px-8 m-8 space-x-6">
          <img
            src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b33a295c698a7063367763e_Artboard%202%20Copy.jpg"
            alt=""
          />
        </div>
      </div>

      <div className=" md:flex items-center">
        <div className="">
          <img
            className="  "
            src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b33cef6c698a7c2d167a448_Untitled-3.png"
            alt=""
          />
        </div>

        <div className="text items-center ">
          <h1 className="text-blue-600 font-bold text-xl pr-5 ">What next</h1>
          <br />

          <h6 className="text-white font-semibold text-5xl">
            {" "}
            Lets work together!
          </h6>

          <br />
        </div>

        <span>
          <p className="text-white md:ml-170px text-left part ">
            I specialize in building complex web applications, leading front-end
            teams, digital product design and developing visual design systems.
            I enjoy creating effortless user experience and designing delightful
            digital products. The entire process of going from a concept to
            release and gathering user’s feedback on either client’s or my own
            products is what makes me wake up everyday! I worked with numerous
            clients from all around the world from early startups to
            well-established companies. I always seek new opportunities for
            cooperation on projects around interesting dashboards, design
            systems or landing pages. Let’s create something awesome together!
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;

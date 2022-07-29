import React from "react";
import Footer from "../../Footer/Footer";
import "./Career.css";

const Career = () => {
  return (
    <div>
      <div className="lg:flex text space-x-6">
        <h6 className="text-white font-extrabold text-6xl headline">Career </h6>
        <span className="dot plus font-extrabold text-6xl h-3rem headline">
          {" "}
          +
        </span>
      </div>

      <section className="flex">
        <div className="grid md:grid-cols-4 gap-20  items-center projects py-10 px-12 ">
          <div>
            <h1 className="text-white font-medium text-3xl">
              {" "}
              <span className="dot plus font-semibold text-xl h-3rem headline">
                {" "}
                |
              </span>{" "}
              DriveME Fleets
            </h1>

            <h1 className="text-white">Ux Consult/Designer</h1>
            <h1 className="text-white">Mar 2019- Present</h1>
          </div>
          <div>
            <h1 className="text-white font-medium text-3xl">
              {" "}
              <span className="dot plus font-semibold text-xl h-3rem headline">
                {" "}
                |
              </span>{" "}
              Meaningfulgigs
            </h1>

            <h1 className="text-white">Creative Director</h1>
            <h1 className="text-white">Dec 2019- Present</h1>
          </div>
          <div>
            <h1 className="text-white font-medium text-3xl">
              {" "}
              <span className="dot plus font-semibold text-xl h-3rem headline">
                {" "}
                |
              </span>{" "}
              Meaningfulgigs
            </h1>

            <h1 className="text-white"> Creative Director</h1>
            <h1 className="text-white">Dec 2019- Present</h1>
          </div>
          <div>
            <h1 className="text-white font-medium text-3xl">
              {" "}
              <span className="dot plus font-semibold text-xl h-3rem headline">
                {" "}
                |
              </span>{" "}
              Meaningfulgigs
            </h1>

            <h1 className="text-white">Creative Director</h1>
            <h1 className="text-white">Dec 2019- Present</h1>
          </div>
        </div>
      </section>

      <section className="container md:flex items-center md:flex-start content-center bg-black py-20 about-me ">
        <div className="text">
          <h1 className="text-blue-600 font-bold text-xl">About ME</h1>
          <br />

          <h6 className="text-white font-extrabold text-5xl ml-240px w-1/8 ">
            {" "}
            Designing with passion for Problem Solving
          </h6>

          <br />

          <span></span>
        </div>

        <div>
          <span>
            <p className="text-white md:ml-170px text-left part ">
              I’ve always been passionate about pixels and design projects and
              haven’t stopped working and learning about new technologies .
              Other than sitting in from of my display I enjoy myself in casual
              sports, such as bowling or playing football with friends. I'm
              grateful that my job allows me to work from anywhere. I’m active
              on Instagram where I share most of the and all info about my
              upcoming projects. I also like sharing my experiences on instagram
            </p>
          </span>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Career;

import React from "react";
import ProgressBars from "./ProgressBars";
import logo from "./../../../assets/css/pictures/Images/Robert-Portrait.png";

function Body() {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-30 p-20 bg-black bg-opacity-0 bg-white">
        <section className="mb-20 text-center flex-1">
          <div className="p-10 ml-90 mt-5 mb-15">
            <h2 className="text-5xl text-left font-lato-black italic">
              Hello there I am{" "}
            </h2>
            <div className="pl-40">
              <h1 className="text-center font-roboto font-serif font-semibold italic">
                Robert Gasior
              </h1>
              <p className="text-center font-lato-black-italic"> or </p>
              <h1 className="text-center font-roboto font-serif font-semibold italic">
                Robert Gąsior
              </h1>
            </div>
          </div>
          <div className="p-15 w-428 h-862 overflow-hidden rounded-lg inline-block">
            <img src={logo} alt="Your Image" className="w-full h-full object-cover"/>
          </div>
        </section>

        <section className="w-auto">
          <ProgressBars />
        </section>
      </div>
    </>
  );
}

export default Body;

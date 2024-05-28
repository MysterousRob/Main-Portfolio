import React from "react";
import ProgressBars from "./ProgressBars";
import logo from './../../../assets/css/pictures/Images/Robert-Portrait.png'
function Body() {
    return(
        <>
            <div className="flex flex-col items-center justify-center m-30 p-20 bg-black bg-opacity-0">
            <section className="mb-20 text-center flex-1">
        <div className="p-10 ml-90 mt-5 mb-15">
            <h2 className="text-5xl text-left font-lato-black italic">Hello there I am </h2>
            <div className="pl-40">
                <h1 className="text-center font-roboto font-serif font-semibold italic">Robert Gasior</h1>
                <p> or </p>
                <h1 className="text-center font-roboto font-serif font-semibold italic">Robert Gąsior</h1>
            </div>
        </div>
        <div className="image-container">
            <img src={logo} alt="Your Image" />
        </div>
    </section>

    <section className="progress-section">
        <ProgressBars  />
    </section>
            </div>
        </>
    )
}

export default Body;
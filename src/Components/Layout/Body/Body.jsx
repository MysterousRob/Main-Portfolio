import React from "react";
import './Body.css';
import ProgressBars from "./ProgressBars";
import logo from './../../../assets/css/pictures/Images/Robert-Portrait.png'
function Body() {
    return(
        <>
            <div className="home-Body">
            <section className="image-section">
        <div className="text-box">
            <h2>Hello there I am </h2>
            <div className="name-box">
                <h1>Robert Gasior</h1>
                <p> or </p>
                <h1>Robert Gąsior</h1>
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
import React from "react";
import Footer from "../../Components/Layout/Footer/Footer";
import Header from "../../Components/Layout/Header/Header";
import ProfessionalStory from "./partials/ProfessionalStory";
import MyEducation from "./partials/MyEducation";
import PersonalStory from "./partials/PersonalStory";
import ValuesandBeliefs from "./partials/ValuesandBeliefa";
import HobbiesAndInterests from "./partials/Hobbiesandinterests";
function AboutMe() {
    return(
        <>
           <div className="bg-white text-black">
                <Header />
                <div className="m-[15px] p-[10px]">
                    <h1 className="text-black font-bold text-center text-8xl">
                       About Me 
                    </h1>
                </div>
                <div className="m-[15px] p-[10px]">
                    {/* Professional Story */}
                   <ProfessionalStory />
                    {/* my education */}
                    <MyEducation />
                    {/* personal story */}
                    <PersonalStory />
                    {/* values and beliefs */}
                    <ValuesandBeliefs />
                    {/* hobbies and interests  */}
                    <HobbiesAndInterests />
                </div>
                <Footer />
           </div>
        </>
    )
}

export default AboutMe;
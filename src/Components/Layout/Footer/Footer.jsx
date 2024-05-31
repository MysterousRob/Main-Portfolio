import React from "react";
import FooterNav from "./FooterNav";
import MyForm from "../../../Pages/State/ContactForm/Form";
import GitHubLogo from "../../../assets/css/pictures/whitegithublogo.png";
import LinkedinLogo from "../../../assets/css/pictures/icons8-linkedin-96.png";

const Footer = () => {
  return (
    <>
      <div className="h-[300px] bottom-0 left-0 w-full mt-5 pt-2.5 bg-black text-center">
        <h1 className="text-white">Contact Me</h1>
        <div className="flex bg-black items-center justify-center">
          <MyForm />
          <FooterNav /> 
            <div className="absolute bottom-0 right-0 p-[10px] pb-[15px] pr-[100px]">
                    <a href="https://github.com/MysterousRob" className="flex items-center">
            <img src={GitHubLogo} alt="My Github" className="w-20 h-20" /> {/* Adjust sizing as needed */}
                    </a>
                  </div>
                  <div className="absolute bottom-0 right-0 p-2">
                    <a href="https://www.linkedin.com/in/robert-gasior" className="flex items-center">
            <img src={LinkedinLogo} alt="My LinkedIn" className="w-70 h-70" /> {/* Adjust sizing as needed */}
                    </a>
                  </div>
          </div>
      </div>
    </>
  );
};

export default Footer;

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
          <div>
            <a href="https://github.com/MysterousRob">
              <img src={GitHubLogo} alt="My Github" />
            </a>
            {/* not working */}
            <a href="https://www.linkedin.com/in/robert-gasior/">
              <img src={LinkedinLogo} alt="My LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

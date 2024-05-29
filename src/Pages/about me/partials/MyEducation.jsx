import React from "react";

function MyEducation() {
  return (
    <div className="p-[10px]">
      <h2 className="text-black font-bold pl-[50px] text-4xl">My Education</h2>
      <div className="early-edu">
        <h3 className="pl-[80px] text-black font-bold text-2xl">
          Early Education
        </h3>
        <ul className="p-[10px]">
          <li className="pl-[150px]">
            <span className="text-black font-bold">USA:</span> I completed 13
            years of schooling in the USA, building a strong foundational
            education.
          </li>
        </ul>
      </div>
      <div className="high-school">
        <h3 className="pl-[80px] text-black font-bold text-2xl">
          High School in Malta
        </h3>
        <ul className="p-[10px]">
          <li className="pl-[150px]">
            <span className="text-black font-bold">
              Quality Schools International (QSI) Malta:
            </span>{" "}
            After moving to Malta, I attended QSI for four years of high school,
            where I adapted to a new educational system and culture.
          </li>
        </ul>
      </div>
      <div className="pro-training">
        <h3 className="pl-[80px] text-black font-bold text-2xl">
          Professional Training
        </h3>
        <ul className="p-[10px]">
          <li className="pl-[150px]">
            <span className="text-black font-bold">
              Mixology/Bartending Course:
            </span>{" "}
            At 16, I enrolled in a mixology and bartending course. This
            specialized training helped me develop advanced skills in creating
            cocktails and managing bar operations, which became a significant
            part of my professional background.
          </li>
        </ul>
      </div>
      <div className="coding-edu">
        <h3 className="pl-[80px] text-black font-bold text-2xl">
          Coding Education
        </h3>
        <ul className="pl-[150px] pt-[10px] ">
          <li>
            <span className="text-black font-bold">
              Codecademy (November 2023):
            </span>{" "}
            I began my journey into programming by learning to code on
            Codecademy. This platform provided me with the essential knowledge
            and skills in various programming languages and technologies,
            marking the beginning of my career transition into the tech
            industry.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyEducation;

import React from "react";

function ProfessionalStory() {
  return (
    <>
    <div className="p-[10px]">
      <h2 className="text-black font-bold pl-[50px] text-4xl">
        Professional Background
      </h2>
      <div className="hospitality">
        <h3 className="pl-[80px] text-black font-bold text-2xl">
          Hospitality Industry Experience
        </h3>
        <p className="pl-[100px] indent-2">
          I spent five years working in the restaurant industry, gaining a wide
          range of skills and experiences:
        </p>
        <ul className="p-[10px]">
          <li className="pl-[150px]">
            <span className="text-black font-bold">Waiter:</span> Initially
            started as a waiter, where I honed my customer service skills and
            learned the intricacies of the hospitality sector.
          </li>
          <li className="pl-[150px]">
            <span className="text-black font-bold">Bartender:</span> Progressed
            to bartending, mastering the art of mixing drinks and providing
            exceptional service to guests.
          </li>
          <li className="pl-[150px]">
            <span className="text-black font-bold">Mixologist:</span> Eventually
            became a mixologist, responsible for crafting innovative cocktail
            and mocktail menus that delighted patrons and enhanced the
            establishment's reputation.
          </li>
          <li className="pl-[150px]">
            <span className="text-black font-bold">Bar Management:</span> Often
            took on bar management responsibilities in the absence of the main
            manager, ensuring smooth operations and maintaining high standards
            of service.
          </li>
        </ul>
      </div>
      <div className="programming">
        <h3 className="pl-[80px] text-black font-bold text-2xl">
          Transition to Programing
        </h3>
        <p className="pl-[100px] indent-4">
          The transition from hospitality to programming was driven by the
          desire for better pay and enhanced benefits. This motivation led me to
          pursue a new career path in coding:
        </p>
        <ul className="p-[10px]">
          <li className="pl-[150px]">
            <span className="text-black font-bold">
              Self-Taught Programmer:
            </span>
            Began learning to code independently, dedicating significant time
            and effort to mastering programming languages and tools.
          </li>
          <li className="pl-[150px]">
            <span className="text-black font-bold">Motivation:</span> The
            potential for higher earnings and improved work-life balance were
            key factors in my decision to become a programmer.
          </li>
        </ul>
        <p className="pl-[100px] indent-4">
          This diverse background has equipped me with a unique blend of skills,
          from excellent communication and problem-solving abilities developed
          in the hospitality industry to technical proficiency and a strong work
          ethic cultivated through my journey into programming.
        </p>
      </div>
    </div>
    </>
  );
}
 
export default ProfessionalStory;
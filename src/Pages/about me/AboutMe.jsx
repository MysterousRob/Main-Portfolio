import React from "react";
import Footer from "../../Components/Layout/Footer/Footer";
import Header from "../../Components/Layout/Header/Header";
import ProfessionalStory from "./partials/ProfessionalStory";
import MyEducation from "./partials/MyEducation";

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
                   <ProfessionalStory />
                    {/* my education */}
                    <MyEducation />
                    {/* personal story */}
                    <div className="p-[10px]">
                        <h2 className="text-black font-bold pl-[50px] text-4xl">
                            Personal Story
                        </h2>
                        <p className="pl-[100px] indent-7">
                        I was born on November 23, 2003, in Chicago, Illinois, USA, also known as the Windy City. My early childhood was marked by the loss of my mother when I was just three years old. Raised by my grandparents while my father pursued his career in Europe, I grew up in a nurturing environment that balanced both American and Polish cultures. My family hails from Poland, making me Polish-American, and I learned to speak Polish from a young age through Polish school and family interactions.
                        At the age of 14, I moved to Malta to live with my father and attend high school. This move was pivotal, as it not only exposed me to a new culture but also allowed me to improve my Polish language skills through a friendship with a fellow Polish student.
                        When I turned 17, I landed my first job as a runner at a restaurant called Shakinah, where I began my training as a bartender. Discovering a passion for mixology, I pursued formal training at a trade school and eventually became a mixologist at Shakinah. However, seeking better pay, I transitioned to The Hatters Pub. There, I took on more responsibilities, often managing the bar in the absence of the main manager.
                        Encouraged by my father to explore a career in programming, I began teaching myself to code in November 2023. Using platforms like Codecademy, I learned HTML, CSS, JavaScript, React, and more. This new path has been both challenging and rewarding, and I continue to develop my skills in the tech field to this day.
                        These experiences have shaped me into a resilient and adaptable individual, blending the rich cultural heritage of my Polish-American background with the technical skills and creativity of both the hospitality and tech industries.
                        </p>
                    </div>
                    <div className="p-[10px]">
                        <h2 className="text-black font-bold pl-[50px] text-4xl">
                            Values and Beliefs
                        </h2>
                        <p className="pl-[100px] indent-4">
                            My approach to coding is guided by a strong set of values that not only shape my work but also define my professional ethos:
                        </p>
                        <ul className="p-[10px]">
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Creativity:</span> I am driven by the opportunity to create compelling and user-friendly websites that leave a lasting impact on users.
                                </li>                            
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Accountability:</span> I believe in taking ownership of my work and ensuring that every project I undertake meets high standards of quality and reliability.
                                </li>
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Autonomy:</span> I value the freedom to explore new ideas and approaches, fostering innovation and continuous improvement in my coding practices.
                                </li>
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Respect:</span> Respect forms the foundation of my interactions with colleagues and clients, fostering collaboration and mutual understanding.
                                </li>
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Kindness:</span> I believe in approaching challenges with empathy and consideration, creating a supportive and positive work environment.
                                </li>
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Personal Growth:</span> Continuous learning and development are central to my career journey, as I strive to expand my skills and knowledge in coding and beyond.
                                </li>
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Motivation to Grow and Learn:</span> I am driven by a relentless curiosity and a passion for acquiring new skills, ensuring I stay at the forefront of technological advancements.
                                </li>
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Acceptance:</span> Embracing diversity and inclusively is fundamental to my values, recognizing the strength that different perspectives bring to creative endeavors.
                                </li>
                                <li className="pl-[150px]">
                                    <span className="text-black font-bold">Community:</span> I believe in contributing positively to the tech community, sharing knowledge and experiences to foster collective growth and success.       
                                </li>                            
                        </ul>
                        <p className="pl-[100px] indent-4">
                        These values not only guide my approach to coding but also reflect my commitment to creating meaningful and impactful experiences for users while continually evolving as a professional.
                        </p>
                    </div>
                    <div className="p-[10px]">
                        <h2 className="text-black font-bold pl-[50px] text-4xl">
                            Hobbies and Interests
                        </h2>
                        <p className="pl-[100px] indent-4">
                            My hobbies and interests play a significant role in shaping who I am. Here are a few that are particularly important to me:
                        </p>
                        <ul className="p-[10px]">
                            <li className="pl-[150px]">
                                <span className="text-black font-bold">Golfing:</span> I enjoy spending time on the golf course, which not only allows me to stay active but also provides a great way to relax and unwind. Golfing helps me improve my concentration and patience, skills that are beneficial in both personal and professional settings.
                            </li>
                            <li className="pl-[150px]">
                                <span className="text-black font-bold">Gaming:</span> Gaming is another passion of mine. It offers a perfect balance of challenge and entertainment, helping me develop strategic thinking and problem-solving skills. Whether it’s a quick game to unwind or a long session with friends, gaming keeps me engaged and sharp.
                            </li>
                        </ul>
                        <p className="pl-[100px] indent-4">
                            Although my list of hobbies may seem short, these activities are integral to my lifestyle and personal growth, contributing significantly to my overall well-being and shaping the person I am today.
                        </p>
                    </div>
                </div>
                <Footer />
           </div>
        </>
    )
}

export default AboutMe;
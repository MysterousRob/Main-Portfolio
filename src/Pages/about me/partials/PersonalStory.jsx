import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

function PersonalStory() {
  return (
    <Disclosure className="bg-white">
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-2 bg-white">
            Personal Story
            <ChevronDownIcon className={clsx('w-5', open && 'rotate-180')} />
          </DisclosureButton>
          <DisclosurePanel className="pl-[40px] py-[15px] indent-7">
          I was born on November 23, 2003, in Chicago, Illinois, USA, also known
        as the Windy City. My early childhood was marked by the loss  of my
        mother when I was just three years old. Raised by my grandparents while
        my father pursued his career in Europe, I grew up in a nurturing
        environment that balanced both American and Polish cultures. My family
        hails from Poland, making me Polish-American, and I learned to speak
        Polish from a young age through Polish school and family interactions.
        At the age of 14, I moved to Malta to live with my father and attend
        high school. This move was pivotal, as it not only exposed me to a new
        culture but also allowed me to improve my Polish language skills through
        a friendship with a fellow Polish student. When I turned 17, I landed my
        first job as a runner at a restaurant called Shakinah, where I began my
        training as a bartender. Discovering a passion for mixology, I pursued
        formal training at a trade school and eventually became a mixologist at
        Shakinah. However, seeking better pay, I transitioned to The Hatters
        Pub. There, I took on more responsibilities, often managing the bar in
        the absence of the main manager. Encouraged by my father to explore a
        career in programming, I began teaching myself to code in November 2023.
        Using platforms like Codecademy, I learned HTML, CSS, JavaScript, React,
        and more. This new path has been both challenging and rewarding, and I
        continue to develop my skills in the tech field to this day. These
        experiences have shaped me into a resilient and adaptable individual,
        blending the rich cultural heritage of my Polish-American background
        with the technical skills and creativity of both the hospitality and
        tech industries.
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default PersonalStory;

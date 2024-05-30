import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

function ValuesandBeliefs() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-2 bg-white">
            <h2 className="text-black font-bold pl-[50px] text-4xl">
              Values and Beliefs
            </h2>
            <ChevronDownIcon className={clsx("w-5", open && "rotate-180")} />
          </DisclosureButton>
          <DisclosurePanel>
            <p className="pl-[100px] indent-4">
              My approach to coding is guided by a strong set of values that not
              only shape my work but also define my professional ethos:
            </p>
          </DisclosurePanel>
          <DisclosurePanel>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">Creativity:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      I am driven by the opportunity to create compelling and
                      user-friendly websites that leave a lasting impact on
                      users.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[190px]">
                      <span className="text-black font-bold">
                        Accountability:
                      </span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      I believe in taking ownership of my work and ensuring that
                      every project I undertake meets high standards of quality
                      and reliability.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">Autonomy:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      I value the freedom to explore new ideas and approaches,
                      fostering innovation and continuous improvement in my
                      coding practices.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">Respect:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      Respect forms the foundation of my interactions with
                      colleagues and clients, fostering collaboration and mutual
                      understanding.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">Kindness:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      I believe in approaching challenges with empathy and
                      consideration, creating a supportive and positive work
                      environment.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">
                        Personal Growth:
                      </span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      Continuous learning and development are central to my
                      career journey, as I strive to expand my skills and
                      knowledge in coding and beyond.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">
                        Motivation to Grow and Learn:
                      </span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      I am driven by a relentless curiosity and a passion for
                      acquiring new skills, ensuring I stay at the forefront of
                      technological advancements.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">Acceptance:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      Embracing diversity and inclusively is fundamental to my
                      values, recognizing the strength that different
                      perspectives bring to creative endeavors.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">Community:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      I believe in contributing positively to the tech
                      community, sharing knowledge and experiences to foster
                      collective growth and success.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel>
            <p className="pl-[100px] indent-4">
              These values not only guide my approach to coding but also reflect
              my commitment to creating meaningful and impactful experiences for
              users while continually evolving as a professional.
            </p>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default ValuesandBeliefs;

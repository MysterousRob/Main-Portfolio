import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

function HobbiesAndInterests() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-2 bg-white">
            <h2 className="text-black font-bold pl-[50px] text-4xl">
              Hobbies and Interests
            </h2>
            <ChevronDownIcon className={clsx("w-5", open && "rotate-180")} />
          </DisclosureButton>
          <DisclosurePanel>
            <p className="pl-[100px] indent-4 pb-[20px]">
              My hobbies and interests play a significant role in shaping who I
              am. Here are a few that are particularly important to me:
            </p>
          </DisclosurePanel>
          <DisclosurePanel>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <li className="pl-[150px]">
                      <span className="text-black font-bold">Golfing:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      I enjoy spending time on the golf course, which not only
                      allows me to stay active but also provides a great way to
                      relax and unwind. Golfing helps me improve my
                      concentration and patience, skills that are beneficial in
                      both personal and professional settings.
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
                      <span className="text-black font-bold">Gaming:</span>
                    </li>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <li className="pl-[190px]">
                      Gaming is another passion of mine. It offers a perfect
                      balance of challenge and entertainment, helping me develop
                      strategic thinking and problem-solving skills. Whether
                      it’s a quick game to unwind or a long session with
                      friends, gaming keeps me engaged and sharp.
                    </li>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel>
            <p className="pl-[100px] indent-4 pt-[20px]">
              Although my list of hobbies may seem short, these activities are
              integral to my lifestyle and personal growth, contributing
              significantly to my overall well-being and shaping the person I am
              today.
            </p>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default HobbiesAndInterests;

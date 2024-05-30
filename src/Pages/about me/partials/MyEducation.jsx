import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

function MyEducation() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-2 bg-white">
            <h2 className="text-black font-bold pl-[50px] text-4xl">
              My Education
            </h2>
            <ChevronDownIcon className={clsx("w-5", open && "rotate-180")} />
          </DisclosureButton>
          <DisclosurePanel>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <h3 className="pl-[80px] text-black font-bold text-2xl">
                      Early Education
                    </h3>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2 bg-white">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">USA:</span>
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              I completed 13 years of schooling in the USA,
                              building a strong foundational education.
                            </li>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <h3 className="pl-[80px] text-black font-bold text-2xl">
                      High School in Malta
                    </h3>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2 bg-white">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">
                                Quality Schools International (QSI) Malta:
                              </span>
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              After moving to Malta, I attended QSI for four
                              years of high school, where I adapted to a new
                              educational system and culture.
                            </li>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <h3 className="pl-[80px] text-black font-bold text-2xl">
                      Professional Training
                    </h3>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2 bg-white">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">
                                Mixology/Bartending Course:
                              </span>
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              At 16, I enrolled in a mixology and bartending
                              course. This specialized training helped me
                              develop advanced skills in creating cocktails and
                              managing bar operations, which became a
                              significant part of my professional background.
                            </li>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2 bg-white">
                    <h3 className="pl-[80px] text-black font-bold text-2xl">
                      Coding Education
                    </h3>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2 bg-white">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">
                                Codecademy (November 2023):
                              </span>{" "}
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              I began my journey into programming by learning to
                              code on Codecademy. This platform provided me with
                              the essential knowledge and skills in various
                              programming languages and technologies, marking
                              the beginning of my career transition into the
                              tech industry.
                            </li>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default MyEducation;

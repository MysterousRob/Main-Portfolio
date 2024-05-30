import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

function ProfessionalStory() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-2">
            <h2 className="text-black font-bold pl-[50px] text-4xl">
              Professional Background
            </h2>
            <ChevronDownIcon className={clsx("w-5", open && "rotate-180")} />
          </DisclosureButton>
          <DisclosurePanel>
            <Disclosure>
              {({ open: innerOpen }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2">
                    <h3 className="pl-[80px] text-black font-bold text-2xl">
                      Hospitality Industry Experience
                    </h3>
                    <ChevronDownIcon
                      className={clsx("w-5", innerOpen && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    {" "}
                    <p className="pl-[100px] indent-2">
                      I spent five years working in the restaurant industry,
                      gaining a wide range of skills and experiences:
                    </p>
                  </DisclosurePanel>
                  <DisclosurePanel>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">
                                Waiter:
                              </span>
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              Initially started as a waiter, where I honed my
                              customer service skills and learned the
                              intricacies of the hospitality sector.
                            </li>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">
                                Bartender:
                              </span>
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              Progressed to bartending, mastering the art of
                              mixing drinks and providing exceptional service to
                              guests.
                            </li>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">
                                Mixologist:
                              </span>
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              Eventually became a mixologist, responsible for
                              crafting innovative cocktail and mocktail menus
                              that delighted patrons and enhanced the
                              establishment's reputation.
                            </li>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center gap-2">
                            <li className="pl-[150px]">
                              <span className="text-black font-bold">
                                Bar Management:
                              </span>
                            </li>
                            <ChevronDownIcon
                              className={clsx("w-5", open && "rotate-180")}
                            />
                          </DisclosureButton>
                          <DisclosurePanel>
                            <li className="pl-[190px]">
                              Often took on bar management responsibilities in
                              the absence of the main manager, ensuring smooth
                              operations and maintaining high standards of
                              service.
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
                  <DisclosureButton className="flex items-center gap-2">
                    <h3 className="pl-[80px] text-black font-bold text-2xl">
                      Transition to Programing
                    </h3>
                    <ChevronDownIcon
                      className={clsx("w-5", open && "rotate-180")}
                    />
                  </DisclosureButton>
                  <DisclosurePanel></DisclosurePanel>
                </>
              )}
            </Disclosure>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default ProfessionalStory;

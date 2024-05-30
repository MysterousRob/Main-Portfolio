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
                  <DisclosurePanel>No</DisclosurePanel>
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
                  <DisclosurePanel>
                    
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

export default ProfessionalStory;

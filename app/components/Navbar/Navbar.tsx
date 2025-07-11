import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
  name: string;
  href: string;
}

const mainLinks: NavigationItem[] = [
  { name: "Resume Samples", href: "pages/resume-samples" },
  { name: "About", href: "pages/about" },
  { name: "Contact", href: "pages/contact" },
];

const legalLinks: NavigationItem[] = [
  { name: "Privacy Policy", href: "pages/privacy-policy" },
  { name: "Terms", href: "pages/terms" },
  { name: "Disclaimer", href: "pages/disclaimer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-12 w-40 lg:hidden"
                  src="/assets/logo/logo.svg"
                  alt="makemycv-logo"
                />
                <img
                  className="hidden h-full w-full lg:block"
                  src="/assets/logo/logo.svg"
                  alt="makemycv-logo"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:block ml-20">
                <div className="flex space-x-6 items-center">
                  {mainLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-black hover:opacity-75 px-3 py-4 text-lg font-normal space-links"
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Legal Dropdown */}
                  <div className="relative group">
                    <button className="text-black px-3 py-4 text-lg font-normal hover:opacity-75">
                      Legal
                    </button>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 z-50 w-56">
                      <ul className="py-2">
                        {legalLinks.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signin / Register */}
            <Signdialog />
            <Registerdialog />

            {/* Mobile Menu Icon */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 cursor-pointer"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;

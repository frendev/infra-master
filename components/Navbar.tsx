import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiPhone, BiBook, BiBookOpen } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';

import DesktopLink from './DesktopNavLink';
import MobileNavLink from './MobileNavLink';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    // Desktop Menu
    <>
      <div
        onClick={mobileMenuHandler}
        className={
          mobileMenu
            ? 'fixed h-screen left-0 right-0 bottom-0 bg-black/50 z-[49]'
            : 'd-none'
        }
      />
      <div
        id="/"
        className="fixed left-0 top-0 w-full shadow-xl z-[49] opacity-100 bg-white"
      >
        <div className="flex justify-between items-center w-full px-4 2xl:px-16">
          {/* This div is for logo */}
          <Link href="/">
            <div className="flex justify-center">
              <Image
                className="cursor-pointer items-center"
                src="/assets/logo.png"
                alt="inframaster"
                width="250"
                height="80"
                objectFit="contain"
                priority
              />
            </div>
          </Link>

          {/* This div is for desktop menu's links */}

          <ul className="hidden lg:flex text-lg">
            <DesktopLink hrefAttr="/" linkText="Home">
              <AiOutlineHome className="mr-2" size={30}></AiOutlineHome>
            </DesktopLink>
            <DesktopLink hrefAttr="/#about" linkText="About Us">
              <MdPeopleOutline className="mr-2" size={30}></MdPeopleOutline>
            </DesktopLink>
            <DesktopLink hrefAttr="/#contact" linkText="Contact Us">
              <BiPhone className="mr-2" size={30}></BiPhone>
            </DesktopLink>
            <DesktopLink hrefAttr="/courses" linkText="Courses">
              <BiBookOpen className="mr-2" size={30}></BiBookOpen>
            </DesktopLink>
            {/* <DesktopLink hrefAttr="/blogs" linkText="Blogs">
              <BiBook className="mr-2" size={30}></BiBook>
            </DesktopLink> */}
            {/*<DesktopLink hrefAttr="/testimonials" linkText="Testimonials">
              <FaQuoteLeft className="mr-2" size={30}></FaQuoteLeft>
            </DesktopLink> */}
          </ul>

          {/* This div is for mobile menu's divs */}
          {/* {Mobile Menu Close and Open Icon} */}
          <div
            onClick={mobileMenuHandler}
            className="cursor-pointer block lg:hidden z-10"
          >
            {mobileMenu ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} className="text-black" />
            )}
          </div>

          {/* Mobile Menu */}

          <div
            className={
              mobileMenu
                ? 'lg:hidden text-lg absolute top-0 right-0 bottom-0 flex justify-center items-center w-1/2 h-screen bg-gradient-to-r from-white to-slate-200 text-center transition duration-300'
                : 'lg:hidden text-lg absolute top-0 right-0 bottom-0 flex justify-center items-center w-1/2 h-screen text-center translate-x-full bg-gradient-to-r from-white to-slate-200 text-white transition duration-300'
            }
          >
            <ul>
              <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/"
                linkText="Home"
              >
                <AiOutlineHome className="mr-2" size={30}></AiOutlineHome>
              </MobileNavLink>
              <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/#about"
                linkText="About Us"
              >
                <MdPeopleOutline className="mr-2" size={30}></MdPeopleOutline>
              </MobileNavLink>

              <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/#contact"
                linkText="Contact Us"
              >
                <BiPhone className="mr-2" size={30}></BiPhone>
              </MobileNavLink>

              <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/courses"
                linkText="Courses"
              >
                <BiBookOpen className="mr-2" size={30}></BiBookOpen>
              </MobileNavLink>

              {/* <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/blogs"
                linkText="Blogs"
              >
                <BiBook className="mr-2" size={30}></BiBook>
              </MobileNavLink> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

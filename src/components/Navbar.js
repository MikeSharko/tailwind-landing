import React from 'react'
import logo from '../img/braintech-logo.png'
const Navbar = () => {
    const url = ''
  return (
    <div>
      {/* Navbar   */}
      <nav className="relative container mx-auto p-6">
        {/* FLEX CONTAINER */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="pb-2 w-36">
            <img src={logo} alt="" />
          </div>
          {/* MENU ITEMS */}
          <div className="hidden space-x-6 md:flex">
            <a href={url} className="hover:text-gray-500">
              Pricing
            </a>
            <a href={url} className="hover:text-gray-500">
              Product
            </a>
            <a href={url} className="hover:text-gray-500">
              About Us
            </a>
            <a href={url} className="hover:text-gray-500">
              Careers
            </a>
            <a href={url} className="hover:text-gray-500">
              Community
            </a>
          </div>
          {/* BUTTON */}
          <div>
            <button className="p-3 px-6 pt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded md:block">
              Get Started
            </button>
          </div>

          {/* HAMBURGER ICON */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href={url}>Pricing</a>
            <a href={url}>Product</a>
            <a href={url}>About Us</a>
            <a href={url}>Careers</a>
            <a href={url}>Community</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
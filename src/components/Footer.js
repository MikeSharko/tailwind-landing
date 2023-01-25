import React from "react";
import facebook from '../img/icon-facebook.svg'
import youtube from '../img/icon-youtube.svg'
import twitter from '../img/icon-twitter.svg'
import  pinterest from '../img/icon-pinterest.svg'
import instagram from '../img/icon-instagram.svg'
import logo from '../img/braintech-logo.png'

const Footer = () => {
  
  const url = ''
  
    return (
    <div>
      {/* Footer  */}
      <footer className="bg-stone-800">
        {/* Flex Container  */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* Logo  */}
            {/* <div>
              <img src={logo} className="h-8" alt="" />
            </div> */}
            {/* Social Links Container  */}
            <div className="flex justify-center space-x-4">
              {/* Link 1  */}
              <a href={url}>
                <img src={facebook} alt="" className="h-8" />
              </a>
              {/* Link 2  */}
              <a href={url}>
                <img src={youtube} alt="" className="h-8" />
              </a>

              <a href={url}>
                <img src={twitter} alt="" className="h-8" />
              </a>

              <a href={url}>
                <img src={pinterest} alt="" className="h-8" />
              </a>

              <a href={url}>
                <img src={instagram} alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* List Container  */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href={url} className="hover:text-stone-400">
                Home
              </a>
              <a href={url} className="hover:text-stone-400">
                Pricing
              </a>
              <a href={url} className="hover:text-stone-400">
                Products
              </a>
              <a href={url} className="hover:text-stone-400">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href={url} className="hover:text-stone-400">
                Careers
              </a>
              <a href={url} className="hover:text-stone-400">
                Community
              </a>
              <a href={url} className="hover:text-stone-400">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Our newspaper"
                />
                <button className="px-6 py-2 text-white rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

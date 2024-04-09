import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Sing in",
      link: "/",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-orange-700 lg:px-24 md:px-16 sm:px-14 px-12 py-1 shadow-md border-b border-black">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo section */}
             <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmEQQEy6dL1pVbY3twD5EeZVfvkJ91l012txe70xF&s" alt="" />
              {/* Toggle button section  (we will do it later) */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-black text-base tracking-wider hover:text-gray-200 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <button className="bg-black text-base text-white px-7  rounded-2xl lg:ml-10 md:ml-6 sm:ml-0 ml-0">
              Start Writting
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
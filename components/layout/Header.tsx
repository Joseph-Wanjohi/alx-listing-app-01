// components/layout/Header.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Apartments",
    "Villas",
    "Beachfront",
    "Cabins",
    "Luxury",
    "Amazing Views"
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <Image src="/assets/logos/alx-logo.svg" alt="Logo" width={32} height={32} className="h-8 w-auto mr-2" />
              {/* <span className="text-xl font-bold text-gray-800">YourBrand</span> */}
            </a>
          </Link>
        </div>

        {/* Accommodation Types */}
        {/* <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
          {accommodationTypes.map((type) => (
            <Link key={type} href={`/accommodations/${type.toLowerCase()}`} legacyBehavior>
              <a className="mx-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
                {type}
              </a>
            </Link>
          ))}
        </nav> */}

        {/* Search Bar & Auth Buttons */}
        <div className="flex items-center space-x-4 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              🔍
            </button>
          </div>

          {/* Sign In */}
          <Link href="/signin" legacyBehavior>
            <a className="text-sm bg-[#34967C] py-2 px-4 text-white rounded-full hover:text-gray-900 ">Sign In</a>
          </Link>

          {/* Sign Up */}
          <Link href="/signup" legacyBehavior>
            <a className="text-sm bg-white border-1 border-[#ECECEC] text-black py-2 px-4 rounded-full hover:bg-[#34967C] hover:text-white transition-colors duration-200">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

// components/layout/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

// (1) the top banner message
const TopBanner: React.FC = () => (
  <div className="bg-[#34967C] text-white text-sm flex justify-center items-center h-8">
    <span className="mx-2">✈️ Overseas trip? Get the latest information on travel guides</span>
    <button className="bg-white text-[#34967C] text-xs px-3 py-1 rounded-full hover:bg-black hover:text-white transition">
      More Info
    </button>
  </div>
);

// (2) the main nav bar with logo, search inputs, auth buttons
const MainNav: React.FC = () => (
  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
      {/* Logo */}
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          <Image
            src="/assets/logos/alx-logo.svg"
            alt="ALX logo"
            width={32}
            height={32}
          />
        </a>
      </Link>

      {/* Search fields */}
      <div className="flex mx-8 fit-content  space-x-2 border border-gray-200 rounded-full overflow-hidden">
        <div className="flex flex-col justify-center">
          <span className="text-base font-semibold text-black px-4 pt-2">Location</span>
          <input
            className="flex-1 px-4 pb-2 text-sm placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Search destinations"
          />
        </div>
        <div className="flex flex-col justify-center border-l border-gray-200">
          <span className="text-base font-semibold text-black px-4 pt-2">Check In</span>
          <input
          className="w-36 px-4 pb-2 text-sm placeholder-gray-500 focus:outline-none"
          type="date"
        />
        </div>
        <div className="flex flex-col justify-center border-l border-gray-200">
          <span className="text-base font-semibold text-black px-4 pt-2">Check In</span>
          <input
          className="w-36 px-4 pb-2 text-sm placeholder-gray-500 focus:outline-none"
          type="date"
        />
        </div>
        <div className="flex flex-col justify-center border-l border-gray-200 w-full">
          <span className="text-base font-semibold text-black px-4 pt-2">People</span>
          <input
            className="w-30 px-4 pb-2 text-sm placeholder-gray-500 focus:outline-none"
            type="number"
            placeholder="Add Guests"
            min={1}
          />
        </div>
        <button className="bg-[#FFA800] mt-1 mb-1 mr-1 ml-1 px-5 flex items-center justify-center rounded-full">
          <Image
            src="/assets/icons/Linear/Search/Magnifer.svg"
            alt="Search Icon"
            width={48}
            height={48}
          />
        </button>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/signin" legacyBehavior>
          <a className="text-sm text-gray-700 hover:text-gray-900">Sign In</a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="text-sm bg-white border border-[#ECECEC] text-gray-800 px-4 py-2 rounded-full hover:bg-[#34967C] hover:text-white transition">
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  </div>
);

// (3) the icon‑list row
const CategoriesRow: React.FC = () => {
  const icons = [
    { label: "Rooms",   src: "/assets/logos/living-room-1.svg" },
    { label: "Mansion", src: "/assets/logos/mansion-1.svg" },
    { label: "Countryside", src: "/assets/logos/farm-1.svg" },
    { label: "Villa", src: "/assets/logos/villa-1.svg" },
    { label: "Tropical", src: "/assets/logos/palm-tree-1.svg" },
    { label: "New", src: "/assets/logos/key-chain-1.svg" },
    { label: "Amazing pool", src: "/assets/logos/swimming-pool-1.svg" },
    { label: "Beach House", src: "/assets/logos/vacations-1.svg" },
    { label: "Island", src: "/assets/logos/palm-tree-1.svg" },
    { label: "Camping", src: "/assets/logos/tent-1.svg" },
    { label: "Apartment", src: "/assets/logos/apartment-1.svg" },
    { label: "House", src: "/assets/logos/home-1.svg" },
    { label: "Lakefront", src: "/assets/logos/cottage-1.svg" },
    { label: "Farmhouse", src: "/assets/logos/barn-1.svg" },
    { label: "Treehouse", src: "/assets/logos/treehouse-1-1.svg" },
    { label: "Cabins", src: "/assets/logos/cabin-1.svg" },
    { label: "Castle", src: "/assets/logos/castle-tower-1.svg" }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-x-auto hide-scrollbar">
        <div className="flex space-x-8 py-3 px-6">
          {icons.map((item) => (
            <button
              key={item.label}
              className="group shrink-0 flex flex-col items-center px-2"
            >
              {/* Icon with scale-on-hover */}
              <div className="relative w-8 h-8 transition-transform duration-200 group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={item.label}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Label that goes bold on hover */}
              <span className="mt-1 text-xs text-gray-600 transition-all duration-200 group-hover:font-bold group-hover:text-gray-900">
                {item.label}
              </span>

              {/* Underline that grows on hover */}
              <span className="block w-0 h-0.5 bg-gray-900 mt-1 transition-all duration-200 group-hover:w-10" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 w-full z-50">
    <TopBanner />
    <MainNav />
    <CategoriesRow />
  </header>
)

export default Header;

// const Header: React.FC = () => {
//   const accommodationTypes = [
//     "Rooms",
//     "Mansion",
//     "Countryside",
//     "Apartments",
//     "Villas",
//     "Beachfront",
//     "Cabins",
//     "Luxury",
//     "Amazing Views"
//   ];

//   return (
//     <header className="bg-white shadow-md py-4 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center mb-4 md:mb-0">
//           <Link href="/" legacyBehavior>
//             <a className="flex items-center">
//               <Image src="/assets/logos/alx-logo.svg" alt="Logo" width={32} height={32} className="h-8 w-auto mr-2" />
//               {/* <span className="text-xl font-bold text-gray-800">YourBrand</span> */}
//             </a>
//           </Link>
//         </div>

//         {/* Accommodation Types */}
//         {/* <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
//           {accommodationTypes.map((type) => (
//             <Link key={type} href={`/accommodations/${type.toLowerCase()}`} legacyBehavior>
//               <a className="mx-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
//                 {type}
//               </a>
//             </Link>
//           ))}
//         </nav> */}

//         {/* Search Bar & Auth Buttons */}
//         <div className="flex items-center space-x-4 w-full md:w-auto">
//           {/* Search Bar */}
//           <div className="relative w-full md:w-64">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
//               🔍
//             </button>
//           </div>

//           {/* Sign In */}
//           <Link href="/signin" legacyBehavior>
//             <a className="text-sm bg-[#34967C] py-2 px-4 text-white rounded-full hover:text-gray-900 ">Sign In</a>
//           </Link>

//           {/* Sign Up */}
//           <Link href="/signup" legacyBehavior>
//             <a className="text-sm bg-white border-1 border-[#ECECEC] text-black py-2 px-4 rounded-full hover:bg-[#34967C] hover:text-white transition-colors duration-200">
//               Sign Up
//             </a>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };
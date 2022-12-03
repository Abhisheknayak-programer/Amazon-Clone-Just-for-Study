import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/Bs";
import { HiOutlineShoppingCart, HiMenu } from "react-icons/hi";

const Header = () => (
  <header>
    {/* TOP NAV*/}
    <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
      {/* LEFT PART || LOGO PART */}
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>

      {/* SEARCH PART || MIDDLE NAV PART*/}
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
        <input
          type="text"
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
        />
        <span className="h-12 p-4">
          <BsSearch />
        </span>
      </div>

      {/* RIGHT SIDE NAV || CART PART */}
      <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
        <div className="link">
          <p>Hello Abhishek Nayak</p>
          <p className="font-bold md:text-sm">Account & Lists</p>
        </div>
        <div className="link">
          <p>Returns</p>
          <p className="font-bold md:text-sm">& Orders</p>
        </div>
        <div className="relative link flex items-center">
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
            0
          </span>
          <HiOutlineShoppingCart className="text-3xl" />
          <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
        </div>
      </div>
    </div>

    {/* BOTTOM NAV*/}
    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
      <p className="link flex items-center">
        <HiMenu className="h-6 mr-1" />
        All
      </p>

      <p className="link hidden lg:inline-flex">Amazon miniTV</p>
      <p className="link">Best Sellers</p>
      <p className="link">Mobiles</p>
      <p className="link">Today's Deals</p>
      <p className="link hidden lg:inline-flex">Customer Service</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link">Prime</p>
      <p className="link hidden lg:inline-flex">Home & Kitchen</p>
      <p className="link hidden lg:inline-flex">Fashion</p>
      <p className="link hidden lg:inline-flex">New Releases</p>
    </div>
  </header>
);

export default Header;

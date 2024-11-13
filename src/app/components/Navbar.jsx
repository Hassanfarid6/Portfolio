// "use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { TypeAnimation } from 'react-type-animation';


  const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between mx-auto ">
            <Link href={"/"} className="text-5xl text-white font-semibold">
            Logo
            </Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul>
                    <li>
                        <Link href={"#about"} className="block py-2 pl-3 pr-4 text-[#ADB7BE]">About</Link>
                    </li>
                </ul>
            </div>
      
    </div>
  );
};

export default Navbar;
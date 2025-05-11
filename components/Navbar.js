'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname()
  const showNavbar = ["/", "/generate"].includes(pathname)
  return (
   <>{showNavbar && <nav className="bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full p-1 px-7">
      <div className="logo flex gap-20 items-center ">
        <Link href={"/"}>
          <img className="h-8" src="./logo.svg" alt="" />
        </Link>

        <ul className="flex gap-8 ">
          <Link href={"/"}>
            <li className="font-bold text-lg">Products</li>
          </Link>
          <Link href={"/"}>
            <li className="font-bold text-lg">Templates</li>
          </Link>
          <Link href={"/"}>
            <li className="font-bold text-lg">Marketplace</li>
          </Link>
          <Link href={"/"}>
            <li className="font-bold text-lg">Learn</li>{" "}
          </Link>
          <Link href={"/"}>
            <li className="font-bold text-lg">Pricing</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2 ">
        <button className="login cursor-pointer font-bold text-lg bg-gray-200 m-3.5 px-6 py-2 rounded-lg ">
          Log in
        </button>
        <button
          type="button"
          className="text-white cursor-pointer text-lg font-bold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full  p-7 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Sign up free
        </button>
      </div>
    </nav> }</>
  );
};

export default Navbar;

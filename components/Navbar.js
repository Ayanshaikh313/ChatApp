"use client"
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { useUser } from "@clerk/nextjs";
const Navbar = () => {
return (
    <div className="color text-black w-screen h-auto">
      <nav className="sm:w-full sm:h-auto">
        <div className="flex h-16 items-center justify-between text-black">
          <div className="flex items-center">
            <div className="shrink-0">
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-black gap-96 ">
                <div className="">
                  <span className="flex items-center gap-3"><h3 className="font-semibold text-lg text-white">ChatSync</h3><img className="rounded-full" width={50}  src="/Logo.jpeg" alt="chatlogo" /></span>

                </div>

                <ul className="flex space-x-4 text-black">
                
                    <li>
                <Link
                  href="/chat"
                  className="rounded-md bg-gray-900 px-3 py-2 text-base font-medium  text-white shadow-md"
                  aria-current="page"
                >
                    UserChat
                </Link>
                </li>
                <li>
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-base font-medium text-gray-700   hover:bg-gray-700 hover:text-white"
                >
                  Home
                </Link>
                </li>
                <li>
                <Link
                    href="/forums"
                    className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                >
                  Forum
                </Link>
                </li>
                <li>
                <Link
                  href="/calendar"
                  className="rounded-md px-3 py-2 text-base font-medium text-gray-700  hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </Link>
                </li>
                <li className=" "><UserButton/></li>
                </ul>
                
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 justify-center">

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 font-bold text-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/forums"
              className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:bg-gray-700 hover:text-white"
            >
              Forum
            </Link>
            <Link
              href="/projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/calendar"
              className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </Link>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <UserButton />
              </div>
              <div className="ml-3">
                <div className="text-base/5 font-medium text-white">
                  Tom Cook
                </div>
                <div className="text-sm font-medium text-gray-400">
                  
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

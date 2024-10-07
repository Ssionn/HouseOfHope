"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navlink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`w-full px-4 py-2 rounded ${
          isActive ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]"
        } ${className}`}
      >
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default function Sidebar() {
  // State to control sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Toggle function with functional state update
  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <>
      {/* Sidebar */}

      <button
          className="fixed top-4 left-4 z-10 bg-gray-300 rounded p-2"
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
        >
          {/* SVG Icon */}
          <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M20 12h-13l3 -3m0 6l-3 -3" />
          </svg>
        </button>

      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r rounded-br-lg overflow-auto z-40 transform transition-transform duration-300 z-50 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full p-2">
          <div className="flex flex-row justify-center items-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={64}
                height={64}
                alt="House of Hope"
              />
            </Link>
            {/* Toggle Sidebar Button */}
            <button
              className="z-50 bg-gray-300 rounded p-2 ml-12"
              onClick={toggleSidebar}
              aria-label="Close Sidebar"
            >
              {/* SVG Icon */}
              <svg
                className="h-8 w-8 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
              </svg>
            </button>
          </div>
          <div className="mt-12">
            <div className="flex flex-col space-y-2">
              <Navlink href="/dashboard">Dashboard</Navlink>
              <Navlink href="/dashboard/teams">Teams</Navlink>
            </div>
            <hr className="px-2 mt-2 bg-[#F5F5F5]" />
            <Navlink href="/dashboard/faq" className="mt-2">
              Help/FAQ
            </Navlink>
          </div>
          <div className="absolute bottom-0 mb-4 w-56">
            <Navlink href="/dashboard/settings">Account Settings</Navlink>
          </div>
        </div>
      </div>
    </>
  );
}

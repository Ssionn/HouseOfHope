"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navlink from '@/components/Navlink';
import { FaHouse, FaUsers } from 'react-icons/fa6';

export default function Sidebar() {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setCollapsed(true);
        setIsSidebarVisible(false); // Hide sidebar when screen is small
      } else {
        setCollapsed(false);
        setIsSidebarVisible(true); // Show sidebar when screen is larger
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once initially to set the state correctly

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {!isCollapsed && (
        <div
          className={`fixed top-0 left-0 h-full w-60 bg-white border-r rounded-br-lg overflow-auto z-40 transform transition-transform duration-300 ${
            isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="relative h-full p-2">
            {/* Logo and Toggle Button */}
            <div className="flex justify-between items-center p-4">
              <Link
                href="/"
                aria-label="Home"
                className="flex justify-center w-full"
              >
                <Image
                  src="/images/logo.svg"
                  width={64}
                  height={64}
                  alt="House of Hope"
                  className="cursor-pointer w-12 h-12"
                  priority={true}
                />
              </Link>

              {/* Toggle Sidebar Button */}
              <button
                className="bg-gray-300 rounded p-2 ml-4"
                onClick={toggleSidebar}
                aria-label={isSidebarVisible ? 'Close Sidebar' : 'Open Sidebar'}
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

            {/* Navigation Links */}
            <div className="mt-12">
              <div className="flex flex-col space-y-2">
                <Navlink href="/dashboard">
                  <FaHouse className="mr-2" />
                  Dashboard
                </Navlink>
                <Navlink href="/dashboard/teams">
                  <FaUsers className="mr-2" />
                  Teams
                </Navlink>
              </div>
              <hr className="px-2 mt-2 bg-[#F5F5F5]" />
              <Navlink href="/dashboard/faq" className="mt-2">
                Help/FAQ
              </Navlink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaCircleQuestion,
  FaHouse,
  FaUsers,
  FaUserGear,
} from "react-icons/fa6";

const Navlink = ({ href, children, extraClasses = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`w-full px-4 py-2 rounded ${
          isActive ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]"
        } ${extraClasses}`}
      >
        <span className="inline-flex items-center">{children}</span>
      </div>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <>
      <div className="m-0 p-0 fixed w-60 rounded-br-lg bg-white h-full overflow-auto border-r">
        <div className="relative h-full p-2">
          <div className="flex justify-center items-center">
            <Link href="/" className="mt-4">
              <Image
                src="/images/logo.svg"
                width={64}
                height={64}
                alt="House of Hope"
              />
            </Link>
          </div>
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
            <Navlink href="/dashboard/faq" extraClasses="mt-2">
              <FaCircleQuestion className="mr-2" />
              Help/FAQ
            </Navlink>
          </div>
          <div className="absolute bottom-0 mb-4 w-56">
            <Navlink href="/dashboard/settings">
              <FaUserGear className="mr-2" />
              Account Settings
            </Navlink>
          </div>
        </div>
      </div>
    </>
  );
}

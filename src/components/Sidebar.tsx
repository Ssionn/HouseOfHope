"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={
          isActive
            ? "w-full bg-gray-200 px-4 py-2 rounded"
            : "w-full hover:bg-gray-200 px-4 py-2 rounded"
        }
      >
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <>
      <div className="m-0 p-0 w-full h-12 bg-white"></div>
      <div className="m-0 p-0 fixed w-60 rounded-br-lg bg-white h-full overflow-auto border-t border-gray-200">
        <div className="p-2">
          <div className="flex justify-center items-center mt-2">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={64}
                height={64}
                alt="House of Hope"
              />
            </Link>
          </div>
          <div className="mt-12">
            <Navlink href="/dashboard">Dashboard</Navlink>
          </div>
        </div>
      </div>
    </>
  );
}

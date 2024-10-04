import Link from "next/link";
import Image from "next/image";
import UserDropdown from "./UserDropdown";
import DashboardHeader from "./DashboardHeader";
import Navlink from "@/components/Navlink";

export default function Sidebar() {
  return (
    <>
      <div className="m-0 p-0 fixed w-60 rounded-br-lg bg-white h-full overflow-auto border-r">
        <div className="w-full p-2">
          <div className="flex justify-center items-center">
            <Link href="/" aria-label="Home" className="mt-4">
              <Image
                src="/images/logo.svg"
                width={64}
                height={64}
                alt="House of Hope"
                className="cursor-pointer"
              />
            </Link>
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
        </div>
      </div>

      <div className="w-full flex justify-between p-6">
        <DashboardHeader />
        <UserDropdown />
      </div>
    </>
  );
}

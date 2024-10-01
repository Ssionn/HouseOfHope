"use client";

import { getSession, logout } from "@/Actions";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBell, FaUser } from "react-icons/fa6";

export default function UserDropdown() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const sessionData = await getSession();

        setSession(sessionData);
      } catch (error) {
        console.error("Failed to fetch session:", error);
      }
    }

    fetchSession();
  }, []);

  return (
    <div className="inline-flex space-x-4 items-center">
      <div>
        <FaBell />
      </div>
      <Dropdown
        label=""
        arrowIcon={false}
        placement="bottom-start"
        className="bg-gray-100"
      >
        <Dropdown.Header>
          <span>
            {session?.firstname} {session?.lastname}
          </span>
        </Dropdown.Header>
        <Dropdown.Item as={Link} href="/dashboard">
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/dashboard/settings">
          Settings
        </Dropdown.Item>
        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

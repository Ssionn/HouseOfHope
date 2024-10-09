"use client";

import { logout } from "@/Actions";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { FaBell, FaUser } from "react-icons/fa6";

export default function UserDropdown() {
  return (
    <div className="inline-flex space-x-4 items-center">
      <div>
        <FaBell />
      </div>
      <div>
        {/* <Dropdown>
          <DropdownTrigger>
            <FaUser className="cursor-pointer" />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownSection title="Gebruiker gerelateerd">
              <DropdownItem href="/dashboard/settings">
                Instellingen
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Gevaar zone">
              <DropdownItem onClick={logout}>Uitloggen</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown> */}

        <Dropdown>
          <DropdownTrigger>
            <FaUser className="cursor-pointer" />
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
          >
            <DropdownSection title="Acties" showDivider>
              <DropdownItem description="Verander je gebruiker instellingen">
                Instellingen
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Gevaar zone">
              <DropdownItem>Uitloggen</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

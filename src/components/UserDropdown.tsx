"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBell, FaUser } from "react-icons/fa6";
import Link from "next/link";
import {logout} from "../../actions/authentication";

export default function UserDropdown({ session }: { session: { name: string } }) {
    return (
        <div className="inline-flex space-x-4 items-center">
            <div>
                <FaBell />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <FaUser />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{session?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/dashboard/settings">
                        <DropdownMenuItem className="cursor-pointer">
                            Settings
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={async () => logout()} className="cursor-pointer">
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
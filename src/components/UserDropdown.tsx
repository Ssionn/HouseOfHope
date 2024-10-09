import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaBell, FaUser } from "react-icons/fa6";
import {logout} from "../../actions/authentication";
import Link from "next/link";

export default function UserDropdown({ session }) {
    if (!session) {
        return null;
    }

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
                    <DropdownMenuLabel>{session.firstname + " " + session.lastname}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/dashboard/settings">
                        <DropdownMenuItem className="cursor-pointer">
                            Settings
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={async () => await logout()} className="cursor-pointer">
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
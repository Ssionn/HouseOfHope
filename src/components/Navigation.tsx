import Link from "next/link";
import Image from "next/image";
import {getSessionAsPlainObject} from "../../actions/authentication";
import LogoutForm from "./LogoutForm";

const NavigationLink = ({href, children}: {href: string, children: any}) => {
    return (
        <li>
            <Link href={href}>
                <span className="text-lg underline font-semibold">{children}</span>
            </Link>
        </li>
    );
};

export default async function Navigation() {
    const session = await getSessionAsPlainObject();
    return (
        <div className="px-4 sm:px-12 md:px-24 lg:px-36">
            <div className="flex justify-between items-center h-16 w-full mt-20 px-4 sm:px-12 md:px-16 lg:px-24">
                <div>
                    <Image
                        src="/images/logo.svg"
                        width={64}
                        height={64}
                        alt="House of Hope"
                    />
                </div>
                <div>
                    <ul className="flex flex-row items-center space-x-4">
                        {!session.isLoggedIn && (
                            <>
                                <NavigationLink href="/login">Inloggen</NavigationLink>
                                <NavigationLink href="/signup">Aanmelden</NavigationLink>
                            </>
                        )}
                        {session.isLoggedIn && (
                            <>
                                <NavigationLink href="/dashboard">Dashboard</NavigationLink>
                                <LogoutForm/>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

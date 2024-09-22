import Link from "next/link";
import Image from "next/image";

const NavigationLink = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <a className="text-lg underline font-semibold">{children}</a>
      </Link>
    </li>
  );
};

export default function Navigation() {
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
          <ul>
            <NavigationLink href="/dashboard">Dashboard</NavigationLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

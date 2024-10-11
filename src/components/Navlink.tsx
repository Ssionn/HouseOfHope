'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children, className = '' }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`w-full px-4 py-2 rounded ${
          isActive ? 'bg-[#F5F5F5]' : 'hover:bg-[#F5F5F5]'
        } ${className}`}
      >
        <span className="flex flex-row items-center">{children}</span>
      </div>
    </Link>
  );
};

export default Navlink;

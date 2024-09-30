import Link from "next/link";

export default function TeamLink({ href, children }) {
    return (
        <Link href={href} className="inline-flex items-center py-2 px-2 w-full hover:bg-gray-100 rounded">
            {children}
        </Link>
    );
}
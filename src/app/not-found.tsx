import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center mt-48">
      <Image
        src="/images/logo.svg"
        alt="House of Hope Logo"
        height={96}
        width={96}
        className="h-24 w-24"
      />
      <h1 className="text-xl font-bold">404 | Pagina niet gevonden</h1>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Link
          href="/dashboard"
          className="py-1 px-6 border-1 bg-black text-white rounded shadow-xl mt-4 transition ease-in-out duration-150 hover:scale-110"
        >
          Ga naar dashboard
        </Link>
        <span>Of</span>
        <Link
          href="/"
          className="py-1 px-6 border-1 bg-black text-white rounded shadow-xl transition ease-in-out duration-150 hover:scale-110"
        >
          Ga naar de hoofd pagina
        </Link>
      </div>
    </div>
  );
}

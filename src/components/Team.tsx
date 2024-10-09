import Image from "next/image";

export default function Team() {
    return (
        <div className="mt-4">
            <div className="flex flex-row space-x-2">
                <Image
                    src="/images/logo.svg"
                    alt="Team Logo"
                    className="rounded-full object-fill w-12 h-12 border-[2px]"
                    width={48}
                    height={48}
                />
                <div className="flex flex-col">
                    <h1 className="text-lg font-semibold">House of Hope</h1>
                    <p className="text-sm">The house of jesus christ</p>
                </div>
            </div>
        </div>
    );
}
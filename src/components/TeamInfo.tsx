import Image from "next/image";

export default function TeamInfo() {
  return (
    <>
      <div className="flex flex-row items-start space-x-4">
        <div className="bg-gray-100 rounded-lg p-4 w-1/3">
          <h1 className="text-xl font-semibold">Team Info</h1>
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
          <hr className="mt-4" />
          <div className="mt-4">
            <ul className="list-none space-y-2">
              <li>
                <h1 className="text-lg font-semibold">Team Members:</h1>
                <p className="text-sm">John Doe - Team Lead</p>
                <p className="text-sm">Jane Smith - Designer</p>
                <p className="text-sm">Bob Johnson - Developer</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-2 w-full">
          <h1 className="text-xl font-semibold">Team Description</h1>
          <hr className="mt-4" />
          <div className="mt-4">
            <p className="text-sm">
              The House of Hope is a team dedicated to spreading the word of
              God. We strive to create engaging experiences for our community
              through innovative design and technology solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from 'next/image';

export default function Team({
  team_name
}: {
  team_name: string | null | undefined;
}) {
  return (
    <div className="mt-4">
      <div className="flex flex-row space-x-2 items-center">
        <Image
          src="/images/logo.svg"
          alt="Team Logo"
          className="rounded-full object-fill w-12 h-12 border-[2px]"
          width={48}
          height={48}
          priority={true}
        />
        <h1 className="text-lg font-semibold">{team_name}</h1>
      </div>
    </div>
  );
}

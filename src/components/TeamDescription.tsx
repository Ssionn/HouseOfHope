export default function TeamDescription({
  team_description
}: {
  team_description: string | null | undefined;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full">
      <h1 className="text-xl font-semibold">Team Beschrijving</h1>
      <hr className="mt-4" />
      <div className="mt-4">
        <p className="text-md">{team_description}</p>
      </div>
    </div>
  );
}

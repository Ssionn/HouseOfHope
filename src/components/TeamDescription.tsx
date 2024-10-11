export default function TeamDescription({
  team_description,
}: {
  team_description: string | null | undefined;
}) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 w-full">
      <h1 className="text-xl font-semibold">Team Description</h1>
      <hr className="mt-4" />
      <div className="mt-4">
        <p className="text-md">{team_description}</p>
      </div>
    </div>
  );
}

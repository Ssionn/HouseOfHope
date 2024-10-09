import TeamDescription from "@/components/TeamDescription";
import TeamLeader from "@/components/TeamLeader";
import Team from "@/components/Team";

export default function TeamInfo() {
  return (
    <>
      <div className="flex flex-row items-start space-x-4">
        <div className="bg-gray-100 rounded-lg p-4 w-1/3">
          <h1 className="text-xl font-semibold">Team Info</h1>
          <Team />
          <hr className="mt-4" />
          <TeamLeader />
        </div>
        <TeamDescription />
      </div>
    </>
  );
}

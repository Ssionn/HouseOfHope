import TeamDescription from "@/components/TeamDescription";
import TeamLeader from "@/components/TeamLeader";
import Team from "@/components/Team";

export default function TeamInfo(data) {
    return (
        <>
            <div className="flex flex-row items-start space-x-4 w-full">
                <div className="bg-gray-100 rounded-lg p-4 w-1/3">
                    <h1 className="text-xl font-semibold">Team Info</h1>
                    <Team team_name={data?.team?.name}/>
                    <hr className="mt-4"/>
                    <TeamLeader teamleader={data?.team}/>
                </div>
                <TeamDescription team_description={data?.team?.description}/>
            </div>
        </>
    );
}

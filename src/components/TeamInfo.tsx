import TeamDescription from '@/components/TeamDescription';
import TeamLeader from '@/components/TeamLeader';
import TeamComponent from '@/components/Team';
import { Team } from '../../lib/session';

export default function TeamInfo({
  teaminfo
}: {
  teaminfo: Team | null | undefined;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:space-x-4 space-y-4 w-full">
        <div className="bg-gray-100 rounded-lg p-4 md:w-1/3">
          <h1 className="text-xl font-semibold">Team Info</h1>
          <TeamComponent team_name={teaminfo?.name} />
          <hr className="mt-4" />
          <TeamLeader teamleader={teaminfo?.leader} />
        </div>
        <TeamDescription team_description={teaminfo?.description} />
      </div>
    </>
  );
}

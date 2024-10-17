import { Leader } from '../../lib/session';

export default function TeamLeader({
  teamleader
}: {
  teamleader: Leader | null | undefined;
}) {
  return (
    <div className="mt-4">
      <ul className="list-none space-y-2">
        <li>
          <h1 className="text-lg font-semibold">Team leader:</h1>
          <div className="mt-2">
            <span className="hover:bg-gray-100 rounded-md p-1">
              {teamleader?.firstname + ' ' + teamleader?.lastname}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

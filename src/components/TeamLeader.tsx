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
          <ul className="list-disc mt-2">
            <li className="ml-4">
              <p className="text-md font-semibold">
                {teamleader?.firstname + ' ' + teamleader?.lastname}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

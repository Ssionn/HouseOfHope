import { useEffect, useState } from 'react';
import { getSessionAsPlainObject } from '../../actions/authentication';
import UserDropdown from '@/components/UserDropdown';

export default function Header({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  const [session, setSession] = useState({ name: '' });

  useEffect(() => {
    async function getSessionData() {
      const newSession = await getSessionAsPlainObject();
      const name = newSession.firstname + ' ' + newSession.lastname;

      const headerData = {
        name: name
      };

      setSession(headerData);
    }

    getSessionData();
  }, []);

  return (
    <div className="inline-flex justify-between items-center w-full p-4 sm:p-2 md:p-0">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-2XL">{subtitle}</span>
      </div>
      <UserDropdown session={session} />
    </div>
  );
}

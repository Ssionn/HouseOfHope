'use client';

import TeamInfo from '@/components/TeamInfo';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { getSessionAsPlainObject } from '../../../../actions/authentication';
import { FaSpinner } from 'react-icons/fa6';
import { SessionData } from '../../../../lib/session';
import TeamList from '@/components/TeamList';

export default function Teams() {
  const [data, setData] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSessionData() {
      const sessionData = await getSessionAsPlainObject();

      console.log(sessionData);

      setData(sessionData);
      setIsLoading(false);
    }

    getSessionData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center min-h-screen items-center w-full">
        <FaSpinner className="animate-spin h-12 w-12" />
      </div>
    );
  }

  if (!data?.team) {
    throw new Error('Geen team gevonden.');
  }

  if (!data?.team?.members) {
    throw new Error('Geen leden gevonden.');
  }

  return (
    <>
      <div>
        <Header title="Teams" subtitle="" />
        <div className="flex flex-col sm:flex-row space-x-4 items-center mt-4">
          <TeamInfo teamInfo={data?.team} />
        </div>
        <div className="mt-8">
          <TeamList members={data?.team?.members} userId={data?.userId} />
        </div>
      </div>
    </>
  );
}

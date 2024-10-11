'use client';

import TeamInfo from '@/components/TeamInfo';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { getSessionAsPlainObject } from '../../../../actions/authentication';
import { FaSpinner } from 'react-icons/fa6';
import { SessionData } from '../../../../lib/session';

export default function Teams() {
  const [data, setData] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSessionData() {
      const sessionData = await getSessionAsPlainObject();

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

  return (
    <>
      <div className="ml-60 p-6">
        <Header title="Teams" subtitle="" />
        <div className="flex flex-col sm:flex-row space-x-4 items-center mt-4">
          <TeamInfo teaminfo={data?.team} />
        </div>
      </div>
    </>
  );
}

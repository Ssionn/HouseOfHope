'use client';

import Timeline from '@/components/Timeline';
import ActiveSurveyParticipation from '@/components/ActiveSurveyParticipation';
import TeamComposition from '@/components/TeamComposition';
import Header from '@/components/Header';
import { FaSpinner } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <FaSpinner className="animate-spin h-16 w-16" />
      </div>
    );
  }

  return (
    <div>
      <Header title="Dashboard" subtitle="" />
      <div className="mt-4">
        <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-12 md:space-x-4 md:gap-4 md:p-0 p-2 space-y-4">
          <div className="md:col-span-4 bg-white rounded-lg w-full p-2 shadow-md">
            <span className="font-semibold text-xl p-4">Team Composition</span>
            <div className="mt-4">
              <TeamComposition />
            </div>
          </div>
          <div className="md:col-span-5 bg-white rounded-lg w-full p-2 shadow-md">
            <span className="font-semibold text-xl p-4">
              Active Survey Participation
            </span>
            <div className="mt-4">
              <ActiveSurveyParticipation />
            </div>
          </div>
          <div className="md:col-span-3 bg-white rounded-lg w-full p-2 shadow-md">
            <span className="font-semibold text-xl p-4">
              Most Recent Activity
            </span>
            <div className="mt-4">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

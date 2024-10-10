"use client";

import Timeline from "@/components/Timeline";
import ActiveSurveyParticipation from "@/components/ActiveSurveyParticipation";
import TeamComposition from "@/components/TeamComposition";
import Header from "@/components/Header";
import {FaSpinner} from "react-icons/fa6";
import {useEffect, useState} from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(false);
  }, []);

  if (loading) {
    return (
        <div className="flex justify-center min-h-screen items-center">
          <FaSpinner className="animate-spin h-16 w-16"/>
        </div>
    );
  }

  return (
      <div className="ml-60 p-6 min-h-screen">
        <Header title="Dashboard" subtitle=""/>
        <div className="mt-4">
          <div className="flex flex-col sm:grid sm:grid-cols-12 sm:gap-4 items-start">
            <div className="col-span-4 bg-white rounded-lg p-2 shadow-md">
              <span className="font-semibold text-xl p-4">
                Team Composition
              </span>
              <div className="mt-4">
                <TeamComposition />
              </div>
            </div>
            <div className="col-span-5 bg-white rounded p-2 shadow-md">
              <div className="flex flex-col p-4">
                <span className="font-semibold text-xl p-4">
                  Active Survey Participation
                </span>
              </div>
              <div className="mt-4">
                <ActiveSurveyParticipation />
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-lg p-2 shadow-md">
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

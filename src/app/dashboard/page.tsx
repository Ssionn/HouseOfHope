"use client";

import Timeline from "@/components/Timeline";
import TeamComposition from "@/components/TeamComposition";
import ActiveSurveyParticipation from "@/components/ActiveSurveyParticipation";

export default function Home() {
  return (
    <div>
      <main className="ml-60 p-6">
        <div className="flex justify-between items-center">
          <div className="inline-flex">
            <h1 className="text-4xl font-bold">Welcome</h1>
            <span className="text-4xl">, Casper</span>
          </div>
          <div className="inline-flex space-x-4 items-center">
            <div className="rounded-full bg-white w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </div>
            <div className="rounded-full bg-white w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 items-start">
            <div className="col-span-1 bg-white rounded-lg p-2">
              <span className="font-semibold text-xl p-4">
                Team Composition
              </span>
              <div className="mt-4">
                <TeamComposition />
              </div>
            </div>
            <div className="col-span-1 bg-white rounded p-2">
              <div className="flex flex-col p-4">
                <span className="font-semibold text-xl">
                  Active Survey Participation
                </span>
                <span className="italic text-xs">*based on all teams</span>
              </div>
              <div className="mt-4">
                <ActiveSurveyParticipation />
              </div>
            </div>
            <div className="col-span-1 bg-white rounded-lg p-4 shadow-md">
              <span className="font-semibold text-xl p-4">
                Most Recent Activity
              </span>
              <div className="mt-4">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

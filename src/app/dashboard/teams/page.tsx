"use client";

import TeamInfo from "@/components/TeamInfo";

export default function teams() {
    return (
        <>
            <div className="ml-60 p-6">
                <h1 className="text-4xl font-semibold">Teams</h1>
            </div>

            <div className="ml-60 p-6">
                <div className="flex flex-col sm:flex-row space-x-4 items-center">
                    <TeamInfo />
                </div>
            </div>
        </>
    );
}
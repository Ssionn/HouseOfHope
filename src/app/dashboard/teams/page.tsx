"use client";

import TeamInfo from "@/components/TeamInfo";
import Header from "@/components/Header";

export default function teams() {
    return (
        <>
            <div className="ml-60 p-6">
                <Header title="Teams" subtitle=""/>
                <div className="flex flex-col sm:flex-row space-x-4 items-center mt-4">
                    <TeamInfo />
                </div>
            </div>
        </>
    );
}
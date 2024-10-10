"use client";

import TeamInfo from "@/components/TeamInfo";
import Header from "@/components/Header";
import {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import {getSessionAsPlainObject} from "../../../../actions/authentication";
import {FaSpinner} from "react-icons/fa6";

export default function Teams() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function getSessionData() {
            const sessionData = await getSessionAsPlainObject();

            if (! sessionData?.team) {
                router.push("/dashboard?error=unauthorized");

                return;
            }

            setData(sessionData);
            setIsLoading(false);
        }

        getSessionData();
    }, [router]);

    if (isLoading) {
        return <div className="flex justify-center w-full mt-12"><FaSpinner className="animate-spin h-12 w-12"/></div>;
    }

    return (
        <>
            <div className="ml-60 p-6">
                <Header title="Teams" subtitle=""/>
                <div className="flex flex-col sm:flex-row space-x-4 items-center mt-4">
                    <TeamInfo data={data}/>
                </div>
            </div>
        </>
    );
}
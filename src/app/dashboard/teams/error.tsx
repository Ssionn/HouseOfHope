"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Image src="/images/logo.svg" alt="House of Hope Logo" height={96} width={96} className="h-24 w-24" />
            <h1 className="text-xl font-bold">Something went wrong!</h1>
            <p className="mt-4">{error.message}</p>
            <button onClick={reset} className="py-1 px-6 border-1 bg-black text-white rounded shadow-xl mt-4">
                Try Again
            </button>
        </div>
    );
}
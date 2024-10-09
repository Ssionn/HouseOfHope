import {useEffect, useState} from 'react';
import {getSession} from "../../actions/authentication";
import UserDropdown from "@/components/UserDropdown";
import {FaSpinner} from "react-icons/fa6";

export default function Header({ title, subtitle }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        async function getSessionData() {
            const newSession = await getSession();

            console.log(newSession);

            setSession(newSession);
        }

        getSessionData();
    }, []);

    return (
        <div className="inline-flex justify-between items-center w-full">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <span className="text-2XL">{subtitle}</span>
            </div>
            <UserDropdown session={session} />
        </div>
    );
}
"use server";

import * as bcrypt from "bcrypt";
import {getIronSession} from "iron-session";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {checkUserExists, createNewUser, getUserTeamWithTeamLeader} from "../index";
import {SessionData, defaultSession, sessionOptions} from "../lib/session";

export const getSessionAsPlainObject = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    const {userId, firstname, lastname, email, team, isLoggedIn} = session;
    const plainSessionObject = {userId, firstname, lastname, email, team, isLoggedIn};

    return plainSessionObject;
};

const updateSessionFromPlainObject = async (sessionData: Partial<SessionData>) => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    Object.assign(session, sessionData);

    await session.save();
};

export const login = async (
    prevState: { error: undefined | string },
    formData: FormData
) => {
    const formEmail = formData.get("email") as string;
    const formPassword = formData.get("password") as string;

    const user = await checkUserExists(formEmail);

    if (!user || !(await bcrypt.compare(formPassword, user?.password))) {
        return {error: "The provided credentials do not match any records."};
    }

    const sessionData: Partial<SessionData> = {
        userId: user?.id,
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        isLoggedIn: true,
        team: await getUserTeamWithTeamLeader(user?.teamId ?? 0),
    };

    await updateSessionFromPlainObject(sessionData);
    redirect("/dashboard");
};

export const signup = async (
    prevState: { error: undefined | string },
    formData: FormData
) => {
    const formFirstname = formData.get("firstname") as string;
    const formLastname = formData.get("lastname") as string;
    const formEmail = formData.get("email") as string;
    const formPassword = formData.get("password") as string;

    const newUser = await createNewUser(
        formFirstname,
        formLastname,
        formEmail,
        formPassword
    );

    const sessionData: Partial<SessionData> = {
        userId: newUser?.id,
        firstname: newUser?.firstname,
        lastname: newUser?.lastname,
        email: newUser?.email,
        isLoggedIn: true,
    };

    await updateSessionFromPlainObject(sessionData);
    redirect("/dashboard");
};

export const logout = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    session.destroy();

    redirect("/");
};

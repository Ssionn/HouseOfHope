"use server";

import * as bcrypt from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkUserExists, createNewUser } from "../index";
import { SessionData, defaultSession, sessionOptions } from "../lib/session";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (
  prevState: { error: undefined | string },
  formData: FormData,
) => {
  const session = await getSession();

  const formEmail = formData.get("email") as string;
  const formPassword = formData.get("password") as string;

  const user = await checkUserExists(formEmail);

  if (!user || !(await bcrypt.compare(formPassword, user?.password))) {
    return { error: "The provided credentials do not match any records." };
  }

  session.userId = user?.id;
  session.firstname = user?.firstname;
  session.lastname = user?.lastname;
  session.email = user?.email;
  session.isLoggedIn = true;

  await session.save();

  redirect("/dashboard");
};

export const signup = async (
  prevState: { error: undefined | string },
  formData: FormData,
) => {
  const session = await getSession();

  const formFirstname = formData.get("firstname") as string;
  const formLastname = formData.get("lastname") as string;
  const formEmail = formData.get("email") as string;
  const formPassword = formData.get("password") as string;

  const newUser = await createNewUser(
    formFirstname,
    formLastname,
    formEmail,
    formPassword,
  );

  session.userId = newUser?.id;
  session.firstname = newUser?.firstname;
  session.lastname = newUser?.lastname;
  session.email = newUser?.email;
  session.isLoggedIn = true;

  await session.save();

  redirect("/dashboard");
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();

  redirect("/");
};

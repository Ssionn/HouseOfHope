import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: number | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  team?: object | null;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.OPENSSL_KEY!,
  cookieName: "user_session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

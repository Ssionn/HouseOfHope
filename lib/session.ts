import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.OPENSSL_KEY!,
  cookieName: "HouseOfHope_session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

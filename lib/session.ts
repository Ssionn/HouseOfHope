import { SessionOptions } from "iron-session";

export interface SessionData {
  userId: number | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  team: Team | null;
  isLoggedIn: boolean;
}

export interface Team {
  id: number | null;
  name: string | null;
  description: string | null;
  leader: Leader | null;
  leaderId: number | null;
}

export interface Leader {
  email: string | null;
  firstname: string | null;
  lastname: string | null;
}

export const defaultSession: SessionData = {
  userId: null,
  firstname: null,
  lastname: null,
  email: null,
  team: null,
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

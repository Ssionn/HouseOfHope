import { NextResponse } from 'next/server';
import { getSession } from "./actions/authentication";

export async function middleware(req) {
    const session = await getSession();

    if (! session.isLoggedIn) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*'],
}
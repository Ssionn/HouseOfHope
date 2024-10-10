import {NextRequest, NextResponse} from 'next/server';
import { getSessionAsPlainObject } from "./actions/authentication";

export async function middleware(req: NextRequest) {
    const session = await getSessionAsPlainObject();

    if (! session.isLoggedIn) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*'],
}
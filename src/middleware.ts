import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/signin', request.url))
    } else if (accessToken && (request.nextUrl.pathname.startsWith('/signin') || request.nextUrl.pathname.startsWith('/signup'))) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/signin', '/signup']
}
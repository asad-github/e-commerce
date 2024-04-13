import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPrivate = path == "/shop/profile" || path == "/shop/profile/:path*";
  const token = request.cookies.get("token")?.value || "";
  if (isPrivate && !token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
  // if (!isPrivate && !token) {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }
}

export const config = {
  matcher: ["/", "/shop/profile", "/profile/:path*", "/signin", "/signup"],
};

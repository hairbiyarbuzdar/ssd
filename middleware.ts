import { NextResponse, type NextRequest } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const pathname = request.nextUrl.pathname;
  const isLoginPage = pathname === "/" || pathname === "";

  if (token) {
    const payload = await verifyToken(token);
    if (payload) {
      // Valid session — redirect away from login page
      if (isLoginPage) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        url.search = "";
        return NextResponse.redirect(url);
      }
      return NextResponse.next();
    }
  }

  // No valid session
  if (!isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

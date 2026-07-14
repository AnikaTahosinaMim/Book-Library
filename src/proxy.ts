import { NextResponse, type NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { cookies, headers } from "next/headers";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("SESSION:", session);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/books/add", "/books/manage", "/profile", "/about", "/contact"],
};

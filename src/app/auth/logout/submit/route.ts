import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = new URL("/auth/login", request.url);
  const res = NextResponse.redirect(url, 302);

  res.cookies.delete("lk_demo");

  return res;
}

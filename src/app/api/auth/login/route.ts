import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = new URL("/dashboard", request.url);
  const res = NextResponse.redirect(url, 302);

  res.cookies.set("lk_demo", "1", {
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
});

  return res;
}

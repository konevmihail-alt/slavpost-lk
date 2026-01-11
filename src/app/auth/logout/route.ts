import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect(new URL("/auth/login", "http://localhost"), 302);
  res.cookies.set("lk_demo", "0", { path: "/", httpOnly: true, sameSite: "lax", maxAge: 0 });
  return res;
}

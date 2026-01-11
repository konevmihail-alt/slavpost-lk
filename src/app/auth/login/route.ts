import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect(new URL("/dashboard", "http://localhost"), 302);
  // В Vercel host будет другой — NextResponse сам подставит корректный
  res.cookies.set("lk_demo", "1", { path: "/", httpOnly: true, sameSite: "lax" });
  return res;
}

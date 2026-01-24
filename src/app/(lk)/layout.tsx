import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // guard: если нет cookie lk_demo=1 — отправляем на логин
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("lk_demo")?.value === "1";

  if (!isAuthed) redirect("/auth/login");

  return <>{children}</>;
}

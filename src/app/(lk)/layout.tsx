import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import LkTopNav from "@/components/lk/LkTopNav";

export default async function LkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // guard: если нет cookie lk_demo=1 — отправляем на логин
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("lk_demo")?.value === "1";

  if (!isAuthed) redirect("/auth/login");

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Slavpost</div>
              <div className="text-xs text-slate-500">Личный кабинет</div>
            </div>
          </Link>

          <div className="flex flex-col gap-3 md:items-center md:gap-2">
            <LkTopNav />

            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                На главную
              </Link>

              <form action="/api/auth/logout" method="post">
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Выйти (демо)
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}

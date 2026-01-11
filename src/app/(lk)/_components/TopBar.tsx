import Link from "next/link";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          {/* Пока заглушка вместо логотипа — позже вставим logo.png */}
          <div className="h-10 w-10 rounded-2xl bg-slate-900" />
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-slate-900">Slavpost</div>
            <div className="text-xs text-slate-500">Личный кабинет для отправителей-юридических лиц</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/support/tickets"
            className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 md:inline-flex"
          >
            Поддержка
          </Link>

          <form action="/auth/logout" method="post">
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Выйти
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

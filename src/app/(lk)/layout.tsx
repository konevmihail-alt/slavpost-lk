import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Панель" },
  { href: "/shipments", label: "Отправления" },
  { href: "/acts", label: "Акты" },
  { href: "/finance", label: "Финансы" },
  { href: "/support/tickets", label: "Обращения" },
  { href: "/company/requisites", label: "Реквизиты" },
  { href: "/company/contacts", label: "Контакты" },
  { href: "/company/sender-address", label: "Адрес отправителя" },
];

export default function LKLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900" />
            <div className="leading-tight">
              <div className="text-sm font-bold text-slate-900">Slavpost</div>
              <div className="text-xs text-slate-500">Личный кабинет отправителя</div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/support/tickets"
              className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 md:inline-flex"
            >
              Поддержка
            </Link>
            <Link
              href="/auth/login"
              className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Выйти
            </Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 md:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-3xl border border-slate-200 bg-white p-3">
          <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Меню
          </div>

          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-sm font-bold text-slate-900">Подсказка “с чего начать”</div>
            <div className="mt-1 text-sm text-slate-600">
              1) Заполните реквизиты, 2) Контакты, 3) Адрес отправителя — после этого можно создавать отправления.
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="rounded-3xl border border-slate-200 bg-white p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

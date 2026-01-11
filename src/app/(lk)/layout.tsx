import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import SidebarNav from "./_components/SidebarNav";
import TopBar from "./_components/TopBar";

export default function LKLayout({ children }: { children: React.ReactNode }) {
  // Пока сделаем очень простой "guard":
  // если нет cookie lk_demo=1 — отправляем на логин
  const isAuthed = cookies().get("lk_demo")?.value === "1";
  if (!isAuthed) redirect("/auth/login");

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[280px_1fr] md:px-6">
        <aside className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <SidebarNav />

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-sm font-bold text-slate-900">Подсказка “с чего начать”</div>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
              <li>
                Заполните <Link className="font-semibold text-slate-900 underline" href="/company/requisites">реквизиты</Link>
              </li>
              <li>
                Добавьте <Link className="font-semibold text-slate-900 underline" href="/company/contacts">контакты</Link>
              </li>
              <li>
                Укажите <Link className="font-semibold text-slate-900 underline" href="/company/sender-address">адрес отправителя</Link>
              </li>
            </ol>
            <div className="mt-2 text-xs text-slate-500">
              Пока реквизиты не заполнены — создание отправлений будет заблокировано (добавим позже).
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Баланс</div>
            <div className="mt-1 text-lg font-extrabold text-slate-900">0 ₽</div>
            <div className="text-xs text-slate-500">Демо-режим</div>
          </div>
        </aside>

        <main className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          {children}
        </main>
      </div>

      <footer className="mx-auto max-w-7xl px-6 pb-8 text-xs text-slate-500">
        © {new Date().getFullYear()} Slavpost · Личный кабинет отправителя-юрлица
      </footer>
    </div>
  );
}

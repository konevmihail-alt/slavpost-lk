import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-900" />
          <div>
            <div className="text-sm font-semibold text-slate-900">Slavpost</div>
            <div className="text-xs text-slate-500">
              Личный кабинет для отправителей-юридических лиц
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/auth/login"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Войти
          </Link>
          <Link
            href="/auth/register"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Получить доступ
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Личный кабинет Slavpost для отправителей-юридических лиц
          </h1>
          <p className="mt-4 text-slate-600">
            Управляйте отправлениями, актами, финансами и обращениями в поддержку в одном
            интерфейсе.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/auth/login"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Войти в кабинет
            </Link>
            <Link
              href="/auth/register"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Получить доступ
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              ✅ Регистрация за 30 секунд + ссылка «Создать пароль» на email
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              ✅ Онбординг компании: реквизиты RU/BY/KZ/KG, контакты, адрес, ПВЗ/курьер
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              ✅ Отправления, акты, финансы (2 баланса), обращения в поддержку
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Быстрый вход (демо)</div>
          <p className="mt-1 text-sm text-slate-600">
            Сейчас это заглушка. Дальше подключим реальную авторизацию.
          </p>

          <div className="mt-5 grid gap-3">
            <input
              placeholder="Email"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            />
            <input
              placeholder="Пароль"
              type="password"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            />
            <Link
              href="/dashboard"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Войти (демо)
            </Link>

            <div className="flex items-center justify-between text-sm">
              <Link href="/auth/forgot-password" className="text-slate-600 hover:text-slate-900">
                Забыли пароль?
              </Link>
              <Link href="/auth/register" className="font-semibold text-slate-900 hover:underline">
                Получить доступ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Slavpost
      </footer>
    </main>
  );
}

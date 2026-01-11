import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-900" />
          <div>
            <div className="text-sm font-semibold text-slate-900">Slavpost</div>
            <div className="text-xs text-slate-500">ЛК для отправителей-юрлиц</div>
          </div>
        </Link>

        <Link
          href="/auth/register"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Получить доступ
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Вход</h1>
          <p className="mt-1 text-sm text-slate-600">
            Войдите по email и паролю. Если вы впервые — зарегистрируйтесь.
          </p>

          <div className="mt-5 grid gap-3">
            <label className="grid gap-1">
              <span className="text-sm font-medium text-slate-900">Email</span>
              <input
                placeholder="name@company.ru"
                className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium text-slate-900">Пароль</span>
              <input
                type="password"
                placeholder="••••••••"
                className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <Link
              href="/dashboard"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Войти (демо)
            </Link>

            <div className="flex items-center justify-between text-sm">
              <Link
                href="/auth/forgot-password"
                className="text-slate-600 hover:text-slate-900"
              >
                Забыли пароль?
              </Link>
              <Link href="/auth/register" className="font-semibold text-slate-900 hover:underline">
                Получить доступ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function ForgotPasswordPage() {
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
          href="/auth/login"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Войти
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Восстановление пароля</h1>
          <p className="mt-1 text-sm text-slate-600">
            Укажите email — мы отправим ссылку для создания нового пароля.
          </p>

          <div className="mt-5 grid gap-3">
            <input
              placeholder="name@company.ru"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            />
            <Link
              href="/auth/create-password"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Отправить ссылку (демо)
            </Link>

            <div className="text-sm text-slate-600">
              Вспомнили пароль?{" "}
              <Link href="/auth/login" className="font-semibold text-slate-900 hover:underline">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

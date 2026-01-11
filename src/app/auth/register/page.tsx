import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-900" />
          <div>
            <div className="text-sm font-semibold text-slate-900">Slavpost</div>
            <div className="text-xs text-slate-500">
              Личный кабинет для отправителей-юридических лиц
            </div>
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
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Получить доступ</h1>
          <p className="mt-1 text-sm text-slate-600">
            Укажите данные компании. На email придёт ссылка «Создать пароль».
          </p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium text-slate-900">Страна</span>
              <select className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200">
                <option>Россия</option>
                <option>Беларусь</option>
                <option>Казахстан</option>
                <option>Кыргызстан</option>
              </select>
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium text-slate-900">
                Название отправителя (юрлицо)
              </span>
              <input
                placeholder='ООО "Ромашка"'
                className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1">
                <span className="text-sm font-medium text-slate-900">Email</span>
                <input
                  placeholder="name@company.ru"
                  className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm font-medium text-slate-900">
                  Телефон (с кодом страны)
                </span>
                <input
                  placeholder="+7 900 000-00-00"
                  className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                />
              </label>
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4" />
              <span>
                Я соглашаюсь с{" "}
                <a href="#" className="font-semibold text-slate-900 underline">
                  Офертой
                </a>
              </span>
            </label>

            <Link
              href="/auth/create-password"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Получить доступ (демо)
            </Link>

            <div className="text-sm text-slate-600">
              Уже есть доступ?{" "}
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

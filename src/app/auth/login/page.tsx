import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <div className="text-xl font-extrabold text-slate-900">Вход в Slavpost</div>
            <div className="mt-1 text-sm text-slate-600">
              Демоверсия. Нажмите “Войти”, чтобы попасть в кабинет.
            </div>
          </div>

          <form action="/auth/login" method="post" className="space-y-3">
            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Войти
            </button>
          </form>

          <div className="mt-4 text-sm text-slate-600">
            Нет доступа?{" "}
            <Link className="font-semibold text-slate-900 underline" href="/auth/register">
              Получить доступ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

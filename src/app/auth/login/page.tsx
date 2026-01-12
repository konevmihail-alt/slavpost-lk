export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <div className="text-xl font-extrabold text-slate-900">
              Вход в личный кабинет
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Деморежим: нажмите «Войти», чтобы установить cookie и перейти в
              кабинет.
            </div>
          </div>

          <form action="/auth/login/submit" method="post" className="space-y-4">
            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Войти
            </button>
          </form>

          <div className="mt-6 text-xs text-slate-500">
            Это временная заглушка. Позже подключим реальную авторизацию.
          </div>
        </div>
      </div>
    </div>
  );
}

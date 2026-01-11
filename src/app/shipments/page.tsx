import Link from "next/link";

export default function ShipmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/dashboard" className="text-sm font-semibold text-slate-900 hover:underline">
          ← Панель управления
        </Link>
        <div className="text-sm text-slate-600">Раздел: Отправления</div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h1 className="text-xl font-bold text-slate-900">Отправления</h1>
          <p className="mt-1 text-sm text-slate-600">
            Здесь будет список отправлений, фильтры, статусы и кнопка «Создать отправление».
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="h-11 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-800">
              Создать отправление (скоро)
            </button>
            <button className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Импорт из интернет-магазина (позже)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

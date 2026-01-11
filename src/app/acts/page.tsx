import Link from "next/link";

export default function ActsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/dashboard" className="text-sm font-semibold text-slate-900 hover:underline">
          ← Панель управления
        </Link>
        <div className="text-sm text-slate-600">Раздел: Акты</div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h1 className="text-xl font-bold text-slate-900">Акты приёма-передачи</h1>
          <p className="mt-1 text-sm text-slate-600">
            Здесь будет формирование акта на выбранные отправления и скачивание PDF.
          </p>

          <div className="mt-6">
            <button className="h-11 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-800">
              Сформировать акт (скоро)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ActsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="text-2xl font-bold text-slate-900">Акты</h1>
        <p className="mt-1 text-slate-600">
          Формирование актов приема-передачи и выгрузка PDF.
        </p>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">Заглушка</div>
          <div className="mt-2 text-sm text-slate-600">
            Следующий шаг: фильтры по периодам + генерация PDF.
          </div>
        </div>
      </section>
    </main>
  );
}

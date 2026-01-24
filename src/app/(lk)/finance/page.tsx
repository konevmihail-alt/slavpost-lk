export default function FinancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="text-2xl font-bold text-slate-900">Финансы</h1>
        <p className="mt-1 text-slate-600">
          Счета, оплаты, выплаты и балансы.
        </p>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">Заглушка</div>
          <div className="mt-2 text-sm text-slate-600">
            Следующий шаг: карточки баланса + список транзакций.
          </div>
        </div>
      </section>
    </main>
  );
}

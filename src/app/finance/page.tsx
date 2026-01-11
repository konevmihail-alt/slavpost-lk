import Link from "next/link";

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/dashboard" className="text-sm font-semibold text-slate-900 hover:underline">
          ← Панель управления
        </Link>
        <div className="text-sm text-slate-600">Раздел: Финансы</div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">Баланс отправителя (долг отправителя нам)</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">0 ₽</div>
            <p className="mt-1 text-sm text-slate-600">
              Доставка + доп. услуги (страхование и т.п.), которые оплачивает отправитель.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">Наш долг отправителю</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">0 ₽</div>
            <p className="mt-1 text-sm text-slate-600">
              Наложенный платеж за товары (COD) и иные суммы к выплате отправителю.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6">
          <h1 className="text-xl font-bold text-slate-900">Счета и отчёты</h1>
          <p className="mt-1 text-sm text-slate-600">
            Здесь будут счета, оплаты, выплаты, отчёты по периодам (неделя/месяц), интеграция с 1С:УНФ.
          </p>
        </div>
      </section>
    </main>
  );
}

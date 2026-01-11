import Link from "next/link";

const MenuItem = ({ href, title, desc }: { href: string; title: string; desc: string }) => (
  <Link
    href={href}
    className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50"
  >
    <div className="text-sm font-semibold text-slate-900">{title}</div>
    <div className="mt-1 text-sm text-slate-600">{desc}</div>
  </Link>
);

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-900" />
          <div>
            <div className="text-sm font-semibold text-slate-900">Slavpost</div>
            <div className="text-xs text-slate-500">Личный кабинет</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            На главную
          </Link>
          <Link
            href="/auth/login"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Выйти (демо)
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h1 className="text-2xl font-bold text-slate-900">Панель управления</h1>
        <p className="mt-1 text-slate-600">
          Здесь будет сводка: статусы отправлений, финансы, уведомления и подсказка «с чего начать».
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <MenuItem href="/shipments" title="Отправления" desc="Создание, список, статусы, печать документов" />
          <MenuItem href="/acts" title="Акты" desc="Формирование актов приема-передачи, PDF" />
          <MenuItem href="/finance" title="Финансы" desc="Счета, оплаты, выплаты, 2 баланса" />
          <MenuItem href="/support/tickets" title="Обращения" desc="Создать обращение, статус: Создано/В работе/Решено" />
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">Подсказка «С чего начать»</div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>Заполните реквизиты организации (RU/BY/KZ/KG)</li>
            <li>Заполните контакты и адрес отправителя</li>
            <li>Выберите способ сдачи: ПВЗ партнера Slavpost или курьерский забор</li>
            <li>Создайте первое отправление</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

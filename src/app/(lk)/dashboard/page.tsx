import Link from "next/link";

type StatCardProps = {
  title: string;
  value: string;
  hint: string;
  href?: string;
};

const StatCard = ({ title, value, hint, href }: StatCardProps) => {
  const Card = (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
      <div className="text-xs font-semibold text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{hint}</div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {Card}
    </Link>
  ) : (
    Card
  );
};

const MenuItem = ({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) => (
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
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-6">
        <h1 className="text-2xl font-bold text-slate-900">Панель управления</h1>
        <p className="mt-1 text-slate-600">
          Сводка по отправлениям, финансам и обращениям — и подсказка «с чего начать».
        </p>

        {/* Метрики */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Активные отправления"
            value="3"
            hint="В работе / ожидают сдачу"
            href="/shipments"
          />
          <StatCard
            title="В пути"
            value="1"
            hint="Движение по треку"
            href="/shipments"
          />
          <StatCard
            title="Баланс"
            value="0 ₽"
            hint="Пополнения / списания"
            href="/finance"
          />
          <StatCard
            title="Обращения"
            value="0"
            hint="В работе у поддержки"
            href="/support/tickets"
          />
        </div>

        {/* Разделы */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <MenuItem
            href="/shipments"
            title="Отправления"
            desc="Создание, список, статусы, печать документов"
          />
          <MenuItem
            href="/acts"
            title="Акты"
            desc="Формирование актов приема-передачи, PDF"
          />
          <MenuItem
            href="/finance"
            title="Финансы"
            desc="Счета, оплаты, выплаты, два баланса"
          />
          <MenuItem
            href="/support/tickets"
            title="Обращения"
            desc="Создать обращение, статусы: Создано / В работе / Решено"
          />
        </div>

        {/* Подсказка */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">
            Подсказка «С чего начать»
          </div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>Заполните реквизиты организации (RU / BY / KZ / KG)</li>
            <li>Заполните контакты и адрес отправителя</li>
            <li>Выберите способ сдачи: ПВЗ партнера Slavpost или курьерский забор</li>
            <li>Создайте первое отправление</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

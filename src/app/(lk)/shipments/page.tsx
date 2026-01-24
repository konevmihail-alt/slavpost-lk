"use client";

import { useMemo, useState } from "react";

type ShipmentStatus = "draft" | "awaiting_dropoff" | "in_transit" | "delivered" | "cancelled";

type Shipment = {
  id: string;
  createdAt: string; // ISO or readable
  marketplace: "WB" | "Ozon" | "Yandex";
  route: string; // CN → RU etc
  pieces: number;
  weightKg: number;
  priceRub: number;
  status: ShipmentStatus;
  lastUpdate: string;
};

const STATUS_LABEL: Record<ShipmentStatus, string> = {
  draft: "Черновик",
  awaiting_dropoff: "Ожидает сдачу",
  in_transit: "В пути",
  delivered: "Доставлено",
  cancelled: "Отменено",
};

const MARKET_LABEL: Record<Shipment["marketplace"], string> = {
  WB: "Wildberries",
  Ozon: "Ozon",
  Yandex: "Яндекс Маркет",
};

function formatMoneyRub(v: number) {
  return new Intl.NumberFormat("ru-RU").format(v) + " ₽";
}

function formatKg(v: number) {
  return v.toFixed(1).replace(".", ",") + " кг";
}

const MOCK_SHIPMENTS: Shipment[] = [
  {
    id: "SP-000231",
    createdAt: "2026-01-10",
    marketplace: "WB",
    route: "CN → RU (Москва, терминал)",
    pieces: 3,
    weightKg: 18.4,
    priceRub: 12650,
    status: "awaiting_dropoff",
    lastUpdate: "Сегодня, 11:20",
  },
  {
    id: "SP-000230",
    createdAt: "2026-01-09",
    marketplace: "Ozon",
    route: "CN → RU (Казань, терминал)",
    pieces: 1,
    weightKg: 6.2,
    priceRub: 4990,
    status: "in_transit",
    lastUpdate: "Вчера, 19:05",
  },
  {
    id: "SP-000229",
    createdAt: "2026-01-06",
    marketplace: "WB",
    route: "CN → RU (СПб, терминал)",
    pieces: 2,
    weightKg: 10.1,
    priceRub: 8150,
    status: "delivered",
    lastUpdate: "06 янв, 14:40",
  },
  {
    id: "SP-000228",
    createdAt: "2026-01-05",
    marketplace: "Yandex",
    route: "CN → RU (Москва, терминал)",
    pieces: 4,
    weightKg: 21.7,
    priceRub: 15400,
    status: "draft",
    lastUpdate: "05 янв, 09:12",
  },
  {
    id: "SP-000227",
    createdAt: "2026-01-03",
    marketplace: "Ozon",
    route: "CN → RU (Екб, терминал)",
    pieces: 2,
    weightKg: 12.8,
    priceRub: 9200,
    status: "cancelled",
    lastUpdate: "03 янв, 17:58",
  },
];

type StatusFilter = "all" | ShipmentStatus;
type SortKey = "createdAt" | "priceRub" | "weightKg" | "status";

function compare(a: Shipment, b: Shipment, key: SortKey, dir: "asc" | "desc") {
  const mul = dir === "asc" ? 1 : -1;

  if (key === "createdAt") return (a.createdAt.localeCompare(b.createdAt) * mul);
  if (key === "priceRub") return ((a.priceRub - b.priceRub) * mul);
  if (key === "weightKg") return ((a.weightKg - b.weightKg) * mul);
  if (key === "status") return (STATUS_LABEL[a.status].localeCompare(STATUS_LABEL[b.status]) * mul);

  return 0;
}

function Pill({ status }: { status: ShipmentStatus }) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border";

  const cls =
    status === "draft"
      ? "bg-white text-slate-700 border-slate-200"
      : status === "awaiting_dropoff"
      ? "bg-white text-slate-900 border-slate-300"
      : status === "in_transit"
      ? "bg-white text-slate-900 border-slate-300"
      : status === "delivered"
      ? "bg-white text-slate-900 border-slate-300"
      : "bg-white text-slate-700 border-slate-200";

  return <span className={`${base} ${cls}`}>{STATUS_LABEL[status]}</span>;
}

function Modal({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (draft: Omit<Shipment, "id" | "lastUpdate">) => void;
}) {
  const [marketplace, setMarketplace] = useState<Shipment["marketplace"]>("WB");
  const [route, setRoute] = useState("CN → RU (Москва, терминал)");
  const [pieces, setPieces] = useState(1);
  const [weightKg, setWeightKg] = useState(1);
  const [priceRub, setPriceRub] = useState(0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-lg font-extrabold text-slate-900">
              Создать отправление
            </div>
            <div className="mt-1 text-sm text-slate-600">
              Пока это демо: создадим локальный черновик. Потом подключим API.
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Закрыть
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <div className="text-xs font-semibold text-slate-600">Маркетплейс</div>
            <select
              value={marketplace}
              onChange={(e) => setMarketplace(e.target.value as Shipment["marketplace"])}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
            >
              <option value="WB">Wildberries</option>
              <option value="Ozon">Ozon</option>
              <option value="Yandex">Яндекс Маркет</option>
            </select>
          </label>

          <label className="block">
            <div className="text-xs font-semibold text-slate-600">Маршрут</div>
            <input
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
              placeholder="CN → RU (Москва, терминал)"
            />
          </label>

          <label className="block">
            <div className="text-xs font-semibold text-slate-600">Мест (шт)</div>
            <input
              type="number"
              min={1}
              value={pieces}
              onChange={(e) => setPieces(Math.max(1, Number(e.target.value)))}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
            />
          </label>

          <label className="block">
            <div className="text-xs font-semibold text-slate-600">Вес (кг)</div>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={weightKg}
              onChange={(e) => setWeightKg(Math.max(0.1, Number(e.target.value)))}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
            />
          </label>

          <label className="block sm:col-span-2">
            <div className="text-xs font-semibold text-slate-600">Стоимость (₽)</div>
            <input
              type="number"
              min={0}
              value={priceRub}
              onChange={(e) => setPriceRub(Math.max(0, Number(e.target.value)))}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Отмена
          </button>
          <button
            onClick={() => {
              onCreate({
                createdAt: new Date().toISOString().slice(0, 10),
                marketplace,
                route,
                pieces,
                weightKg,
                priceRub,
                status: "draft",
              });
              onClose();
            }}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Создать (черновик)
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShipmentsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [market, setMarket] = useState<"all" | Shipment["marketplace"]>("all");
  const [sortKey, setSortKey] = useState<SortKey>("createdAt");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [openCreate, setOpenCreate] = useState(false);

  const [items, setItems] = useState<Shipment[]>(MOCK_SHIPMENTS);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    const base = items.filter((s) => {
      if (status !== "all" && s.status !== status) return false;
      if (market !== "all" && s.marketplace !== market) return false;

      if (!query) return true;
      const hay = [
        s.id,
        s.createdAt,
        MARKET_LABEL[s.marketplace],
        s.route,
        STATUS_LABEL[s.status],
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(query);
    });

    base.sort((a, b) => compare(a, b, sortKey, sortDir));
    return base;
  }, [items, q, status, market, sortKey, sortDir]);

  const stats = useMemo(() => {
    const total = items.length;
    const byStatus = items.reduce<Record<ShipmentStatus, number>>(
      (acc, s) => {
        acc[s.status] += 1;
        return acc;
      },
      { draft: 0, awaiting_dropoff: 0, in_transit: 0, delivered: 0, cancelled: 0 }
    );
    return { total, byStatus };
  }, [items]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Отправления</h1>
            <p className="mt-1 text-slate-600">
              Таблица с фильтрами. Сейчас — мок-данные, далее подключим API.
            </p>
          </div>

          <button
            onClick={() => setOpenCreate(true)}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Создать отправление
          </button>
        </div>

        {/* Quick stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold text-slate-500">Всего</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">{stats.total}</div>
            <div className="mt-1 text-sm text-slate-600">Отправлений в системе</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold text-slate-500">Ожидают сдачу</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              {stats.byStatus.awaiting_dropoff}
            </div>
            <div className="mt-1 text-sm text-slate-600">Подготовьте к сдаче</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold text-slate-500">В пути</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              {stats.byStatus.in_transit}
            </div>
            <div className="mt-1 text-sm text-slate-600">Следим за статусами</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold text-slate-500">Доставлено</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              {stats.byStatus.delivered}
            </div>
            <div className="mt-1 text-sm text-slate-600">Успешно завершено</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4">
          <div className="grid gap-3 md:grid-cols-12 md:items-end">
            <label className="block md:col-span-5">
              <div className="text-xs font-semibold text-slate-600">Поиск</div>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Номер, маршрут, маркетплейс, статус…"
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
              />
            </label>

            <label className="block md:col-span-3">
              <div className="text-xs font-semibold text-slate-600">Статус</div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as StatusFilter)}
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
              >
                <option value="all">Все</option>
                <option value="draft">Черновики</option>
                <option value="awaiting_dropoff">Ожидают сдачу</option>
                <option value="in_transit">В пути</option>
                <option value="delivered">Доставлено</option>
                <option value="cancelled">Отменено</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <div className="text-xs font-semibold text-slate-600">Маркетплейс</div>
              <select
                value={market}
                onChange={(e) => setMarket(e.target.value as any)}
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
              >
                <option value="all">Все</option>
                <option value="WB">Wildberries</option>
                <option value="Ozon">Ozon</option>
                <option value="Yandex">Яндекс</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <div className="text-xs font-semibold text-slate-600">Сортировка</div>
              <select
                value={`${sortKey}:${sortDir}`}
                onChange={(e) => {
                  const [k, d] = e.target.value.split(":");
                  setSortKey(k as SortKey);
                  setSortDir(d as "asc" | "desc");
                }}
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
              >
                <option value="createdAt:desc">Новые сначала</option>
                <option value="createdAt:asc">Старые сначала</option>
                <option value="priceRub:desc">Дороже сначала</option>
                <option value="priceRub:asc">Дешевле сначала</option>
                <option value="weightKg:desc">Тяжелее сначала</option>
                <option value="weightKg:asc">Легче сначала</option>
                <option value="status:asc">Статус (А→Я)</option>
              </select>
            </label>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setQ("");
                setStatus("all");
                setMarket("all");
                setSortKey("createdAt");
                setSortDir("desc");
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Сбросить фильтры
            </button>

            <div className="text-sm text-slate-500">
              Найдено: <span className="font-semibold text-slate-900">{filtered.length}</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr className="text-left text-xs font-semibold text-slate-600">
                  <th className="px-4 py-3">Номер</th>
                  <th className="px-4 py-3">Дата</th>
                  <th className="px-4 py-3">Маркетплейс</th>
                  <th className="px-4 py-3">Маршрут</th>
                  <th className="px-4 py-3">Места</th>
                  <th className="px-4 py-3">Вес</th>
                  <th className="px-4 py-3">Стоимость</th>
                  <th className="px-4 py-3">Статус</th>
                  <th className="px-4 py-3">Обновление</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filtered.map((s) => (
                  <tr key={s.id} className="text-sm text-slate-900 hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold">{s.id}</td>
                    <td className="px-4 py-3 text-slate-600">{s.createdAt}</td>
                    <td className="px-4 py-3">{MARKET_LABEL[s.marketplace]}</td>
                    <td className="px-4 py-3 text-slate-600">{s.route}</td>
                    <td className="px-4 py-3">{s.pieces}</td>
                    <td className="px-4 py-3">{formatKg(s.weightKg)}</td>
                    <td className="px-4 py-3">{formatMoneyRub(s.priceRub)}</td>
                    <td className="px-4 py-3">
                      <Pill status={s.status} />
                    </td>
                    <td className="px-4 py-3 text-slate-600">{s.lastUpdate}</td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-sm text-slate-600">
                      Ничего не найдено. Попробуйте изменить фильтры.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <Modal
          open={openCreate}
          onClose={() => setOpenCreate(false)}
          onCreate={(draft) => {
            // создаём локально новый ID
            const maxNum = items
              .map((x) => Number(x.id.replace("SP-", "")))
              .filter((n) => Number.isFinite(n))
              .reduce((a, b) => Math.max(a, b), 0);

            const nextId = `SP-${String(maxNum + 1).padStart(6, "0")}`;

            const newItem: Shipment = {
              id: nextId,
              ...draft,
              lastUpdate: "Только что",
            };

            setItems((prev) => [newItem, ...prev]);
          }}
        />
      </section>
    </main>
  );
}

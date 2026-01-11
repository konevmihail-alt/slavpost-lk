"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Панель" },
  { href: "/shipments", label: "Отправления" },
  { href: "/acts", label: "Акты" },
  { href: "/finance", label: "Финансы" },
  { href: "/support/tickets", label: "Обращения" },
  { href: "/company/requisites", label: "Реквизиты" },
  { href: "/company/contacts", label: "Контакты" },
  { href: "/company/sender-address", label: "Адрес отправителя" },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <div>
      <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Меню
      </div>

      <nav className="flex flex-col gap-1">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-2xl px-3 py-2 text-sm font-semibold transition",
                active
                  ? "bg-slate-900 text-white"
                  : "text-slate-900 hover:bg-slate-50",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

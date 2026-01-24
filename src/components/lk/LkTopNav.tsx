"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Панель" },
  { href: "/shipments", label: "Отправления" },
  { href: "/acts", label: "Акты" },
  { href: "/finance", label: "Финансы" },
  { href: "/support/tickets", label: "Обращения" },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function LkTopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2">
      {nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "rounded-xl px-3 py-2 text-sm font-semibold",
              active
                ? "bg-slate-900 text-white"
                : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

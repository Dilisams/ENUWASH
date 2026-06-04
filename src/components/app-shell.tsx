"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Droplets,
  Home,
  Map,
  Recycle,
  Settings,
  Toilet,
  User,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/water", label: "Water", icon: Droplets },
  { href: "/sanitation", label: "Sanitation", icon: Toilet },
  { href: "/waste-to-value", label: "Waste", icon: Recycle },
  { href: "/map", label: "Map", icon: Map },
  { href: "/wallet", label: "Wallet", icon: WalletCards },
  { href: "/admin", label: "Admin", icon: Building2 },
  { href: "/profile", label: "Profile", icon: User },
];

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, balance } = useAppStore();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-200 bg-white p-5 lg:block">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-900 text-white">
            <Droplets className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-lg font-black text-blue-950">
              EnuWASH Wallet
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Live demo
            </span>
          </span>
        </Link>

        <nav className="mt-8 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-950",
                pathname === item.href && "bg-blue-900 text-white hover:bg-blue-900 hover:text-white",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-20 flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <p className="text-sm font-bold text-blue-900">{subtitle}</p>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                {title}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  Balance
                </p>
                <p className="font-black text-blue-950">₦{balance.toLocaleString()}</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/profile">
                  <Settings className="h-4 w-4" />
                  {user.lga}
                </Link>
              </Button>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto border-t border-slate-100 px-5 py-3 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-bold text-slate-600",
                  pathname === item.href && "bg-blue-900 text-white",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="px-5 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

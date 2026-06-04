import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Droplets,
  Factory,
  Landmark,
  MapPinned,
  QrCode,
  Recycle,
  ShieldCheck,
  Smartphone,
  Toilet,
  Truck,
  WalletCards,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { value: "17", label: "Enugu LGAs covered" },
  { value: "24/7", label: "wallet and service access" },
  { value: "3x", label: "water, sanitation, circular impact" },
];

const modules = [
  {
    icon: Droplets,
    title: "Clean water access",
    description:
      "Find nearby boreholes, water vendors, tanker operators, pricing, and live availability before paying.",
  },
  {
    icon: Toilet,
    title: "Sanitation services",
    description:
      "Report sanitation issues, book verified desludging teams, upload photos, and track field service status.",
  },
  {
    icon: Recycle,
    title: "Waste-to-value",
    description:
      "Route septic waste to approved partners that convert it into biogas and bio-fertilizer with impact records.",
  },
];

const workflow = [
  "Select your LGA and role",
  "Fund the unified wallet",
  "Pay by QR or book a service",
  "Track service, receipts, and impact",
];

const features = [
  { icon: QrCode, label: "QR water payments" },
  { icon: Truck, label: "Tanker booking" },
  { icon: MapPinned, label: "Facility maps" },
  { icon: Bell, label: "Service alerts" },
  { icon: Landmark, label: "Government heatmaps" },
  { icon: Factory, label: "Partner directory" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="EnuWASH Wallet home">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-900 text-white">
              <Droplets className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight text-blue-950">
                EnuWASH Wallet
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Enugu State
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a className="hover:text-blue-900" href="#solution">
              Solution
            </a>
            <a className="hover:text-blue-900" href="#services">
              Services
            </a>
            <a className="hover:text-blue-900" href="#impact">
              Impact
            </a>
            <a className="hover:text-blue-900" href="#admin">
              Admin
            </a>
          </nav>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/login">
              Join pilot
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </header>

      <section id="top" className="hero-photo">
        <div className="mx-auto flex min-h-[calc(100svh-8.5rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl text-white">
            <Badge className="border-white/20 bg-white/95 text-blue-950">
              One wallet for water and sanitation
            </Badge>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              EnuWASH Wallet
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
              A trusted digital platform connecting Enugu residents to clean
              water vendors, professional sanitation operators, and circular
              economy partners turning waste into biogas and fertilizer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-50">
                <Link href="/login">
                  Start with phone OTP
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border border-white/25 bg-blue-950/25 text-white ring-white/20 hover:bg-white/10"
              >
                <Link href="/dashboard">
                  Explore services
                  <MapPinned className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:grid-cols-3 sm:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 py-3">
              <span className="text-3xl font-black text-blue-900">{stat.value}</span>
              <span className="text-sm font-semibold leading-5 text-slate-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="solution" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Badge>Problem to platform</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Water access and sanitation finally share one transparent rail.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-650">
                Residents need reliable water and safe sanitation, operators need
                predictable demand, and government teams need live visibility.
                EnuWASH Wallet connects all three with identity, payments,
                location, service records, and measurable environmental value.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map((item, index) => (
                <Card key={item} className="border-blue-900/10">
                  <CardHeader>
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-900 text-lg font-black text-white">
                      {index + 1}
                    </span>
                    <CardTitle className="text-lg">{item}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <Badge>Core modules</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
              Built for households, vendors, operators, partners, and government.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {modules.map((module) => (
              <Card key={module.title} className="transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                    <module.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-slate-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Badge className="border-white/15 bg-white/10 text-white shadow-none">
              Wallet dashboard preview
            </Badge>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
              A single balance for water, desludging, reports, and impact.
            </h2>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              The wallet records funding, QR payments, bookings, refunds, vendor
              settlements, and waste conversion credits, giving every participant
              a clean audit trail.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 text-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">Available balance</p>
                <p className="text-4xl font-black text-blue-950">₦12,850</p>
              </div>
              <WalletCards className="h-10 w-10 text-blue-900" aria-hidden="true" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="rounded-md border border-slate-200 bg-slate-50 p-4"
                >
                  <feature.icon className="h-5 w-5 text-blue-900" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold leading-5">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <Badge>Measurable circular economy</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                Every sanitation job can become cleaner energy and better soil.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                During desludging, households can choose verified waste conversion
                partners. Operators track collection, transfer, processing, and
                outputs so Enugu can see sanitation outcomes beyond disposal.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                ["Biogas potential tracked", "8,420 m³", "bg-green-50 text-green-800"],
                ["Bio-fertilizer estimated", "31.6 tonnes", "bg-amber-50 text-amber-800"],
                ["Verified partner facilities", "14", "bg-blue-50 text-blue-900"],
              ].map(([label, value, className]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="font-semibold text-slate-700">{label}</span>
                  <span className={`rounded-md px-3 py-2 text-xl font-black ${className}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="admin" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Verified operators",
                text: "Role-based onboarding, LGA assignment, credentials, ratings, and service history.",
              },
              {
                icon: BadgeCheck,
                title: "Government oversight",
                text: "Mock admin heatmaps for underserved water zones, sanitation reports, and operator response.",
              },
              {
                icon: WalletCards,
                title: "Payment transparency",
                text: "Paystack-ready wallet funding, receipts, vendor settlements, and transaction exports.",
              },
            ].map((item) => (
              <div key={item.title}>
                <item.icon className="h-9 w-9 text-amber-300" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-lg font-semibold text-slate-200">
              Next build steps: authentication, dashboard, wallet funding, maps,
              Firebase collections, and service booking flows.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-50">
              <Link href="/dashboard">
                Open app demo
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

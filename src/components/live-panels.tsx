"use client";

import Link from "next/link";
import { Droplets, Recycle, Toilet, WalletCards } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { dashboardActions } from "@/lib/mock-data";
import { useAppStore } from "@/store/app-store";

export function DashboardLive() {
  const { balance, impactLitres, sanitationJobs, biogasProduced, bookings, reports } =
    useAppStore();

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Wallet balance", value: `₦${balance.toLocaleString()}`, icon: WalletCards },
          { label: "Clean water paid", value: `${impactLitres.toLocaleString()} L`, icon: Droplets },
          { label: "Sanitation jobs", value: sanitationJobs.toString(), icon: Toilet },
          { label: "Biogas tracked", value: `${biogasProduced.toLocaleString()} m³`, icon: Recycle },
        ].map((item) => (
          <Card key={item.label} className="p-5">
            <item.icon className="h-7 w-7 text-blue-900" />
            <p className="mt-4 text-sm font-bold text-slate-500">{item.label}</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{item.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {dashboardActions.map((action) => (
              <Button key={action.href} asChild variant="outline" className="justify-start">
                <Link href={action.href}>
                  <action.icon className="h-5 w-5" />
                  {action.label}
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {bookings.slice(0, 3).map((booking) => (
              <div key={booking.id} className="rounded-md bg-slate-50 p-3">
                <p className="font-bold">{booking.service}</p>
                <p className="text-sm text-slate-500">
                  {booking.location} · {booking.status}
                </p>
              </div>
            ))}
            {reports.slice(0, 2).map((report) => (
              <div key={report.id} className="rounded-md bg-amber-50 p-3">
                <p className="font-bold">{report.issue}</p>
                <p className="text-sm text-amber-700">
                  {report.lga} · {report.status}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function BookingsPanel() {
  const bookings = useAppStore((state) => state.bookings);

  return (
    <div className="space-y-3">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="flex flex-col gap-2 rounded-md border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-black">{booking.service}</p>
            <p className="text-sm font-semibold text-slate-500">
              {booking.id} · {booking.location}
            </p>
          </div>
          <div className="text-sm font-black text-blue-900">
            {booking.status} · ₦{booking.amount.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReportsPanel() {
  const reports = useAppStore((state) => state.reports);

  return (
    <div className="space-y-3">
      {reports.map((report) => (
        <div key={report.id} className="rounded-md border border-slate-200 bg-white p-4">
          <p className="font-black">{report.issue}</p>
          <p className="text-sm font-semibold text-slate-500">
            {report.id} · {report.lga} · {report.status}
          </p>
        </div>
      ))}
    </div>
  );
}

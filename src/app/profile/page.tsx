"use client";

import { AppShell } from "@/components/app-shell";
import { lgas } from "@/lib/mock-data";
import { useAppStore, type Role } from "@/store/app-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const inputClass =
  "h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10";

export default function ProfilePage() {
  const { user, login } = useAppStore();

  return (
    <AppShell title="Profile" subtitle="Role, location, and contact settings">
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Account details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <input
            className={inputClass}
            value={user.name}
            onChange={(event) => login({ name: event.target.value })}
          />
          <input
            className={inputClass}
            value={user.phone}
            onChange={(event) => login({ phone: event.target.value })}
          />
          <input
            className={inputClass}
            value={user.email}
            onChange={(event) => login({ email: event.target.value })}
          />
          <select
            className={inputClass}
            value={user.role}
            onChange={(event) => login({ role: event.target.value as Role })}
          >
            {[
              "Resident",
              "Water Vendor",
              "Sanitation Operator",
              "Waste Partner",
              "Government Admin",
            ].map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
          <select
            className={inputClass}
            value={user.lga}
            onChange={(event) => login({ lga: event.target.value })}
          >
            {lgas.map((lga) => (
              <option key={lga}>{lga}</option>
            ))}
          </select>
          <p className="rounded-md bg-blue-50 p-4 text-sm font-bold text-blue-950">
            Changes save instantly in this local demo store.
          </p>
        </CardContent>
      </Card>
    </AppShell>
  );
}

import { Factory, Recycle } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { BookingForm } from "@/components/forms";
import { partners } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WasteToValuePage() {
  return (
    <AppShell title="Waste-to-Value" subtitle="Biogas, bio-fertilizer, and verified conversion partners">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <Factory className="h-9 w-9 text-blue-900" />
            <CardTitle>Verified conversion partners</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <p className="font-black">{partner.name}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {partner.output} · {partner.capacity} · {partner.lga}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Recycle className="h-9 w-9 text-green-700" />
            <CardTitle>Book conversion with desludging</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingForm mode="waste" />
            <div className="mt-5 rounded-md bg-green-50 p-4 text-sm font-bold leading-6 text-green-800">
              Selecting this option updates mock biogas and fertilizer impact
              metrics on your dashboard.
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

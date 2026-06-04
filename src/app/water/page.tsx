import { Droplets, QrCode, Truck } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { BookingForm, WaterPaymentForm } from "@/components/forms";
import { waterPoints } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WaterPage() {
  return (
    <AppShell title="Water Services" subtitle="Nearby boreholes, vendors, QR payments, and tanker booking">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <Droplets className="h-9 w-9 text-blue-900" />
            <CardTitle>Available water points</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {waterPoints.map((point) => (
              <div key={point.name} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-black">{point.name}</p>
                    <p className="text-sm font-semibold text-slate-500">
                      {point.lga} · {point.distance} · {point.rating} rating
                    </p>
                  </div>
                  <p className="font-black text-blue-900">
                    ₦{point.price.toLocaleString()} · {point.available}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <QrCode className="h-8 w-8 text-blue-900" />
              <CardTitle>QR water payment</CardTitle>
            </CardHeader>
            <CardContent>
              <WaterPaymentForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Truck className="h-8 w-8 text-blue-900" />
              <CardTitle>Book water tanker</CardTitle>
            </CardHeader>
            <CardContent>
              <BookingForm mode="water" />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

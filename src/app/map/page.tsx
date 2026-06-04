import { MapPinned } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { sanitationOperators, waterPoints, partners } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MapPage() {
  const pins = [
    ...waterPoints.map((item) => ({ type: "Water", name: item.name, lga: item.lga })),
    ...sanitationOperators.map((item) => ({ type: "Sanitation", name: item.name, lga: item.lga })),
    ...partners.map((item) => ({ type: "Waste", name: item.name, lga: item.lga })),
  ];

  return (
    <AppShell title="Map View" subtitle="Mock service map for water, sanitation, facilities, and partners">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="overflow-hidden">
          <div className="relative min-h-[560px] bg-[linear-gradient(90deg,#dbeafe_1px,transparent_1px),linear-gradient(#dbeafe_1px,transparent_1px)] bg-[size:48px_48px]">
            <div className="absolute left-[18%] top-[18%] rounded-md bg-blue-900 px-3 py-2 text-sm font-black text-white shadow-lg">
              Water
            </div>
            <div className="absolute left-[55%] top-[28%] rounded-md bg-green-700 px-3 py-2 text-sm font-black text-white shadow-lg">
              Waste
            </div>
            <div className="absolute left-[38%] top-[52%] rounded-md bg-amber-500 px-3 py-2 text-sm font-black text-slate-950 shadow-lg">
              Toilet
            </div>
            <div className="absolute left-[70%] top-[68%] rounded-md bg-slate-950 px-3 py-2 text-sm font-black text-white shadow-lg">
              Operator
            </div>
            <div className="absolute inset-x-8 bottom-8 rounded-lg bg-white/95 p-4 shadow-xl">
              <p className="font-black text-blue-950">Enugu operational map</p>
              <p className="text-sm font-semibold text-slate-600">
                This mock map is ready to be replaced with Leaflet tiles and
                live Firestore geolocation documents.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <MapPinned className="h-9 w-9 text-blue-900" />
            <CardTitle>Visible service pins</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pins.map((pin) => (
              <div key={`${pin.type}-${pin.name}`} className="rounded-md bg-slate-50 p-3">
                <p className="font-black">{pin.name}</p>
                <p className="text-sm font-semibold text-slate-500">
                  {pin.type} · {pin.lga}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

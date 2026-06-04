import { AlertTriangle, Building2 } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { MetricCard } from "@/components/metric-card";
import { adminMetrics, lgas } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <AppShell title="Government Admin" subtitle="Mock heatmaps, performance, and service visibility">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {adminMetrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              icon={metric.icon}
            />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <Building2 className="h-9 w-9 text-blue-900" />
              <CardTitle>LGA service heatmap</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {lgas.map((lga, index) => (
                <div key={lga} className="rounded-md border border-slate-200 bg-white p-4">
                  <p className="font-black">{lga}</p>
                  <div className="mt-3 h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-blue-900"
                      style={{ width: `${42 + ((index * 11) % 52)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    Coverage score {42 + ((index * 11) % 52)}%
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <AlertTriangle className="h-9 w-9 text-amber-600" />
              <CardTitle>Priority alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Enugu South has 6 unresolved sanitation reports.",
                "Nsukka water point uptime dropped below 70%.",
                "Three tanker operators require verification renewal.",
                "Waste conversion partner capacity is near limit in Nkanu West.",
              ].map((alert) => (
                <div key={alert} className="rounded-md bg-amber-50 p-4 font-bold text-amber-900">
                  {alert}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

import { Camera, Toilet, Truck } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { BookingForm, OperatorSelect, ReportForm } from "@/components/forms";
import { BookingsPanel, ReportsPanel } from "@/components/live-panels";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SanitationPage() {
  return (
    <AppShell title="Sanitation Services" subtitle="Reports, desludging booking, and service tracking">
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <Camera className="h-8 w-8 text-blue-900" />
              <CardTitle>Report sanitation issue</CardTitle>
            </CardHeader>
            <CardContent>
              <ReportForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Truck className="h-8 w-8 text-blue-900" />
              <CardTitle>Book desludging</CardTitle>
            </CardHeader>
            <CardContent>
              <BookingForm mode="sanitation" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <Toilet className="h-8 w-8 text-blue-900" />
              <CardTitle>Verified operators</CardTitle>
            </CardHeader>
            <CardContent>
              <OperatorSelect />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Live service tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <BookingsPanel />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Submitted reports</CardTitle>
            </CardHeader>
            <CardContent>
              <ReportsPanel />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

import { AppShell } from "@/components/app-shell";
import { DashboardLive } from "@/components/live-panels";
import { TransactionList } from "@/components/transaction-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="Unified water, sanitation, and impact overview">
      <div className="space-y-6">
        <DashboardLive />
        <Card>
          <CardHeader>
            <CardTitle>Recent transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionList />
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

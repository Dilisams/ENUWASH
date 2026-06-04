import { WalletCards } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { FundWalletForm } from "@/components/forms";
import { TransactionList } from "@/components/transaction-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WalletPage() {
  return (
    <AppShell title="Wallet & Transactions" subtitle="Paystack test funding and audit trail">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader>
            <WalletCards className="h-9 w-9 text-blue-900" />
            <CardTitle>Fund wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <FundWalletForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full transaction history</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionList />
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

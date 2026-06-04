"use client";

import { useAppStore } from "@/store/app-store";

export function TransactionList() {
  const transactions = useAppStore((state) => state.transactions);

  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-bold text-slate-950">{transaction.title}</p>
            <p className="text-sm text-slate-500">
              {transaction.id} · {transaction.date}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p
              className={
                transaction.type === "credit"
                  ? "font-black text-green-700"
                  : "font-black text-slate-950"
              }
            >
              {transaction.type === "credit" ? "+" : "-"}₦
              {transaction.amount.toLocaleString()}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-900">
              {transaction.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

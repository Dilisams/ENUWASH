import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

export function MetricCard({
  label,
  value,
  icon: Icon,
  tone = "blue",
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  tone?: "blue" | "green" | "gold";
}) {
  const tones = {
    blue: "bg-blue-50 text-blue-900",
    green: "bg-green-50 text-green-800",
    gold: "bg-amber-50 text-amber-800",
  };

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
        </div>
        <span className={`rounded-md p-3 ${tones[tone]}`}>
          <Icon className="h-6 w-6" />
        </span>
      </div>
    </Card>
  );
}

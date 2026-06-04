"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, CreditCard, Send, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { lgas, sanitationOperators, waterPoints } from "@/lib/mock-data";
import { useAppStore, type Role } from "@/store/app-store";

const inputClass =
  "h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10";

export function LoginForm() {
  const router = useRouter();
  const login = useAppStore((state) => state.login);
  const [role, setRole] = useState<Role>("Resident");
  const [lga, setLga] = useState("Enugu North");
  const [phone, setPhone] = useState("+234 801 234 5678");
  const [name, setName] = useState("Chinwe Okafor");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login({ role, lga, phone, name });
    router.push("/dashboard");
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        className={inputClass}
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Full name"
      />
      <input
        className={inputClass}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Phone number"
      />
      <select
        className={inputClass}
        value={role}
        onChange={(event) => setRole(event.target.value as Role)}
      >
        {[
          "Resident",
          "Water Vendor",
          "Sanitation Operator",
          "Waste Partner",
          "Government Admin",
        ].map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <select
        className={inputClass}
        value={lga}
        onChange={(event) => setLga(event.target.value)}
      >
        {lgas.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <Button type="submit" size="lg" className="w-full">
        Verify OTP and enter app
        <Smartphone className="h-5 w-5" />
      </Button>
      <p className="text-center text-sm font-semibold text-slate-500">
        Demo mode accepts any phone number and simulates OTP success.
      </p>
    </form>
  );
}

export function FundWalletForm() {
  const fundWallet = useAppStore((state) => state.fundWallet);
  const [amount, setAmount] = useState(5000);
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fundWallet(amount);
    setMessage(`Wallet funded with ₦${amount.toLocaleString()} in test mode.`);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        className={inputClass}
        type="number"
        min={500}
        step={500}
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <Button type="submit" className="w-full">
        Fund with Paystack test
        <CreditCard className="h-5 w-5" />
      </Button>
      {message && (
        <p className="flex items-center gap-2 text-sm font-bold text-green-700">
          <CheckCircle2 className="h-4 w-4" />
          {message}
        </p>
      )}
    </form>
  );
}

export function WaterPaymentForm() {
  const payForWater = useAppStore((state) => state.payForWater);
  const [vendor, setVendor] = useState(waterPoints[0].name);
  const selected = waterPoints.find((item) => item.name === vendor) || waterPoints[0];
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    payForWater(selected.price, selected.name);
    setMessage(`Paid ${selected.name} successfully.`);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <select
        className={inputClass}
        value={vendor}
        onChange={(event) => setVendor(event.target.value)}
      >
        {waterPoints.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
      <div className="rounded-md bg-blue-50 p-4">
        <p className="text-sm font-bold text-blue-950">
          Price: ₦{selected.price.toLocaleString()} · {selected.distance} away ·{" "}
          {selected.available} availability
        </p>
      </div>
      <Button type="submit" className="w-full">
        Pay by QR wallet
        <Send className="h-5 w-5" />
      </Button>
      {message && <p className="text-sm font-bold text-green-700">{message}</p>}
    </form>
  );
}

export function BookingForm({
  mode,
}: {
  mode: "water" | "sanitation" | "waste";
}) {
  const bookService = useAppStore((state) => state.bookService);
  const defaults = {
    water: {
      service: "Water tanker delivery",
      location: "Independence Layout",
      amount: 12000,
    },
    sanitation: {
      service: "Desludging service",
      location: "Abakpa Nike",
      amount: 25000,
    },
    waste: {
      service: "Desludging with waste conversion",
      location: "Trans-Ekulu",
      amount: 28000,
    },
  }[mode];
  const [location, setLocation] = useState(defaults.location);
  const [amount, setAmount] = useState(defaults.amount);
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    bookService(defaults.service, location, amount);
    setMessage(`${defaults.service} requested for ${location}.`);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        className={inputClass}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Service address"
      />
      <input
        className={inputClass}
        type="number"
        min={1000}
        step={500}
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <Button type="submit" className="w-full">
        Request service
        <Send className="h-5 w-5" />
      </Button>
      {message && <p className="text-sm font-bold text-green-700">{message}</p>}
    </form>
  );
}

export function ReportForm() {
  const submitReport = useAppStore((state) => state.submitReport);
  const [issue, setIssue] = useState("Blocked drainage near public toilet");
  const [lga, setLga] = useState("Enugu South");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitReport(issue, lga);
    setMessage("Report submitted with mock GPS and photo attachment.");
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <textarea
        className="min-h-28 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10"
        value={issue}
        onChange={(event) => setIssue(event.target.value)}
      />
      <select
        className={inputClass}
        value={lga}
        onChange={(event) => setLga(event.target.value)}
      >
        {lgas.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <Button type="submit" className="w-full">
        Submit sanitation report
        <Send className="h-5 w-5" />
      </Button>
      {message && <p className="text-sm font-bold text-green-700">{message}</p>}
    </form>
  );
}

export function OperatorSelect() {
  return (
    <div className="space-y-3">
      {sanitationOperators.map((operator) => (
        <div
          key={operator.name}
          className="rounded-md border border-slate-200 bg-white p-4"
        >
          <p className="font-black text-slate-950">{operator.name}</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {operator.lga} · {operator.response} response · ₦
            {operator.price.toLocaleString()} · {operator.rating} rating
          </p>
        </div>
      ))}
    </div>
  );
}

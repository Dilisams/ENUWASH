import { Droplets } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/forms";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-slate-50 lg:grid-cols-[1fr_0.9fr]">
      <section className="flex items-center bg-blue-950 px-6 py-16 text-white sm:px-12">
        <div className="max-w-2xl">
          <Droplets className="h-12 w-12 text-amber-300" />
          <h1 className="mt-8 text-5xl font-black tracking-tight">
            Enter EnuWASH Wallet
          </h1>
          <p className="mt-5 text-lg leading-8 text-blue-50">
            Use phone OTP or email backup to access water services, sanitation
            bookings, wallet transactions, waste conversion, and government
            visibility tools.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center px-5 py-12">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Login or create account</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

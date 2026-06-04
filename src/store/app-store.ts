"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Role =
  | "Resident"
  | "Water Vendor"
  | "Sanitation Operator"
  | "Waste Partner"
  | "Government Admin";

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: "credit" | "debit";
  status: "Successful" | "Pending";
  date: string;
};

export type Booking = {
  id: string;
  service: string;
  location: string;
  status: "Requested" | "Assigned" | "In transit" | "Completed";
  amount: number;
};

export type Report = {
  id: string;
  issue: string;
  lga: string;
  status: "Open" | "Under review" | "Resolved";
};

type AppState = {
  user: {
    name: string;
    phone: string;
    email: string;
    role: Role;
    lga: string;
  };
  balance: number;
  impactLitres: number;
  sanitationJobs: number;
  biogasProduced: number;
  fertilizerProduced: number;
  transactions: Transaction[];
  bookings: Booking[];
  reports: Report[];
  login: (payload: Partial<AppState["user"]>) => void;
  fundWallet: (amount: number) => void;
  payForWater: (amount: number, vendor: string) => void;
  bookService: (service: string, location: string, amount: number) => void;
  submitReport: (issue: string, lga: string) => void;
};

const now = () =>
  new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

const id = (prefix: string) =>
  `${prefix}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: {
        name: "Chinwe Okafor",
        phone: "+234 801 234 5678",
        email: "chinwe@example.com",
        role: "Resident",
        lga: "Enugu North",
      },
      balance: 12850,
      impactLitres: 18400,
      sanitationJobs: 7,
      biogasProduced: 8420,
      fertilizerProduced: 31.6,
      transactions: [
        {
          id: "TRX-1208",
          title: "Wallet funding via Paystack",
          amount: 10000,
          type: "credit",
          status: "Successful",
          date: "Jun 3, 2026, 10:42 AM",
        },
        {
          id: "TRX-1207",
          title: "QR payment at New Haven Borehole",
          amount: 350,
          type: "debit",
          status: "Successful",
          date: "Jun 2, 2026, 6:18 PM",
        },
        {
          id: "TRX-1206",
          title: "Desludging booking deposit",
          amount: 5000,
          type: "debit",
          status: "Successful",
          date: "Jun 1, 2026, 1:03 PM",
        },
      ],
      bookings: [
        {
          id: "BKG-4481",
          service: "Water tanker delivery",
          location: "Independence Layout",
          status: "In transit",
          amount: 12000,
        },
        {
          id: "BKG-4480",
          service: "Desludging with waste conversion",
          location: "Abakpa Nike",
          status: "Assigned",
          amount: 28000,
        },
      ],
      reports: [
        {
          id: "RPT-9021",
          issue: "Overflowing public toilet",
          lga: "Enugu South",
          status: "Under review",
        },
      ],
      login: (payload) =>
        set((state) => ({
          user: {
            ...state.user,
            ...payload,
            name: payload.name || state.user.name,
          },
        })),
      fundWallet: (amount) =>
        set((state) => ({
          balance: state.balance + amount,
          transactions: [
            {
              id: id("TRX"),
              title: "Wallet funding via Paystack test",
              amount,
              type: "credit",
              status: "Successful",
              date: now(),
            },
            ...state.transactions,
          ],
        })),
      payForWater: (amount, vendor) =>
        set((state) => ({
          balance: Math.max(0, state.balance - amount),
          impactLitres: state.impactLitres + Math.round(amount * 5),
          transactions: [
            {
              id: id("TRX"),
              title: `QR water payment at ${vendor}`,
              amount,
              type: "debit",
              status: "Successful",
              date: now(),
            },
            ...state.transactions,
          ],
        })),
      bookService: (service, location, amount) =>
        set((state) => ({
          balance: Math.max(0, state.balance - amount),
          sanitationJobs:
            service.toLowerCase().includes("desludging") ||
            service.toLowerCase().includes("sanitation")
              ? state.sanitationJobs + 1
              : state.sanitationJobs,
          biogasProduced: service.toLowerCase().includes("conversion")
            ? state.biogasProduced + 80
            : state.biogasProduced,
          fertilizerProduced: service.toLowerCase().includes("conversion")
            ? Number((state.fertilizerProduced + 0.4).toFixed(1))
            : state.fertilizerProduced,
          bookings: [
            {
              id: id("BKG"),
              service,
              location,
              status: "Requested",
              amount,
            },
            ...state.bookings,
          ],
          transactions: [
            {
              id: id("TRX"),
              title: `${service} booking`,
              amount,
              type: "debit",
              status: "Pending",
              date: now(),
            },
            ...state.transactions,
          ],
        })),
      submitReport: (issue, lga) =>
        set((state) => ({
          reports: [
            {
              id: id("RPT"),
              issue,
              lga,
              status: "Open",
            },
            ...state.reports,
          ],
        })),
    }),
    {
      name: "enuwash-wallet-demo",
    },
  ),
);

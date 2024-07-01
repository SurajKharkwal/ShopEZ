import "@/styles/globals.css";
import { ReactNode } from "react";
export default function RootLayout({
  colleaguesTable,
  activeProductCard,
  customerCard,
  salesCard,
}: {
  colleaguesTable: ReactNode;
  activeProductCard: ReactNode;
  customerCard: ReactNode;
  salesCard: ReactNode;
}) {
  return (
    <div className="max-w-7xl flex gap-y-16 justify-center flex-col w-full">
      <h1 className="text-3xl font-semibold translate-y-4">Dashboard</h1>
      <section className="flex flex-wrap w-full gap-8 items-center justify-center">
        {activeProductCard}
        {customerCard}
        {salesCard}
      </section>
      {colleaguesTable}
    </div>
  );
}

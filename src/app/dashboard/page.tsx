import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "./latest-invoice";
import { lusitana } from "@/app/ui/fonts";
import { Card } from "../ui/dashboard/cards";

import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from "@/app/lib/data";

export default async function Page() {
  console.log("@is it being excuted?");
  new Promise((res, rej) => setTimeout(res, 5000));
  const revenue = await fetchRevenue();
  console.log("@@what is revenue", revenue);
  const latestInvoices = await fetchLatestInvoices();

  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}

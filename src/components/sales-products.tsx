"use client";

import salesData from "@/lib/data/salesData";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SalesProductsPage() {
  const filteredSales = salesData;

  return (
    <div>
      <h1 className="text-4xl text-center p-10">Sales Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {filteredSales.map((sale) => (
          <Card
            key={sale.id}
            className="mb-4"
            onClick={() => {
              redirect(`/product/${sale.id}`);
            }}
          >
            <CardHeader>
              <CardTitle>{sale.product}</CardTitle>
              <CardDescription>{sale.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sales: {sale.product}</p>
              <p>Units Sold: {sale.amount}</p>
              <p>Agent Sales: {sale.agent}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
